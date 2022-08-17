
module.exports = (sequelize, DataTypes) => {
    const curso = sequelize.define('Curso', {
        nome: DataTypes.STRING,
        area_id: DataTypes.INTEGER  
    },
    {
        tableName: 'cursos',
        timestamps: false
    })

    curso.associate = (models)=>{
        curso.belongsTo(models.Area, {
            foreignKey: 'area_id'
        })

        curso.hasMany(models.Turma, {
            foreignKey: 'curso_id',
        })
    }
    return curso
}