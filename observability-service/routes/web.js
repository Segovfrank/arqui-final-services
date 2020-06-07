const router = require('express').Router();
const ticketController = require('../controllers/log');
const logController = require('../controllers/ticket');
const healthController = require('../controllers/healthcheck');

router.get('/ticket/generate', ticketController.create);
router.get('/log', logController.create);
router.get('/healthcheck', healthController.check);

module.exports = router;
