const express = require('express');
const multer = require('multer');
const { processImage } = require('../controllers/ocrController');
// const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post(
  '/process-image',
  // authMiddleware,
  upload.single('image'),
  processImage
);

module.exports = router;
