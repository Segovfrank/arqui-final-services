const router = require('express').Router();
const paymentController = require('../controllers/payment');
const statusController = require('../controllers/status');
const botController = require('../controllers/bot');

router.get('/payment', paymentController.createPayment);
router.get('/transaction', paymentController.processTransaction);
router.get('/status/get', statusController.get);
router.get('/status/update', statusController.update);
router.post('/receive', botController.receive);
router.get('/send', botController.send);

module.exports = router;
