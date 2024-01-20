const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const router = Router();
const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

router.get('/pessoas', (req, res) => pessoaController.list(req, res));
router.get('/pessoas/all', (req, res) => pessoaController.listByScope(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.find(req, res));
router.post('/pessoas', (req, res) => pessoaController.create(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.update(req, res));
router.put('/pessoas/:estudante_id/cancel', (req, res) => pessoaController.cancelRegistroEstudante(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.delete(req, res));

router.get('/pessoas/:estudante_id/matriculas', (req, res) => pessoaController.listMatriculasActive(req, res));
router.get('/pessoas/:estudante_id/matriculas/all', (req, res) => pessoaController.listAllMatriculas(req, res));
router.get('/pessoas/:estudante_id/matriculas/confirmed', (req, res) => matriculaController.listMatriculasByEstudante(req, res));
router.get('/pessoas/matriculas/crowded', (req, res) => matriculaController.listCursosLotados(req, res));
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.findOne(req, res));
router.post('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.create(req, res));
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.update(req, res));
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.delete(req, res));

module.exports = router;