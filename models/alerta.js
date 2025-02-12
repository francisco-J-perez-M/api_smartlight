const mongoose = require('mongoose');

const AlertaSchema = new mongoose.Schema({
  sensor: { type: mongoose.Schema.Types.ObjectId, ref: 'Sensor', required: true },
  mensaje: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  resuelta: { type: Boolean, default: false }
});

module.exports = mongoose.model('Alerta', AlertaSchema);