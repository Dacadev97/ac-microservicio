const mongoose = require("mongoose");

/**
 * Schema representing an Etapa.
 *
 * @typedef {Object} Etapa
 * @property {String} nombre - The name of the etapa.
 * @property {String} descripcion - The description of the etapa.
 * @property {Date} fechaInicio - The start date of the etapa.
 * @property {Date} fechaFin - The end date of the etapa.
 * @property {Date} fechaCreacion - The creation date of the etapa. Defaults to the current date.
 * @property {Date} fechaActualizacion - The last update date of the etapa. Defaults to the current date.
 */
const etapaSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  fechaInicio: Date,
  fechaFin: Date,
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Etapa", etapaSchema);
