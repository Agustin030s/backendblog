import { Router } from "express";
import {
  crearEstudiante,
  editarEstudiante,
  eliminarEstudiante,
  getEstudiantePorId,
  getEstudiantes,
} from "../controllers/estudiante.controllers.js";
import JWTValidation from "../helpers/jwtValidation.js";

const router = Router();

router.route("/").get(getEstudiantes).post([JWTValidation], crearEstudiante);
router
  .route("/:id")
  .get(getEstudiantePorId)
  .put([JWTValidation], editarEstudiante)
  .delete([JWTValidation], eliminarEstudiante);

export default router;
