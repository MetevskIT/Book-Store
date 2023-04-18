const router = require('express').Router();
const orderController = require('../controllers/orderController')

const { isLogged } = require('../middlewares/guard')

router.get('/orderStatuses', orderController.getOrderStatuses);
router.post('/create', isLogged, orderController.createOrder)
router.get('/delete/:id', isLogged, orderController.deleteOrder)
router.get('/details/:id', isLogged, orderController.getOrderDetails);
router.get('/getAll', isLogged, orderController.getAllOrders)

module.exports = router;