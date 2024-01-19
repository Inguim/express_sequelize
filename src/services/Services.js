const dataSource = require('../database/models');

class Services {
  constructor(model) {
    this.model = model;
  }

  async list() {
    return dataSource[this.model].findAll();
  }

  async listByScope(scope) {
    return dataSource[this.model].scope(scope).findAll();
  }

  async find(id) {
    return dataSource[this.model].findByPk(id);
  }

  async findOneWhere(where = {}) {
    return dataSource[this.model].findOne({ where });
  }

  async create(data) {
    return dataSource[this.model].create(data);
  }

  async update(data, where = {}) {
    const results = dataSource[this.model].update(data, {
      where,
    });
    return !(results[0] === 0);
  }

  async delete(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
