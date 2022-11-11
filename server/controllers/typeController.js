const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }

  async edit(req, res, next) {
    try {
      const { id } = req.query;
      const { name } = req.body;
      if (!id) {
        return next(ApiError.badRequest(`Не задан id`));
      }
      const type = await Type.update({name}, {where: {id: id}});
      return res.json(type);
    } catch (e) {
      return next(ApiError.badRequest(error.message));
    }

  }

  async delete(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'));
    }
    await Type.destroy({ where: { id: id } });
    res.json(`Type with id:${id} successfuly deleted`);
  }
}

module.exports = new TypeController();
