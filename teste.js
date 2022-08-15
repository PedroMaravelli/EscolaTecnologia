const {sequelize, Area} = require('./database/models')

async function busca(){
    const al = await Area.findAll()
    console.log(al)
}
busca()