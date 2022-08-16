module.exports = (sequelize, DataTypes) => {

    const alunoTurma = sequelize.define("AlunoTurma", {
        aluno_id: DataTypes.INTEGER,
        turma_id: DataTypes.INTEGER,
        numero_faltas: DataTypes.INTEGER

    },
        {
            tableName: 'alunos_has_turmas',
            timestamps: false
        })

        return alunoTurma

}