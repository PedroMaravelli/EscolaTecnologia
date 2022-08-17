const {sequelize,  Curso} = require('../database/models')


const cursosController = {
    curso: async (req,res) =>{
        const {idCurso} = req.params
        const curso = await Curso.findByPk(idCurso,{
            include: 'Area',
            required: true
        })
        
        
        
        
        res.render('cursos',{ curso})
    }

}

module.exports = cursosController