const Sequelize = require('sequelize');
const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }

  async listMatriculasByEstudante(req, res, next) {
    const { estudante_id } = req.params;
    try {
      const data = await matriculaServices.listAndCount({
        where: {
          estudante_id: Number(estudante_id),
          status: 'matriculado',
        },
        limit: 2,
        order: [['id', 'DESC']],
      });
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async listCursosLotados(req, res, next) {
    const lotacaoCurso = 2;
    try {
      const data = await matriculaServices.listAndCount({
        where: { status: 'matriculado' },
        attributes: ['curso_id'],
        group: ['curso_id'],
        having: Sequelize.literal(`count(curso_id) >= ${lotacaoCurso}`)
      });
      return res.status(200).json(data.count);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MatriculaController;
