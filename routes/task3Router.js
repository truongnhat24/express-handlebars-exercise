const express = require('express');
const router = express.Router();
const controller = require('../controllers/task3Controller');

router.get('/', controller.show);
module.exports = router;