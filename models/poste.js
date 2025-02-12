const mongoose = require('mongoose');

const PosteSchema = new mongoose.Schema({
  ubicacion: { type: String, required: true },
  estado: { type: String, enum: ['activo', 'inactivo', 'mantenimiento'], default: 'activo' },
  sensores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sensor' }]
});

module.exports = mongoose.model('Poste', PosteSchema);