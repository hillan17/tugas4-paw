const express = require('express');
const path = require('path');
const produkRoutes = require('./routes/produkRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

// Gunakan routes MVC
app.use('/', produkRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server TokoKita (MVC) berjalan di http://localhost:${PORT}`);
});