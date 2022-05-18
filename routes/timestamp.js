const express = require('express');

const router = express.Router();
const timeController = require('../controllers/timestamp');

//date param route
router.get('/api/:date?', timeController.timeStamp);


module.exports = router;
