class Controller {
  constructor (service) {
    this.service = service;
  }

  async list(req, res) {
    try {
      const results = await this.service.list();
      return res.status(200).json(results);
    } catch (error) {
      // erro
    }
  }
}

module.exports = Controller;