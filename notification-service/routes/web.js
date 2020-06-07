const router = require('express').Router();
const notificationController = require('../controllers/notification');

router.post('/sendOrder', notificationController.sendOrder);
router.post('/sendTicket', notificationController.sendTicket);
router.post('/sendTransaction', notificationController.sendTransaction);

module.exports = router;
