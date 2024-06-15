const model = require('../models')
const {takeId} = require('../utils/tokenUtils')

module.exports = {
    add_commentor: async(req, res) => {
        try {
            const comment = req.body.comment
            const postId = req.query.postId
            const userId = req.user.id
            const response = await model.Comment.create({
                userId,
                postId,
                comment
            })
            res.status(201).json({message : 'Succes'})
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    add_comment_response: async(req, res) => {
        try {
            const comment = req.body.comment
            const commentId = req.query.commentId
            const userId = req.user.id
            const response = await model.Comment_response.create({userId,commentId,comment})
            res.status(201).json({message : 'Succes'})
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}