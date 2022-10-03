const express = require('express');
const router = express.Router();
var { getTodo,newTodo } = require('../controller/indexControllers');

router.get('/', getTodo);
router.post('/', newTodo);

module.exports = router;