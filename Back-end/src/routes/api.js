const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController')
const {refreshToken} = require('../controllers/authController')
const service = require('../controllers/serviceController')
const demande = require('../controllers/demandeController')
const faq = require('../controllers/faqController')
const comment = require('../controllers/commentorController')
const authMiddleware = require('../middlewares/authMiddleware');




router.post('/register',auth.register)

router.post('/refresh-token', refreshToken)
router.get('/services', service.getService )
router.post('/comment/post', authMiddleware, comment.add_commentor)
router.post('/post/faq', authMiddleware, faq.post_faq)
router.get('/get/faq', authMiddleware, faq.get_faq)
router.post('/demande', authMiddleware, demande.envoyerDemande)
router.get('/mes/demandes', authMiddleware , demande.mesdemande)
router.post('/add/comment/response', authMiddleware, comment.add_comment_response )



module.exports = router 