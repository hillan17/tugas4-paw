const db = require('../config/database');

const ProdukModel = {
  getAll: () => {
    return db.prepare('SELECT * FROM produk ORDER BY id DESC').all();
  },

  create: ({ nama, kategori, harga, stok }) => {
    const stmt = db.prepare(
      'INSERT INTO produk (nama, kategori, harga, stok) VALUES (?, ?, ?, ?)'
    );
    return stmt.run(nama, kategori, Number(harga), Number(stok));
  },

  update: (id, { nama, kategori, harga, stok }) => {
    const stmt = db.prepare(
      'UPDATE produk SET nama = ?, kategori = ?, harga = ?, stok = ? WHERE id = ?'
    );
    return stmt.run(nama, kategori, Number(harga), Number(stok), id);
  },

  delete: (id) => {
    const stmt = db.prepare('DELETE FROM produk WHERE id = ?');
    return stmt.run(id);
  }
};

module.exports = ProdukModel;