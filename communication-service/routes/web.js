const router = require('express').Router();
const paymentController = require('../controllers/payment');
const statusController = require('../controllers/status');

router.get('/payment', paymentController.createPayment);
router.get('/status/get', statusController.get);
router.get('/status/update', statusController.update);

module.exports = router;
