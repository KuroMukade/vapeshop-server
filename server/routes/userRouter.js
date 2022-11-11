const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.delete('/', checkRoleMiddleware('ADMIN'), userController.deleteUser);
router.get('/all', checkRoleMiddleware('ADMIN'), userController.getAllUsers);
router.put('/edit', checkRoleMiddleware('ADMIN'), userController.editUserRole);
router.get('/auth', authMiddleware, userController.check);

module.exports = router;