const {sequelize, Curso} = require('../database/models')


const homePageController = {
    homePage: async(req, res) =>{
        const cursos = await Curso.findAll({
            include:'Area',
            required: true
        })
        res.render('homePage',{cursos})
    }

}

module.exports = homePageController