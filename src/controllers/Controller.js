class Controller {
  constructor (service) {
    this.service = service;
  }

  async list(req, res) {
    try {
      const results = await this.service.list();
      return res.status(200).json(results);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async find(req, res) {
    const { id } = req.params;
    try {
      const result = await this.service.find(Number(id));
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async create(req, res) {
    const data = req.body;
    try {
      const result = await this.service.create(data);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
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
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.service.delete(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = Controller;