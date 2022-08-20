const {sequelize, Turma} = require('../database/models')

const turmasController = {
    turma: async(req,res) =>{

        const {id} = req.params
        const turma = await Turma.findAll({
            include:'turma_curso',
            required: true,

        })
        
        res.render('turmas',{turma})
    }

}
module.exports = turmasController