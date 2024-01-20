const { PESSOA_SCOPES } = require('../database/constants/scopes.js');

const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async listMatriculasActive (req, res, next) {
    const { estudante_id } = req.params;
    try {
      const data = await pessoaServices.listMatriculasActiveByEstudante(Number(estudante_id));
      return res.status(200).json({ count: data.length, results: data });
    } catch (error) {
      next(error);
    }
  }

  async listAllMatriculas (req, res, next) {
    const { estudante_id } = req.params;
    try {
      const data = await pessoaServices.listMatriculasAllByEstudante(Number(estudante_id));
      return res.status(200).json({ count: data.length, results: data });
    } catch (error) {
      next(error);
    }
  }

  async listByScope (req, res, next) {
    let { scope = PESSOA_SCOPES.ALL } = req.params;
    scope = Object.values(PESSOA_SCOPES).find(v => v === scope) || PESSOA_SCOPES.ALL;
    try {
      const data = await pessoaServices.listByScope(scope);
      return res.status(200).json({ count: data.length, results: data });
    } catch (error) {
      next(error);
    }
  }

  async cancelRegistroEstudante (req, res, next) {
    const { estudante_id } = req.params;
    try {
      await pessoaServices.cancelMatriculas(Number(estudante_id));
      return res.status(200).json({ message: `matriculas ref. estudante ${estudante_id}` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PessoaController;
