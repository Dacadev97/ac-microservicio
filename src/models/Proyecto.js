const mongoose = require("mongoose");

/**
 * Proyecto Schema
 *
 * @typedef {Object} Proyecto
 * @property {String} numero - The project number.
 * @property {String} titulo - The project title.
 * @property {Date} fechaInicio - The start date of the project.
 * @property {Date} fechaEntrega - The delivery date of the project.
 * @property {Number} valor - The value of the project.
 * @property {mongoose.Schema.Types.ObjectId} cliente - Reference to the Cliente model.
 * @property {mongoose.Schema.Types.ObjectId} tipoProyecto - Reference to the TipoProyecto model.
 * @property {mongoose.Schema.Types.ObjectId} universidad - Reference to the Universidad model.
 * @property {mongoose.Schema.Types.ObjectId} etapa - Reference to the Etapa model.
 * @property {Date} fechaCreacion - The creation date of the project. Defaults to the current date.
 * @property {Date} fechaActualizacion - The last update date of the project. Defaults to the current date.
 */
const proyectoSchema = new mongoose.Schema({
  numero: String,
  titulo: String,
  fechaInicio: Date,
  fechaEntrega: Date,
  valor: Number,
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" },
  tipoProyecto: { type: mongoose.Schema.Types.ObjectId, ref: "TipoProyecto" },
  universidad: { type: mongoose.Schema.Types.ObjectId, ref: "Universidad" },
  etapa: { type: mongoose.Schema.Types.ObjectId, ref: "Etapa" },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Proyecto", proyectoSchema);
