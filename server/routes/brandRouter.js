const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole(),  brandController.create);
router.get('/', checkRole(),  brandController.getAll);
router.delete('/', checkRole(),  brandController.delete);

module.exports = router;