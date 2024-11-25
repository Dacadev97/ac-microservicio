const mongoose = require("mongoose");

/**
 * Schema definition for TipoProyecto.
 *
 * @typedef {Object} TipoProyecto
 * @property {String} nombre - The name of the project type. This field is required and must be unique.
 * @property {Date} fechaCreacion - The creation date of the project type. Defaults to the current date and time.
 * @property {Date} fechaActualizacion - The last update date of the project type. Defaults to the current date and time.
 */
const tipoProyectoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TipoProyecto", tipoProyectoSchema);
