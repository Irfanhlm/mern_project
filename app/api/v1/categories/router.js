const { create, index, find, update, remove } = require('./controller');
const express = require('express');
const router = express();

router.get('/categories', index);
router.get('/categories/:id', find);
router.post('/categories', create);
router.put('/categories/:id', update);
router.delete('/categories/:id', remove);

module.exports = router;