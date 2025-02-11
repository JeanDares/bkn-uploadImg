// src/app.js
const express = require("express");
const cors = require("cors");
const imageRoutes = require("./routes/imageRoutes");

const app = express();

// Configuração correta do CORS
app.use(cors({
  origin: "https://frn-uploadimg.onrender.com/", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());
app.use(imageRoutes);

module.exports = app;
