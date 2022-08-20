const { sequelize, Professor} = require('./database/models')

async function busca(){
    const retorna = await Professor.findByPk(3,
        {include:['turmaProf']})
    console.log(retorna.toJSON())

}
busca()




