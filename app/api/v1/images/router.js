const express = require('express');
const router = express();

router.post('/images', (req, res) => {
    res.status(200).json({
        message: 'Images Posted'
    });
});

module.exports = router;