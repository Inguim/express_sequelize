const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const router = Router();
const cursoController = new CursoController();

router.get('/cursos', (req, res) => cursoController.list(req, res));
router.get('/cursos/:id', (req, res) => cursoController.find(req, res));
router.post('/cursos', (req, res) => cursoController.create(req, res));
router.put('/cursos/:id', (req, res) => cursoController.update(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.delete(req, res));

module.exports = router;