const express = require('express');
const Alerta = require('../models/Alerta');
const router = express.Router();

// Obtener todas las alertas
router.get('/', async (req, res) => {
  try {
    const alertas = await Alerta.find().populate('sensor');
    res.json(alertas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener una alerta por ID
router.get('/:id', async (req, res) => {
  try {
    const alerta = await Alerta.findById(req.params.id).populate('sensor');
    if (!alerta) return res.status(404).json({ message: 'Alerta no encontrada' });
    res.json(alerta);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear una nueva alerta
router.post('/', async (req, res) => {
  const alerta = new Alerta(req.body);
  try {
    const nuevaAlerta = await alerta.save();
    res.status(201).json(nuevaAlerta);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar una alerta por ID
router.put('/:id', async (req, res) => {
  try {
    const alerta = await Alerta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!alerta) return res.status(404).json({ message: 'Alerta no encontrada' });
    res.json(alerta);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar una alerta por ID
router.delete('/:id', async (req, res) => {
  try {
    const alerta = await Alerta.findByIdAndDelete(req.params.id);
    if (!alerta) return res.status(404).json({ message: 'Alerta no encontrada' });
    res.json({ message: 'Alerta eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;