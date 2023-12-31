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

  async find(req, res) {
    const { id } = req.params;
    try {
      const result = await this.service.find(Number(id));
      return res.status(200).json(result);
    } catch (erro) {
      // erro
    }
  }

  async create(req, res) {
    const data = req.body;
    try {
      const result = await this.service.create(data);
      return res.status(200).json(result);
    } catch (erro) {
      // erro
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const result = await this.service.update(data, Number(id));
      if (!result) {
        return res.status(400).json({ mensagem: 'registro não foi atualizado' });
      }
      return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
    } catch (erro) {
      // erro
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.service.delete(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });


    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;