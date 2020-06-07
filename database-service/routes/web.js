const router = require('express').Router();
const saveTransaction = require('../controllers/transaction');
const connection = require('../controllers/connection');

router.get('/transaction/post', saveTransaction.create);
router.get('/connect', connection.connect);
router.get('/transaction/invalid', saveTransaction.invalid);

module.exports = router;
