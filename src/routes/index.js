const express = require('express');
const pessoasRoutes = require('./pessoasRoutes');
const categoriasRoutes = require('./categoriasRoutes');
const cursosRoutes = require('./cursosRoutes');

module.exports = app => {
  app.use(
    express.json(),
    pessoasRoutes,
    categoriasRoutes,
    cursosRoutes
  );
};

