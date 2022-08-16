const { sequelize, AlunoTurma} = require('./database/models')

async function busca(){
    const retorna = await AlunoTurma.update({
        'numero_faltas': 3,
    },
    {
        where:{id:4}
    })
    console.log(retorna)

}
busca()




