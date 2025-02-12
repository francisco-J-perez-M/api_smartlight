const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB', err));

app.use(bodyParser.json());

// Rutas
const postesRouter = require('./routes/postes');
const sensoresRouter = require('./routes/sensores');
const alertasRouter = require('./routes/alertas');
const usuariosRouter = require('./routes/usuarios');

app.use('/postes', postesRouter);
app.use('/sensores', sensoresRouter);
app.use('/alertas', alertasRouter);
app.use('/usuarios', usuariosRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});