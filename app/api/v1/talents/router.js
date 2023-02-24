const express = require('express');

const router = express();

router.get('/talents', (req, res) => {
    res.status(206).json({
        message: 'Ini halaman talents'
    });
});

router.post('/talents', (req, res) => {
    res.status(207).json({
        message: 'talents created'
    });
});

router.get('/talents/:id', (req, res) => {
    res.status(208).json({
        message: 'success get talents by id'
    });
});

router.put('/talents/:id', (req, res) => {
    res.status(208).json({
        message: 'success update talents by id'
    });
});

router.delete('/talents/:id', (req, res) => {
    res.status(208).json({
        message: 'success get talents by id'
    });
});


module.exports = router;