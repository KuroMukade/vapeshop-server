const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async edit(req, res, next) {
    try {
      const { id } = req.query;
      const { name } = req.body;
      if (!id) {
        return next(ApiError.badRequest(`Не задан id`));
      }
      const brand = await Brand.update({name}, {where: {id: id}});
      return res.json(brand);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }

  async delete(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('Не задан id'));
    }
    await Brand.destroy({ where: { id: id } });
    return res.json(`Brand with name:${id} successfuly removed`);
  }
}

module.exports = new BrandController();
