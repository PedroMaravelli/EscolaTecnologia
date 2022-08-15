module.exports = (sequelize, DataTypes) => {
    const turma = sequelize.define('Turma', {
        duracao: DataTypes.INTEGER,
        ano_inicio: DataTypes.INTEGER,
        semestre: DataTypes.TINYINT,
        curso_id: DataTypes.INTEGER,
        professor_id: DataTypes.INTEGER
    },
    {
        tableName: 'turmaes',
        timestamps: false
    })
    return turma
}