const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole(), deviceController.create);
router.get('/', checkRole(),  deviceController.getAll);
router.get('/:id', checkRole(),  deviceController.getOne);

module.exports = router;