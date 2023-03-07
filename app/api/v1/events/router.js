const express = require('express');
const router = express();
const { create, index, find, update, remove } = require('./controller');

router.get('/events', index);
router.get('/events/:id', find);
router.put('/events/:id', update);
router.delete('/events/:id', remove);
router.post('/events', create);

module.exports = router;