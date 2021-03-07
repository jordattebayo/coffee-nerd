const express = require('express');
const router = express.Router();
const { getLogs, addLog, deleteLog } = require('../controllers/logs');

router
    .route('/')
    .get(getLogs)
    .post(addLog);

router
    .route('/:id')
    .delete(deleteLog);

module.exports = router;