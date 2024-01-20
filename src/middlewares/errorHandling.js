/* eslint-disable no-unused-vars */
const Sequelize = require('sequelize');

const BaseError =  require('../erros/BaseError.js');
const ValidationError =  require('../erros/ValidationError.js');

function errorHandling(erro, req, res, next) {
  console.log('Erro:', erro.message);
  if (erro instanceof Sequelize.ValidationError) return new ValidationError(erro).sendResponse(res);
  if (erro instanceof BaseError) return erro.sendResponse(res);
  return new BaseError().sendResponse(res);
}

module.exports = errorHandling;
