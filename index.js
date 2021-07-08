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
app.set('view engine', 'ejs');
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

const  http = require("http") ;
const  Router = require ("router");
  const finalhandler = require("finalhandler");
  
  const router = Router();
  
  const launch = () => {
      http.createServer((req, res) => {
          console.log("Incoming request: ", req.url, req.method);
          preHandle(req, res).then((result) => {
              router(req, res, finalhandler(req, res));
          });
      }).listen(80, () => console.log(`Test server running`));
  }
  
  // export default launch;
  launch();
  
  router.get('/', (req, res) => {
      res.writeHead(200);
      res.write('Main page');
      res.end();
  })
  
  // TODO share_link handler
  router.get('/static', async (req, res) => { res.writeHead(200); })
  
  
  















  const express = require("express");
  const config = require('config');
  const port = config.get('Parametrs.port');
  const app = express();
  const nodemail = require("./Router/nodemailerRouter")
  const cors = require("cors")
  const sequelize = require('./db');
  const router = require('./Router/index')
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync('/etc/letsencrypt/live/breeze-crimea.ru/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/breeze-crimea.ru/fullchain.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};
app.use(cors())
app.use(express.json())
app.use('/nodemail', nodemail);
app.use('/', router);
app.set('view engine', 'ejs');
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);

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


const express = require('express')
const path = require('path')
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync('/etc/letsencrypt/live/breeze-crimea.ru/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/breeze-crimea.ru/fullchain.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};


const app = express()
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);

app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
