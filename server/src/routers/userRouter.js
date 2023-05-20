const router = require('express').Router();
const userController = require('../controllers/userController')

const { isLogged } = require('../middlewares/guard')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/logout', userController.logout)
router.get('/addToCart/:id', userController.addToCart)
router.get('/removeFromCart/:id', userController.removeFromCart)
router.get('/getBooksFromCart', userController.getBooksFromCart)
router.get('/checkRole/:id', userController.checkRole)

module.exports = router;