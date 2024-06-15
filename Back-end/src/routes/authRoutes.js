const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const impots = require('../controllers/impotController')
const faq = require('../controllers/faqController')
const {
  register,
  login,
  refreshToken,
  me,
} = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);

router.get('/me', authMiddleware, me);
router.get('/impots', authMiddleware, impots.getImpots)
router.get('/impots/impaye', authMiddleware, impots.getImpotsImpaye)
router.post('/post', authMiddleware, faq.post_faq)

module.exports = router;
