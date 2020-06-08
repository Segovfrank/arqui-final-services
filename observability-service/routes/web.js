const router = require('express').Router();
const ticketController = require('../controllers/ticket');
const logController = require('../controllers/log');
const healthController = require('../controllers/healthcheck');

router.get('/ticket', ticketController.create);
router.get('/log', logController.create);
router.get('/healthcheck', healthController.check);

module.exports = router;
