require("dotenv").config(); // Carrega as variáveis do .env

const express = require("express");
const cors = require("cors");
const imageRoutes = require("./routes/imageRoutes");

const app = express();
const PORT = process.env.PORT || 3000; // Usa a porta do Render ou 3000 como fallback

app.use(cors({
  origin: process.env.CORS_ORIGIN || "*", // Permite o frontend correto
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());
app.use(imageRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
