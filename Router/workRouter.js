const Router = require('express');
const router = new Router();
const WorkController = require('../Controlers/workController');

router.get("/create", WorkController.createWorkObject);
router.get('/work', WorkController.getWork)
module.exports = router;


