const mongoose = require("mongoose");

/**
 * Schema definition for Cliente.
 *
 * @typedef {Object} Cliente
 * @property {string} nombre - The name of the client.
 * @property {string} email - The email address of the client.
 * @property {Date} fechaCreacion - The creation date of the client record. Defaults to the current date.
 * @property {Date} fechaActualizacion - The last update date of the client record. Defaults to the current date.
 */
const clienteSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cliente", clienteSchema);
