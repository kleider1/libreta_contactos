module.exports=(sequelize, type) =>{
    return sequelize.define('contactos',{
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombres: type.STRING,
        apellidos: type.STRING,
        correo: type.STRING,
        telefonos: type.STRING,
        celular: type.STRING,
        direccion: type.STRING
    })
}