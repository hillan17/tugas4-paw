const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// Pastikan folder 'data' tersedia agar tidak error saat dijalankan di lokal maupun Docker
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'toko.db');
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS produk (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT NOT NULL,
    kategori TEXT NOT NULL,
    harga INTEGER NOT NULL,
    stok INTEGER NOT NULL
  )
`);

const count = db.prepare('SELECT COUNT(*) AS total FROM produk').get().total;
if (count === 0) {
  const insert = db.prepare('INSERT INTO produk (nama, kategori, harga, stok) VALUES (?, ?, ?, ?)');
  insert.run('Laptop ASUS TUF Gaming', 'Elektronik', 14500000, 8);
  insert.run('Mouse Wireless Logitech', 'Elektronik', 250000, 15);
  insert.run('Buku Catatan A5', 'Alat Tulis', 35000, 4);
}

module.exports = db;