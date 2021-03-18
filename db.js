const { Sequelize } = require('sequelize');
const config = require("config")
 const host = config.get('Parametrs.host'); 
 const dbName = config.get('Parametrs.dbName'); 
 const dbPassword = config.get('Parametrs.dbPassword'); 
 const nameDb = config.get('Parametrs.nameDb'); 

const sequelize = new Sequelize(nameDb, dbName, dbPassword, {
    host: host,
    dialect: "mysql",
  });


module.exports = sequelize;