const router = require('express').Router();
const User = require('../models/User.model');
const Order = require('../models/Order.model');

router.post('/', async (req, res) => {
    try {
        const { user, orderedItems } = req.body;
        const foundUser = await User.find({ name: user.name });
        console.log(foundUser);
        if (!foundUser) {
            const createdUser = await User.create({ ...user });
            const createdOrder = await Order.create({
                user: createdUser._id,
                order: orderedItems,
            });

            return res.json(createdOrder);
        }
        const createdOrder = await Order.create({
            user: foundUser._id,
            order: orderedItems,
        });

        return res.json(createdOrder);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
