const dataSource = require('../database/models');

class Services {
  constructor(model) {
    this.model = model;
  }

  async list(where = {}) {
    return dataSource[this.model].findAll({ where });
  }

  async listByScope(scope) {
    return dataSource[this.model].scope(scope).findAll();
  }

  async listAndCount(options = {}) {
    return dataSource[this.model].findAndCountAll({ ...options });
  }

  async find(id) {
    return dataSource[this.model].findByPk(id);
  }

  async findOne(options = {}) {
    return dataSource[this.model].findOne({ ...options });
  }

  async create(data, options = {}) {
    return dataSource[this.model].create(data, options);
  }

  async update(data, where = {}, transaction = {}) {
    const results = await dataSource[this.model].update(data,  {
      where,
      transaction
    });
    return !(results[0] === 0);
  }

  async delete(id, options) {
    return dataSource[this.model].destroy({ where: { id: id }, ...options });
  }
}

module.exports = Services;
