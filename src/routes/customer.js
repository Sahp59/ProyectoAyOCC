const customerController = require('../controllers/customerController.js');

const express = require('express');
const router = express.Router();

router.get('/', customerController.list);
router.post('/add', customerController.agregar);


module.exports = router;