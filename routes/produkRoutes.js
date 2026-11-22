const express = require('express');
const router = express.Router();
const ProdukController = require('../controllers/produkController');

router.get('/', ProdukController.index);
router.post('/tambah', ProdukController.store);
router.post('/edit/:id', ProdukController.update);
router.post('/hapus/:id', ProdukController.destroy);

module.exports = router;