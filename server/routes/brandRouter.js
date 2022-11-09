const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', brandController.create);
router.get('/', brandController.getAll);
router.delete('/', brandController.delete);

module.exports = router;