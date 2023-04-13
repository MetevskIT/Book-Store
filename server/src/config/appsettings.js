const appsettings = {
    development: {
        PORT: 5000,
        DB_URI: 'mongodb://localhost:27017/book-store',
    },
    production: {
        PORT: 3000,
        DB_URI: '/',
    }
};

module.exports = appsettings[process.env.PORT || 'development'];