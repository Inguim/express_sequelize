const express = require('express');
const routes = require('./routes');

const errorHandling = require('./middlewares/errorHandling.js');
const errorHandling404 = require('./middlewares/errorHandling404.js');

const app = express();
routes(app);

app.use(errorHandling404);
app.use(errorHandling);

module.exports = app;