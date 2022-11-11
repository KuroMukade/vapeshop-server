const ApiError = require("../error/ApiError");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY, 
        {expiresIn: '24h'}
    );
};

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'))
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже зарегестрирован'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword});
        const token = generateJwt(user.id, user.email, user.role); 

        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.internal('Пользователь с таким именем не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Пароли не совпадают'));
        }
        const token = generateJwt(user.email, user.password, user.role);
        return res.json({token});
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token});
    }

    async deleteUser(req, res, next) {
        try {
            const { id } = req.query;
            User.destroy({where: {id: id}});
            return res.json(`Пользователь с id ${id} успешно удален`);
        } catch (error) {
            return next(ApiError.badRequest(error.message));
        }
    }

    async getAllUsers(req, res, next) {
        const users = await User.findAll();
        return res.json(users);
    }

    async editUserRole(req, res, next) {
        try {
            const { id } = req.query;
            const { role } = req.body;
            const user = User.update({role: role}, {where: {id: id}});
            return res.json(user);
        } catch (error) {
            return next(ApiError.badRequest(`Пользователь с id: ${id} не найден`));
        }
    }
}

module.exports = new UserController();