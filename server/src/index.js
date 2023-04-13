const app = require('express')();
const router = require('express').Router();
const appsettings = require('./config/appsettings');
const dbConfig = require('./config/dbConfig');


async function startUp() {
    //Connect and seed database
    await dbConfig();
    
    app.listen(appsettings.PORT, () => { console.log(`Server listen on port ${appsettings.PORT}...`) })
}
startUp();