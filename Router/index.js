 const Router = require('express');
const router = new Router();
const airRouter = require('./airRouter');
const workRoter = require('./workRouter')

router.use('/air', airRouter);
router.use('/job', workRoter);


module.exports = router;