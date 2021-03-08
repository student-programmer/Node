const express = require("express")
const router = express.Router()
const nodemailer = require("../Controlers/nodemailerControiler")
router.post("/form", nodemailer.nodemailer_send)

module.exports = router;