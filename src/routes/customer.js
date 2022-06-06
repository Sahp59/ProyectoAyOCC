const customerController = require('../controllers/customerController.js');

const express = require('express');
const router = express.Router();

router.get('/', customerController.list);
router.post('/add', customerController.agregar);
router.get('/update/:id', customerController.editar);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.borrar);


module.exports = router;