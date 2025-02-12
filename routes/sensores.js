const express = require('express');
const Sensor = require('../models/Sensor');
const router = express.Router();

// Obtener todos los sensores
router.get('/', async (req, res) => {
  try {
    const sensores = await Sensor.find().populate('poste');
    res.json(sensores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener un sensor por ID
router.get('/:id', async (req, res) => {
  try {
    const sensor = await Sensor.findById(req.params.id).populate('poste');
    if (!sensor) return res.status(404).json({ message: 'Sensor no encontrado' });
    res.json(sensor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo sensor
router.post('/', async (req, res) => {
  const sensor = new Sensor(req.body);
  try {
    const nuevoSensor = await sensor.save();
    res.status(201).json(nuevoSensor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar un sensor por ID
router.put('/:id', async (req, res) => {
  try {
    const sensor = await Sensor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sensor) return res.status(404).json({ message: 'Sensor no encontrado' });
    res.json(sensor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un sensor por ID
router.delete('/:id', async (req, res) => {
  try {
    const sensor = await Sensor.findByIdAndDelete(req.params.id);
    if (!sensor) return res.status(404).json({ message: 'Sensor no encontrado' });
    res.json({ message: 'Sensor eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;