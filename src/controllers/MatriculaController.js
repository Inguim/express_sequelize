const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }

  async listMatriculasByEstudante(req, res){ 
    const { estudante_id } = req.params;
    try {
      const data = await matriculaServices.listAndCount({ estudante_id: Number(estudante_id), status: 'matriculado' });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    } 
  }
}

module.exports = MatriculaController;