const Router = require('express');
const router = new Router();
const AirController = require('../Controlers/airController');

router.get("/get", AirController.createAir);
router.get('/gets', AirController.getAir)
module.exports = router;


