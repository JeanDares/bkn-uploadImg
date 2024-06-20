// src/controllers/imageController.js
const { uploadImage, getImageById } = require('../models/imageModel');

const handleUpload = async (req, res) => {
  const { title, message } = req.body;
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo enviado.');
  }

  try {
    const imageId = await uploadImage(req.file.originalname, req.file.buffer, req.file.mimetype, title, message);
    res.status(200).send({
      message: 'Upload realizado com sucesso!',
      imageId,
    });
  } catch (err) {
    res.status(500).send({ message: 'Erro no upload', error: err });
  }
};

const handleGetImage = async (req, res) => {
  const imageId = req.params.id;

  try {
    const image = await getImageById(imageId);

    if (!image) {
      return res.status(404).send('Imagem não encontrada');
    }

    res.set('Content-Type', image.mimetype);
    res.send(image.data);
  } catch (err) {
    res.status(500).send({ message: 'Erro ao recuperar imagem', error: err });
  }
};

module.exports = {
  handleUpload,
  handleGetImage,
};
