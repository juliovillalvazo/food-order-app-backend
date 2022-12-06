const router = require('express').Router();
const Food = require('../models/food.model');

router.get('/', async (req, res) => {
    const allFood = await Food.find({});
    res.json(allFood);
});

module.exports = router;
