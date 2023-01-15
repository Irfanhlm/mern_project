const express = require('express');
const router = express();

router.get('/events', (req, res) => {
    res.status(206).json({
        message: 'Get all events'
    });
});

router.get('/events/:id', (req, res) => {
    res.status(208).json({
        message: 'Get detail events by id'
    });
});

router.post('/events/:id/checkout', (req, res) => {
    res.status(208).json({
        message: 'Checkout events'
    });
});

router.get('/dashboard', (req, res) => {
    res.status(207).json({
        message: 'Get dashboard'
    });
});

router.get('/dashboard/:id', (req, res) => {
    res.status(207).json({
        message: 'Get detail dashboard by Id'
    });
});
router.post('/participants/auth/signin', (req, res) => {
    res.status(207).json({
        message: 'Sign in'
    });
});
router.post('/participants/auth/signup', (req, res) => {
    res.status(207).json({
        message: 'Sign up'
    });
});


module.exports = router;