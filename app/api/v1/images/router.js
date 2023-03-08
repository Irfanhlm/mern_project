const express = require('express');
const router = express();
const { create, index } = require('./controller');
const upload = require('../../../middlewares/mutler');

router.post('/images', upload.single('iniphoto'), create);
router.get('/images', index);

module.exports = router;