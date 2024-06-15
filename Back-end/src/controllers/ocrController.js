const { extractTextFromImage, parseIDInfo } = require('../utils/ocrUtils');

exports.processImage = async (req, res) => {
  if (!req.file)
    return res.status(400).json({ message: 'Please upload an image' });
  const imagePath = req?.file?.path;
  try {
    const text = await extractTextFromImage(imagePath);
    const idInfo = parseIDInfo(text);
    res.json(idInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
