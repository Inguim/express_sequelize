const dataSource  = require('../models');

class Services {
  constructor(model) {
    this.model = model;
  }

  async list () {
    return dataSource[this.model].findAll();
  }
}

module.exports = Services;