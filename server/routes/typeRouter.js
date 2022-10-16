const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole(), typeController.create);
router.get('/', checkRole(), typeController.getAll);
router.delete('/', checkRole(), typeController.delete);

module.exports = router;