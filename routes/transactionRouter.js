const express = require('express');
const Cntrl = require('../controller/transactionCtrl');

const router = express.Router();

router.get('/', Cntrl.getTranx);
router.post('/add', Cntrl.addTranx);
router.delete('/del/:id', Cntrl.delTranx);

module.exports = router;
