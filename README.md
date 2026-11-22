# TokoKita — Aplikasi Manajemen Inventaris Barang

Aplikasi web manajemen inventaris sederhana (**CRUD Satu Tabel**) yang dibangun menggunakan **Express.js**, **EJS**, dan **SQLite (`better-sqlite3`)** dengan menerapkan pola arsitektur **MVC (Model-View-Controller)** serta dukungan deployment menggunakan **Docker Compose**.

## Fitur Utama

* **Create**: Menambahkan data barang baru (nama barang, kategori, harga, dan jumlah stok) melalui modal form.

* **Read**: Menampilkan daftar inventaris barang beserta ringkasan total jenis produk dan total keseluruhan stok unit secara otomatis.

* **Update**: Mengubah informasi barang yang sudah ada melalui modal edit.

* **Delete**: Menghapus data barang dari inventaris dengan konfirmasi keamanan.

* **Pencarian & Filter Real-time**: Menyaring daftar barang berdasarkan nama maupun kategori secara langsung tanpa memuat ulang halaman.

* **Persistensi Data**: Penyimpanan database SQLite lokal (`data/toko.db`) yang terhubung dengan Docker Volume sehingga data tidak hilang saat container di-restart.

## Teknologi yang Digunakan

* **Backend**: Node.js (v22), Express.js

* **View Engine**: EJS (Embedded JavaScript Templates)

* **Frontend UI**: Bootstrap 5.3, Bootstrap Icons

* **Database**: SQLite (`better-sqlite3`)

* **Containerization**: Docker & Docker Compose

## Struktur Direktori (Arsitektur MVC)

```
aplikasi-inventaris-toko/
├── config/
│   └── database.js          # Konfigurasi koneksi & inisialisasi tabel SQLite
├── controllers/
│   └── produkController.js  # Logika pengendali request & response (CRUD)
├── data/
│   └── toko.db              # File database SQLite (otomatis dibuat saat aplikasi berjalan)
├── models/
│   └── produkModel.js       # Query database untuk tabel produk
├── routes/
│   └── produkRoutes.js      # Definisi endpoint URL aplikasi
├── views/
│   └── index.ejs            # Antarmuka pengguna (UI Dashboard)
├── .dockerignore            # Daftar file yang diabaikan saat build image Docker
├── .gitignore               # Daftar file yang diabaikan oleh Git
├── app.js                   # Entry point utama server Express
├── docker-compose.yml       # Konfigurasi orkestrasi container & volume
├── Dockerfile               # Instruksi pembuatan image container Node.js
└── package.json             # Daftar dependensi & metadata proyek

```

## Langkah-Langkah Menjalankan Aplikasi

Anda dapat menjalankan aplikasi ini menggunakan **Docker Compose** (direkomendasikan) maupun secara langsung menggunakan **Node.js lokal**.

**Prasyarat:**

* Sudah terinstal **Docker** dan **Docker Compose** (atau **Docker Desktop** pada Windows/macOS dalam status *running*).

**Langkah-langkah:**

1. **Clone repositori proyek ini ke komputer Anda:**

   ```
   git clone https://github.com/hillan17/tugas4-paw
   cd aplikasi-inventaris-toko
   
   ```

2. **Bangun *image* dan jalankan *container* di latar belakang:**

   ```
   docker compose up -d --build
   
   ```

3. **Verifikasi bahwa *container* sudah aktif (`Up`):**

   ```
   docker compose ps
   
   ```

4. **Akses aplikasi melalui browser:**
   Buka alamat `http://localhost:3000`.

5. **Menghentikan aplikasi jika sudah selesai digunakan:**

   ```
   docker compose down
   
   ```

## Skema Tabel Database (`produk`)

| Kolom | Tipe Data | Keterangan | 
| ----- | ----- | ----- | 
| `id` | `INTEGER` | Primary Key, Auto Increment | 
| `nama` | `TEXT` | Nama barang (`NOT NULL`) | 
| `kategori` | `TEXT` | Kategori barang (`NOT NULL`) | 
| `harga` | `INTEGER` | Harga satuan dalam Rupiah (`NOT NULL`) | 
| `stok` | `INTEGER` | Jumlah ketersediaan stok (`NOT NULL`) | 
