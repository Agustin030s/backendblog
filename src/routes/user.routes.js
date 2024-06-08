import { Router } from "express";
import { getUsuarios, login } from "../controllers/user.controllers.js";
import { getUserByEmail } from "../database/queries/userqueries.db.js";

const router = Router();

router.route("/").post(login).get(getUsuarios);

export default router;