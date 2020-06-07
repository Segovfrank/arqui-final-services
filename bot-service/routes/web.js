const router = require('express').Router();
const botController = require('../controllers/bot');

router.post('/receive', botController.receive);
router.get('/send', botController.send);

module.exports = router;
