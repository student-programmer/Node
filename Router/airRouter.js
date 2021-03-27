const Router = require('express');
const router = new Router();
const AirController = require('../Controlers/airController');

router.get("/get", AirController.createAir);

module.exports = router;


