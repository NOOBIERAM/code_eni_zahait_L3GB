const model = require('../models')

module.exports = {
    post_faq: async(req, res) => {
        try {
            const userId = req.user.id
            const content = req.body.content  
            const post = await model.Faq.create({
                userId,content
            })
            res.status(201).json({message : 'Succes'})
        } catch (error) {
            res.status(500).json({ message: error.message }); 
        }
    },

    get_faq: async(req, res) => {
        try {
            const response = await model.User.findAll({
                attributes: ['name'],
                include: {
                    attributes: ['content','id'],
                    model: model.Faq,
                    required: true,
                    include: {
                        attributes: ['comment','id'],
                        model: model.Comment,
                        as : 'comments',
                        include: [{
                            attributes: ['name'],
                            model: model.User,
                            as: 'user'
                        },{
                            attributes: ['comment','id'],
                            model : model.Comment_response, 
                            as : 'replies',
                            include : [{
                                attributes: ['name'],
                                model : model.User,
                                as : 'user'
                            }]
                        }]
                    }
                }
            });

            res.status(201).json(response)
        } catch (error) {
            res.status(500).json({ message: error.message });    
        }
    }
}