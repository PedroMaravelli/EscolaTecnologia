const { sequelize, Turma, alunos_has_turmas } = require('./database/models')



async function busca() {
    const turmas = await Turma.update({
        numero_faltas: 2,
        where: { id: 4 }

    })
    console.log(turmas)


}
busca()

