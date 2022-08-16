module.exports = (sequelize, DataTypes) => {

    const turma = sequelize.define("Turma", {
        duracao: DataTypes.INTEGER,
        ano_inicio: DataTypes.INTEGER,
        semestre: DataTypes.TINYINT(1),
        curso_id: DataTypes.INTEGER,
        professor_id: DataTypes.INTEGER


    },
        {
            tableName: 'turmas',
            timestamps: false
        })
    turma.associate = (models) => {
        turma.belongsToMany(models.Aluno, {
            as: 'turma_aluno',
            through: 'alunos_has_turmas',
            foreignKey: 'turma_id',
            otherKey: 'aluno_id',
            timestamps: false
        })

        turma.belongsTo(models.Professor,{
            foreignKey:'professor_id',
            as: 'professor'
        })
        
        turma.belongsTo(models.Curso,{
            foreignKey:'curso_id',
            as: 'curso_turma'
        })
    }
    return turma
}