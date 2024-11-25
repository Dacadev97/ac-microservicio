const mongoose = require("mongoose");

/**
 * Universidad Schema
 *
 * This schema defines the structure for the Universidad model.
 *
 * @property {String} nombre - The name of the university.
 * @property {String} direccion - The address of the university.
 * @property {String} telefono - The contact phone number of the university.
 * @property {Date} fechaCreacion - The creation date of the university record. Defaults to the current date.
 * @property {Date} fechaActualizacion - The last update date of the university record. Defaults to the current date.
 */
const universidadSchema = new mongoose.Schema({
  nombre: String,
  direccion: String,
  telefono: String,
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Universidad", universidadSchema);
