const express = require('express');
const router = express();

router.get('/orders', (req, res) => {
    res.status(200).json({
        message: 'Get All Orders'
    });
});

router.get('/orders/:id', (req, res) => {
    res.status(200).json({
        message: 'Get Order by Id'
    });
});

module.exports = router;