const router = require('express').Router();
const ticketController = require('../controllers/log');
const logController = require('../controllers/ticket');

router.get('/ticket/generate', ticketController.create);
router.get('/log', logController.create);

module.exports = router;
