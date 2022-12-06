const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: String,
    street: String,
    postalCode: Number,
    city: String,
});

module.exports = model('User', userSchema);
