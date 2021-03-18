const express = require("express");
const config = require('config');
const port = config.get('Parametrs.port');
const app = express();
const nodemail = require("./Router/nodemailerRouter")
const cors = require("cors")
const models = require('./models');
const sequelize = require('./db');

app.use(cors())
app.use(express.json())
app.use('/nodemail', nodemail);
const start = async() => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
        await sequelize.sync();
        app.listen(port, () => {
          console.log(`Example app listening at http://localhost:${port}`)
        })
    } catch(error){
      console.error('Unable to connect to the database:', error);
    }
  }

  start();
