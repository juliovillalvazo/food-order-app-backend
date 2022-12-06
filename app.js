const express = require('express');
require('./db');
const cors = require('cors');
const app = express();
const foodRouter = require('./routes/food.routes');
app.use(cors());
const orderRouter = require('./routes/order.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/food', foodRouter);
app.use('/api/order', orderRouter);

module.exports = app;
