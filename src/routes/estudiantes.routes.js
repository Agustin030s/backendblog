import { Router } from "express";
import {
    crearEstudiante,
  editarEstudiante,
  eliminarEstudiante,
  getEstudiantePorId,
  getEstudiantes,
} from "../controllers/estudiante.controllers.js";

const router = Router();

router.route("/").get(getEstudiantes).post(crearEstudiante);
router.route("/:id").get(getEstudiantePorId).put(editarEstudiante).delete(eliminarEstudiante);

export default router;
