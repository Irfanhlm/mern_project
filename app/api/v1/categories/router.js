const express = require('express');
const router = express();

router.get('/categories', (req, res) => {
    res.status(201).json({
        message: 'Ini Halaman Categories'
    });
});

router.post('/categories', (req, res) => {
    res.status(202).json({
        message: 'Berhasil membuat categories'
    });
});

router.get('/categories/:id', (req, res) => {
    res.status(203).json({
        message: 'Ini ID users'
    });
});

router.put('/categories/:id', (req, res) => {
    res.status(204).json({
        message: 'edit saved'
    });
});

router.delete('/categories/:id', (req, res) => {
    res.status(205).json({
        message: 'deleted catogories'
    });
});

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
        message: 'success get talents by id'
    });
});

module.exports = router;