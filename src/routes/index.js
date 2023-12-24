const express = require('express');
const pessoasRoutes = require('./pessoasRoutes');

module.exports = app => {
  app.use(
    express.json(),
    pessoasRoutes
  );
};

