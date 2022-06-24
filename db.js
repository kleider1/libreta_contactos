const Sequelize = require('sequelize');

const contactosModel = require ('./models/contactos');

const sequelize = new Sequelize('contactos','root','',{
    host:'localhost',
    dialect: 'mysql'
});


const Contactos = contactosModel(sequelize,Sequelize);

sequelize.sync({force: false})
.then(()=> {
    console.log('Tablas sincronizadas')
})

module.exports={
    Contactos
}
