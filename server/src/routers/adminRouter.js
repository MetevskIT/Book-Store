const router = require('express').Router();
const adminController = require('../controllers/adminController')

const { isAdmin } = require('../middlewares/guard')

router.post('/createBook', adminController.createBook);
router.post('/editBook/:id', adminController.editBook)
router.post('/deleteBook/:id', adminController.deleteBook)
router.post('/manageOrder/:id', adminController.manageOrder)


module.exports = router;