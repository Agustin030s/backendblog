import { getAllUsers, getUserByEmail } from "../database/queries/userqueries.db.js";
import bcrypt from "bcrypt";
import generateJWT from "../helpers/generateJWT.js";

export const getUsuarios = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "No se pudiero obtener los usuarios",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const searchedUser = await getUserByEmail(email);
    if (!searchedUser) {
      return res.status(400).json({
        message: "Credenciales incorrectas",
      });
    }

    const validPassword = bcrypt.compareSync(password, searchedUser[0].password);
    if (!validPassword) {
      return res.status(400).json({
        message: "Credenciales incorrectas",
      });
    }

    const token = await generateJWT(searchedUser.id);
    res.status(200).json({
      message: "El usuario existe",
      email: searchedUser[0].email,
      rol: searchedUser[0].rol,
      token,
    });
  } catch (error) {
    console.error(
      `Los siguientes errores ocurrieron al intentar loguearse: ${error}`
    );
    res.status(500).json({
      message: "Ocurrio un error durante el login",
    });
  }
};
