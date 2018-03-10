let Estudiante = function(sequelize,Sequelize){
    let modelo = sequelize.define('Estudiantes',
        {
            idEstudiante: {primaryKey: true,autoIncremente:true,type:Sequelize.INTEGER},
            nombreEstudiante: {type: Sequelize.STRING},
            edadEstudiante: {type: Sequelize.INTEGER,notEmpty: true}

        },
        {
            timestamps: false,
            freezeTableName: true
        }
    );
    return modelo;
};

module.exports = Estudiante;