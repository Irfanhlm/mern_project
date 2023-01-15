const express = require('express');
const router = express();

router.get('/payments', (req, res) => {
    res.status(206).json({
        message: 'Get all payments'
    });
});

router.post('/payments', (req, res) => {
    res.status(208).json({
        message: 'Create payments'
    });
});

router.get('/payments/:id', (req, res) => {
    res.status(208).json({
        message: 'Get one payments by id'
    });
});

router.put('/payments/:id', (req, res) => {
    res.status(208).json({
        message: 'Update payments by id'
    });
});

router.delete('/payments/:id', (req, res) => {
    res.status(208).json({
        message: 'Delete payments by id'
    });
});


module.exports = router;