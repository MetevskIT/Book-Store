const router = require('express').Router();
const adminController = require('../controllers/adminController')

const { isAdmin } = require('../middlewares/guard')

router.post('/createBook', isAdmin, adminController.createBook);
router.post('/editBook/:id', isAdmin, adminController.editBook)
router.post('/deleteBook/:id', isAdmin, adminController.deleteBook)
router.post('/manageOrder/:id', isAdmin, adminController.manageOrder)


module.exports = router;