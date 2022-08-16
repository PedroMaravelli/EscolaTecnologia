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
            as:'aluno_turma',
            through:'alunos_has_turmas',
            foreignKey:'aluno_id',
            otherKey:'turma_id',
            timestamps: false,
            numero_faltas: DataTypes.INTEGER
        })   
    }

    return aluno
}