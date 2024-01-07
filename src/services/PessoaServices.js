const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }

  async listMatriculasByEstudante(id) {
    const pessoa = await super.find(id);
    const matriculas = await pessoa.getAulasMatriculadas();
    console.log('oi', matriculas);
    return matriculas;
  }
}

module.exports = PessoaServices;