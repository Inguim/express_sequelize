const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const router = Router();
const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

router.get('/pessoas', (req, res, next) => pessoaController.list(req, res, next));
router.get('/pessoas/:id', (req, res, next) => pessoaController.find(req, res, next));
router.get('/pessoas/scope/:scope', (req, res, next) => pessoaController.listByScope(req, res, next));
router.post('/pessoas', (req, res, next) => pessoaController.create(req, res, next));
router.put('/pessoas/:id', (req, res, next) => pessoaController.update(req, res, next));
router.put('/pessoas/:estudante_id/cancel', (req, res, next) => pessoaController.cancelRegistroEstudante(req, res, next));
router.delete('/pessoas/:id', (req, res, next) => pessoaController.delete(req, res, next));

router.get('/pessoas/:estudante_id/matriculas', (req, res, next) => pessoaController.listMatriculasActive(req, res, next));
router.get('/pessoas/:estudante_id/matriculas/all', (req, res, next) => pessoaController.listAllMatriculas(req, res, next));
router.get('/pessoas/:estudante_id/matriculas/confirmed', (req, res, next) => matriculaController.listMatriculasByEstudante(req, res, next));
router.get('/pessoas/matriculas/crowded', (req, res, next) => matriculaController.listCursosLotados(req, res, next));
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res, next) => matriculaController.findOne(req, res, next));
router.post('/pessoas/:estudante_id/matriculas', (req, res, next) => matriculaController.create(req, res, next));
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res, next) => matriculaController.update(req, res, next));
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res, next) => matriculaController.delete(req, res, next));

module.exports = router;