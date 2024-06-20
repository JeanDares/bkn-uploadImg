// src/routes/imageRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { handleUpload, handleGetImage } = require('../controllers/imageController');

router.post('/upload', upload.single('image'), handleUpload);
router.get('/images/:id', handleGetImage);

module.exports = router;
