const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const router = Router();
const cursoController = new CursoController();

router.get('/cursos', (req, res, next) => cursoController.listByDate(req, res, next));
router.get('/cursos/:id', (req, res, next) => cursoController.find(req, res, next));
router.post('/cursos', (req, res, next) => cursoController.create(req, res, next));
router.put('/cursos/:id', (req, res, next) => cursoController.update(req, res, next));
router.delete('/cursos/:id', (req, res, next) => cursoController.delete(req, res, next));

module.exports = router;