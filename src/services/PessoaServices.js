const datasource = require('../database/models');

const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
    this.matriculasServices = new Services('Matricula');
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

  async listByScope(scope) {
    return await super.listByScope(scope);
  }

  async cancelMatriculas(estudante_id) {
    return datasource.sequelize.transaction(async (transaction) => {
      await super.update({ ativo: false }, { id: estudante_id }, transaction);
      await this.matriculasServices.update({ status: 'cancelado' }, { estudante_id: estudante_id}, transaction);
    });
  }
}

module.exports = PessoaServices;