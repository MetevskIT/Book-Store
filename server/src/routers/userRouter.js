const router = require('express').Router();
const userController = require('../controllers/userController')

const { isLogged } = require('../middlewares/guard')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/logout', userController.logout)
router.post('/addToCart/:id', isLogged, userController.addToCart)
router.post('/removeFromCart/:id', isLogged, userController.removeFromCart)
router.get('/getBooksFromCart', isLogged, userController.getBooksFromCart)

module.exports = router;