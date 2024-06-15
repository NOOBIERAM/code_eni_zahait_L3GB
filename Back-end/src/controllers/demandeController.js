const model = require('../models')
const date = require('../utils/SubstractDate')

module.exports = {
    envoyerDemande: async(req, res) => {
        try {
            const date_demande = await date.takeDate()
            const userId = req.user.id
            const serviceId = req.query.serviceId
            const demande = await model.Demande.create({
                userId : userId,
                serviceId: serviceId,
                date_demande: date_demande})
            res.status(201).json({message : 'Succes'})
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    mesdemande : async(req, res) => {
        try {
            const userId = req.user.id
            const response = await model.Demande.findAll({
                where : {userId}
            })
            res.status(201).json({response : response})
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}