 const Router = require('express');
const router = new Router();
const airRouter = require('./airRouter');

router.use('/air', airRouter);

module.exports = router;