const express = require("express");
const config = require('config');
const port = config.get('Parametrs.port');
const app = express();
const nodemail = require("./Router/nodemailerRouter")
const cors = require("cors")


app.use(cors())
app.use(express.json())
app.use('/nodemail', nodemail);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })