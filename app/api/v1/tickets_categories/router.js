const express = require('express');
const router = express();

router.get('/tickets-categories', (req, res) => {
    res.status(200).json({
        message: 'Get all ticket categories'
    });
});

router.post('/tickets-categories', (req, res) => {
    res.status(200).json({
        message: 'Create ticket categories'
    });
});

router.get('/tickets-categories/:id', (req, res) => {
    res.status(200).json({
        message: 'Get one ticket categories'
    });
});

router.put('/tickets-categories/:id', (req, res) => {
    res.status(200).json({
        message: 'Update ticket categories by Id'
    });
});

router.delete('/tickets-categories/:id', (req, res) => {
    res.status(200).json({
        message: 'Delete ticket categories by Id'
    });
});


module.exports = router;