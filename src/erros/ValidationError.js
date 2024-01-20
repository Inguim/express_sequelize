const BaseError = require('./BaseError.js');

class ValidationError extends BaseError {
  constructor(error = {}) {
    super(`Ocorreram ${error.errors.length} erros!`, 400);
    error.errors.forEach(({ message, path }) => {
      this.errors[path] = message;
    });
  }
}

module.exports = ValidationError;
