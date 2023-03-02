const express = require('express');
const router = express();
const { create } = require('./controller');
const upload = require('../../../middlewares/mutler');

router.post('/images', upload.single('iniphoto'), create);

module.exports = router;