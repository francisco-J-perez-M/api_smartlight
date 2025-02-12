const express = require('express');
const Poste = require('../models/Poste');
const router = express.Router();

// Obtener todos los postes
router.get('/', async (req, res) => {
  try {
    const postes = await Poste.find().populate('sensores');
    res.json(postes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener un poste por ID
router.get('/:id', async (req, res) => {
  try {
    const poste = await Poste.findById(req.params.id).populate('sensores');
    if (!poste) return res.status(404).json({ message: 'Poste no encontrado' });
    res.json(poste);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo poste
router.post('/', async (req, res) => {
  const poste = new Poste(req.body);
  try {
    const nuevoPoste = await poste.save();
    res.status(201).json(nuevoPoste);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar un poste por ID
router.put('/:id', async (req, res) => {
  try {
    const poste = await Poste.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!poste) return res.status(404).json({ message: 'Poste no encontrado' });
    res.json(poste);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un poste por ID
router.delete('/:id', async (req, res) => {
  try {
    const poste = await Poste.findByIdAndDelete(req.params.id);
    if (!poste) return res.status(404).json({ message: 'Poste no encontrado' });
    res.json({ message: 'Poste eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;