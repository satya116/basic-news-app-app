const router = require('express').Router();
const getNewsController = require('./controllers/getNewsController');

router.get('/getnews', getNewsController);

module.exports = router;