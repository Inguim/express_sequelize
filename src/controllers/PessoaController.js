const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async listMatriculas (req, res) {
    const { estudanteId } = req.params;
    try {
      const data = await pessoaServices.listMatriculasByEstudante(Number(estudanteId));
      return res.status(200).json(data);
    } catch (error) {
      // erro
    }
  }
}

module.exports = PessoaController;
