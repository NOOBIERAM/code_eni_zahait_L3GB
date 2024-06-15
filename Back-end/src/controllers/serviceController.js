const model = require('../models')

module.exports = {
    getService: async(req, res) => {
        try {
            const service = await model.Services.findAll()
            res.status(201).json({service : service})
        } catch (error) {
            res.status(500).json({ message: error.message });   
        }
    }
}