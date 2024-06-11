import { Router } from "express";
import {
  crearEstudiante,
  editarEstudiante,
  eliminarEstudiante,
  getEstudiantePorId,
  getEstudiantePorLegajo,
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

router.route("/leg/:legajo").get(getEstudiantePorLegajo);

export default router;
