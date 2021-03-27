const express = require("express");
const config = require('config');
const port = config.get('Parametrs.port');
const app = express();
const nodemail = require("./Router/nodemailerRouter")
const cors = require("cors")
const sequelize = require('./db');
const router = require('./Router/index')


app.use(cors())
app.use(express.json())
app.use('/nodemail', nodemail);
app.use('/', router);
const start = async() => {
    try {
      
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await sequelize.sync()
        app.listen(port, () => {
          console.log(`Example app listening at http://localhost:${port}`)
        })
    } catch(error){
      console.error('Unable to connect to the database:', error);
    }
  }
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to tazer application." });
  });

  start();
