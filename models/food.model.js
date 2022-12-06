const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
    name: String,
    description: String,
    price: Number,
});

module.exports = model('Food', foodSchema);
