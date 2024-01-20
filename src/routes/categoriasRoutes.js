const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const router = Router();
const categoriaController = new CategoriaController();

router.get('/categorias', (req, res, next) => categoriaController.list(req, res, next));
router.get('/categorias/:id', (req, res, next) => categoriaController.find(req, res, next));
router.post('/categorias', (req, res, next) => categoriaController.create(req, res, next));
router.put('/categorias/:id', (req, res, next) => categoriaController.update(req, res, next));
router.delete('/categorias/:id', (req, res, next) => categoriaController.delete(req, res, next));

module.exports = router;