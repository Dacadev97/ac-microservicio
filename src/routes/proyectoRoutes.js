const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/proyectoController");

router.post("/", proyectoController.create);
router.get("/", proyectoController.findAll);
router.get("/:id", proyectoController.findById);
router.put("/:id", proyectoController.update);
router.delete("/:id", proyectoController.delete);

module.exports = router;
