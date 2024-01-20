const NotFound = require('../erros/NotFound.js');

function errorHandling404(req, res, next) {
  const error = new NotFound();
  next(error);
}

module.exports = errorHandling404;