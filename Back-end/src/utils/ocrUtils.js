const sharp = require('sharp');
const Tesseract = require('tesseract.js');

const preprocessImage = async (inputPath, outputPath, rotationAngle = 0) => {
  try {
    let image = sharp(inputPath)
      .rotate(rotationAngle)
      .grayscale()
      .threshold(128);

    await image.toFile(outputPath);
    console.log(`Preprocessed image saved to ${outputPath}`);
  } catch (error) {
    console.error('Error preprocessing image:', error);
  }
};

const extractTextFromImage = async (imagePath) => {
  try {
    const {
      data: { text },
    } = await Tesseract.recognize(imagePath, 'eng+fra', {
      logger: (m) => console.log(m),
    });
    return text;
  } catch (error) {
    console.error('Error extracting text:', error);
  }
};

const parseIDInfo = (text) => {
  const lines = text.split('\n');
  let info = {
    name: '',
    surname: '',
    documentNumber: '',
    boriboritany: '',
    asa: '',
    pere: '',
    mere: '',
    natao: '',
    tamin: ''
  };


  lines.forEach((line, index) => {
    if (/ANARANA\s*:\s*/i.test(line) || /Nom\s*:\s*/i.test(line)) {
      info.name = line.split(':')[1]?.trim();
    }
    if (
      /Fanampin' Anarana\s*:\s*/i.test(line) ||
      /Prénoms\s*:\s*/i.test(line)
    ) {
      info.surname = line.split(':')[1]?.trim();
    }
    if (/LAHARANA\s*\/N/i.test(line)) {
      const sameLineMatch = line.match(/LAHARANA\s*\/N\s*:\s*(\d+)/i);
      if (sameLineMatch) {
        info.documentNumber = sameLineMatch[1].trim();
      }

      if (!info.documentNumber && lines[index + 1]) {
        const nextLine = lines[index + 1].trim();
        const match = nextLine.match(/\d+/g);
        if (match) {
          info.documentNumber = match.join('');
        }
      }
    }
  });

  if (!info.documentNumber) {
    const match = text.match(/(\d{12,})/);
    if (match) {
      info.documentNumber = match[1].trim();
    }
  }

  lines.forEach((line, index) => {
    if (/BORIBORITANY\s*:\s*/i.test(line) || /Arrondissement\s*:\s*/i.test(line)) {
      info.boriboritany = line.split(':')[1]?.trim();
    }
    if (/ASA ATAO\s*:\s*/i.test(line) || /Profession\s*:\s*/i.test(line)) {
      info.asa = line.split(':')[1]?.trim();
    }
    if (/RAY NITERAKA\s*:\s*/i.test(line) || /Père\s*:\s*/i.test(line)) {
      info.pere = line.split(':')[1]?.trim();
    }
    if (/RENY NITERAKA\s*:\s*/i.test(line) || /Mère\s*:\s*/i.test(line)) {
      info.pere = line.split(':')[1]?.trim();
    }
    if (/NATAO TAO\s*:\s*/i.test(line) || /Fait à\s*:\s*/i.test(line)) {
      info.natao = line.split(':')[1]?.trim();
    }
    if (/TAMIN' NY\s*:\s*/i.test(line) || /Le\s*:\s*/i.test(line)) {
      info.tamin = line.split(':')[1]?.trim();
    }
  });

  return info;
};

module.exports = {
  preprocessImage,
  extractTextFromImage,
  parseIDInfo,
};
