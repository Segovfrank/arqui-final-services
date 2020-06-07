const router = require('express').Router();
const paymentController = require('../controllers/payment');
const statusController = require('../controllers/status');

router.get('/payment', paymentController.createPayment);
router.post('/status/get', statusController.get);
router.post('/status/update', statusController.update);

module.exports = router;
