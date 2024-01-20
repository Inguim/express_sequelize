const stringConversor = require('../utils/helpers/stringConversor.js');

class Controller {
  constructor (service) {
    this.service = service;
  }

  async list(req, res, next) {
    try {
      const results = await this.service.list();
      return res.status(200).json({ count: results.length, results });
    } catch (error) {
      next(error);
    }
  }

  async find(req, res, next) {
    const { id } = req.params;
    try {
      const result = await this.service.find(Number(id));
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async findOne(req, res, next) {
    const { ...params } = req.params;
    const query = stringConversor(params);
    try {
      const result = await this.service.findOne(query);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    const data = req.body;
    try {
      const result = await this.service.create(data);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const { ...params } = req.params;
    const data = req.body;
    const where = stringConversor(params);
    try {
      const result = await this.service.update(data, where);
      if (!result) {
        return res.status(400).json({ message: 'Registro não foi atualizado' });
      }
      return res.status(200).json({ message: 'Atualizado com sucesso' });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      await this.service.delete(Number(id));
      return res.status(200).json({ message: `id ${id} deletado` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;