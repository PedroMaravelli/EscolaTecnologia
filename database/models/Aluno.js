module.exports = (sequelize, DataTypes) => {

    const aluno = sequelize.define("Aluno", {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        ano_matricula: DataTypes.INTEGER

    },
        {
            tableName: 'alunos',
            timestamps: false
        })

    aluno.associate = (models)=>{
        aluno.belongsToMany(models.Turma,{
            as:'turma_alunos',
            through:models.AlunoTurma,
            foreignKey:'turma_id',
        })   
    }

    return aluno
}