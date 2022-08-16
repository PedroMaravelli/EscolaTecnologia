module.exports = (sequelize, DataTypes) => {
    const professor = sequelize.define('Professor', {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING
    },
    {
        tableName: 'professores',
        timestamps: false
    })
    professor.associate = (models) =>{
        professor.hasMany(models.Turma,{
            foreignKey: 'professor_id'
        })
    }
    return professor
}