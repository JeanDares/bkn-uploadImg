// src/models/imageModel.js
const pool = require('../config/db');

const uploadImage = async (name, data, mimetype, title, message) => {
  const query = 'INSERT INTO images (name, data, mimetype, title, message) VALUES ($1, $2, $3, $4, $5) RETURNING id';
  const values = [name, data, mimetype, title, message];
  const result = await pool.query(query, values);
  return result.rows[0].id;
};

const getImageById = async (id) => {
  const query = 'SELECT name, data, mimetype, title, message FROM images WHERE id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports = {
  uploadImage,
  getImageById,
};
