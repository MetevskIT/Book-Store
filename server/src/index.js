const express = require('express');
const userRouter = require('./routers/userRouter')
const adminRouter = require('./routers/adminRouter')
const orderRouter = require('./routers/orderRouter')
const bookRouter = require('./routers/bookRouter')
const appsettings = require('./config/appsettings');
const dbConfig = require('./config/dbConfig');
const auth = require('./middlewares/auth');
const cors = require('./middlewares/cors');


async function startUp() {
    //Connect and seed database
    await dbConfig();

    const app = express();

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }));
    app.use(cors())
    app.use(auth)
    app.use('/user', userRouter)
    app.use('/book', bookRouter)
    app.use('/admin', adminRouter)
    app.use('/order',orderRouter)
    app.listen(appsettings.PORT, () => { console.log(`Server listen on port ${appsettings.PORT}...`) })
}
startUp();