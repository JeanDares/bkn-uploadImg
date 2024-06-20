// src/app.js
const express = require('express');
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(imageRoutes);

module.exports = app;
