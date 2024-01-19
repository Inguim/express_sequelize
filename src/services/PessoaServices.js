const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }

  async listMatriculasActiveByEstudante(id) {
    const pessoa = await super.find(id);
    const matriculas = await pessoa.getAulasMatriculadas();
    return matriculas;
  }

  async listMatriculasAllByEstudante(id) {
    const pessoa = await super.find(id);
    const matriculas = await pessoa.getTodasMatriculadas();
    return matriculas;
  }

  async listByScope() {
    return await super.listByScope('allDatas');
  }
}

module.exports = PessoaServices;