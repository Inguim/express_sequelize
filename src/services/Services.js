const dataSource = require('../models');

class Services {
  constructor(model) {
    this.model = model;
  }

  async list() {
    return dataSource[this.model].findAll();
  }

  // async find(id) {
  //   return dataSource[this.model].findByPk(id);
  // }

  // async create(data) {
  //   return dataSource[this.model].create(data);
  // }

  async update(data, id) {
    const results = dataSource[this.model].update(data, {
      where: { id: id },
    });
    return !(results[0] === 0);
  }

  // async delete(id) {
  //   return dataSource[this.model].destroy({ where: { id: id } });
  // }
}

module.exports = Services;
