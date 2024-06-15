const model = require('../models')

module.exports = {
    getImpots : async(req, res) => {
        try {
            const user = await model.User.findOne({ where: { id: req.user.id } });
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
            const identity = user.identity
            const impots = await model.Impot.findAll({
                where : {identity: identity},
                attributes: ['id','motif', 'amount', 'annee']
            })
            res.status(201).json({impots : impots})
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getImpotsImpaye : async(req, res) => {
        try {
            const user = await model.User.findOne({ where: { id: req.user.id } });
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
            const identity = user.identity
            const impots = await model.Impot.findAll({
                where : {identity: identity, status:'Impayé'},
            })
            res.status(201).json({impots : impots})
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}