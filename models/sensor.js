const mongoose = require('mongoose');

const SensorSchema = new mongoose.Schema({
  poste: { type: mongoose.Schema.Types.ObjectId, ref: 'Poste', required: true },
  estado: { type: String, enum: ['funcionando', 'fallado'], default: 'funcionando' },
  ultimaRevision: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sensor', SensorSchema);