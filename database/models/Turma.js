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
            as: 'alunos_turmas',
            through: models.AlunoTurma,
            foreignKey: 'aluno_id',
            
        })

        turma.belongsTo(models.Professor,{
            foreignKey:'professor_id',
        })
        
        turma.belongsTo(models.Curso,{
            foreignKey:'curso_id',
        })
    }
    return turma
}