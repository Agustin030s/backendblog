import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import studentRouter from "./src/routes/estudiantes.routes.js";
import userRouter from "./src/routes/user.routes.js";
import initializeAdminUser from "./src/database/queries/adminUser.js";

const app = express();
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.info("Estoy en el puerto " + app.get("port"));

  initializeAdminUser()
    .then(() => {
      console.info("Usuario administrador inicializado correctamente");
    })
    .catch((err) => {
      console.error("Error inicializando usuario administrador:", err);
    });
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/public")));

app.get("/ports", (req, res) => {
  res.send("Desde el puerto " + process.env.PORT);
});

app.use("/api/students", studentRouter);
app.use("/api/user", userRouter);
