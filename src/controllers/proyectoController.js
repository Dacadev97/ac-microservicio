const Proyecto = require("../models/Proyecto");

exports.create = async (req, res) => {
  try {
    const proyecto = new Proyecto(req.body);
    const newProyecto = await proyecto.save();
    res.status(201).json(newProyecto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.status(200).json(proyectos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findById = async (req, res) => {
  try {
    const proyecto = await Proyecto.findById(req.params.id);
    if (!proyecto) {
      res.status(404).json({ message: "Proyecto no encontrado" });
    }
    res.status(200).json(proyecto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!proyecto) {
      res.status(404).json({ message: "Proyecto no encontrado" });
    }
    res.status(200).json(proyecto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByIdAndDelete(req.params.id);
    if (!proyecto) {
      res.status(404).json({ message: "Proyecto no encontrado" });
    }
    res.status(200).json({ message: "Proyecto eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
