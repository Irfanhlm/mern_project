const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// router 
const categoriesRouter = require('./app/api/v1/categories/router');
const talentsRouter = require('./app/api/v1/talents/router');
const imagesRouter = require('./app/api/v1/images/router');
const ordersRouter = require('./app/api/v1/orders/router');
const ticketsCategoriesRouter = require('./app/api/v1/tickets_categories/router');

const v1 = '/api/v1/cms';
const v2 = '/api/v1';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(v1, categoriesRouter);
app.use(v1, talentsRouter);
app.use(v1, imagesRouter);
app.use(v2, ordersRouter);
app.use(v1, ticketsCategoriesRouter);

module.exports = app;


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to api semina',
    });
});