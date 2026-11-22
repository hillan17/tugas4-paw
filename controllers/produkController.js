const ProdukModel = require('../models/produkModel');

const ProdukController = {
  index: (req, res) => {
    try {
      const items = ProdukModel.getAll();
      res.render('index', { items });
    } catch (err) {
      res.status(500).send('Gagal mengambil data: ' + err.message);
    }
  },

  store: (req, res) => {
    try {
      const { nama, kategori, harga, stok } = req.body;
      ProdukModel.create({ nama, kategori, harga, stok });
      res.redirect('/');
    } catch (err) {
      res.status(500).send('Gagal menambah data: ' + err.message);
    }
  },

  update: (req, res) => {
    try {
      const { id } = req.params;
      const { nama, kategori, harga, stok } = req.body;
      ProdukModel.update(id, { nama, kategori, harga, stok });
      res.redirect('/');
    } catch (err) {
      res.status(500).send('Gagal mengedit data: ' + err.message);
    }
  },

  destroy: (req, res) => {
    try {
      const { id } = req.params;
      ProdukModel.delete(id);
      res.redirect('/');
    } catch (err) {
      res.status(500).send('Gagal menghapus data: ' + err.message);
    }
  }
};

module.exports = ProdukController;