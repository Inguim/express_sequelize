class BaseError extends Error {
  constructor (message = 'Erro no servidor', status = 500) {
    super();
    this.message = message;
    this.status = status;
    this.errors = {};
  }

  sendResponse (res) {
    res.status(this.status).send({ 
      message: this.message,
      status: this.status,
      errors: this.errors
    });
  }
}

module.exports = BaseError;