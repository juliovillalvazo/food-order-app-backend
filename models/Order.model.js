const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    order: Array,
});

module.exports = model('Order', orderSchema);
