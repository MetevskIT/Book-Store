const router = require('express').Router();
const bookController= require('../controllers/bookController')

router.get('/details/:id',bookController.getBookById)
router.get('/getGenres',bookController.getGenres)
router.get('/getAllBooks',bookController.getAll)
router.get('/getLastThen',bookController.getLastThenBooks)
router.get('/getBooksByGenre/:genreId',bookController.getBooksByGenre)
module.exports = router;