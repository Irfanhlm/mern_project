const express = require('express');
const router = express();
const { create, index, find } = require('./controller');

router.get('/categories', index);

router.get('/categories/:id', find);

router.post('/categories', create);

router.get('/categories/:id', (req, res) => {
    res.status(203).json({
        message: 'Categorie by Id'
    });
});

router.put('/categories/:id', (req, res) => {
    res.status(204).json({
        message: 'success update categorie by id'
    });
});

router.delete('/categories/:id', (req, res) => {
    res.status(205).json({
        message: 'Catogories Deleted'
    });
});

module.exports = router;