module.exports = (sequelize, DataTypes) => {
    const professor = sequelize.define('Professor', {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING
    },
    {
        tableName: 'professores',
        timestamps: false
    })
    return professor
}