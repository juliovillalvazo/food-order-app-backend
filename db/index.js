const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/food-order-app')
    .then((db) => {
        const { name: dbName } = db.connections[0];
        console.log(`connected to db: ${dbName}`);
    })
    .catch(console.log);
