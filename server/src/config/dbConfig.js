const mongoose = require('mongoose');
const appsettings = require('../config/appsettings');
const bookGenresSeeder = require('../data/seeders/bookGenresSeeder');
const orderStatusSeeder = require('../data/seeders/orderStatusSeed')

async function dbConfig() {
    try {
        await mongoose.connect(appsettings.DB_URI);
        console.log("Connect to database is successfully!");

        await bookGenresSeeder();
        await orderStatusSeeder();
        console.log("Seed data is successfully!");
        
    } catch (error) {
        console.log(`Error:${error}`);
    }
}
module.exports = dbConfig;