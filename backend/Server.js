const express = require('express');
const multer = require('multer');
const mariadb = require('mariadb');
const cors = require('cors');
const path = require('path');
const testimoniController = require('./controllers/testimoni');

const app = express();
const port = 3000;

// Konfigurasi koneksi database
const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'jikri112',
  database: 'testimoni',
  connectionLimit: 5,
  port: 3307,
});

// Gunakan middleware CORS
app.use(cors());

// Konfigurasi penyimpanan file menggunakan multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Menggunakan middleware express.static untuk menyajikan file JavaScript, CSS, dan file statis lainnya
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint untuk mengambil daftar testimoni
app.get('/api/testimonies', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM testimonies');
    conn.release();

    rows.forEach((testimony) => {
      if (testimony.image) {
        testimony.image = `http://localhost:3000/uploads/${testimony.image}`;
      }
      if (testimony.video) {
        testimony.video = `http://localhost:3000/uploads/${testimony.video}`;
      }
    });

    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Kesalahan server internal' });
  }
});

// Endpoint untuk mengirimkan testimoni
app.post('/api/testimonies', upload.any(), async (req, res) => {
  try {
    const { name, message, rating } = req.body;
    const files = req.files;

    const image = files.find((file) => file.fieldname === 'image');
    const video = files.find((file) => file.fieldname === 'video');

    const conn = await pool.getConnection();
    await conn.query(
      'INSERT INTO testimonies (name, message, image, video, rating) VALUES (?, ?, ?, ?, ?)',
      [name, message, image ? image.filename : null, video ? video.filename : null, rating]
    );

    conn.release();

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Kesalahan server internal' });
  }
});

// Endpoint untuk menghapus testimoni berdasarkan ID
app.delete('/api/testimonies/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const conn = await pool.getConnection();
    await conn.query('DELETE FROM testimonies WHERE id = ?', [id]);

    conn.release();

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Kesalahan server internal' });
  }
});

// Endpoint untuk mengakses file gambar
app.get('/uploads/:imageName', testimoniController.getImage);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
