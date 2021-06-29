const { Sequelize } = require('sequelize');
const config = require("config")
 const host = config.get('Parametrs.host'); 
 const userName = config.get('Parametrs.userName'); 
 const dbPassword = config.get('Parametrs.dbPassword'); 
 const nameDb = config.get('Parametrs.nameDb'); 
const sequelize = new Sequelize( nameDb, userName,dbPassword, {
    host: host,
    port:3306,
    dialect: "mysql",
  });
module.exports = sequelize;



// Где смотреть информацию 
// https://talks.pub/post/kak_ispolzovat_orm_sequelize
// http://ru.uwenku.com/question/p-gusolwcp-wu.html
// https://github.com/bezkoder/nodejs-express-sequelize-mysql