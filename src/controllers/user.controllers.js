// import Usuario from "../database/models/user.js";
// import bcrypt from "bcrypt";
// import generateJWT from "../helpers/generateJWT.js";

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const searchedUser = await Usuario.findOne({ email });
//     if (!searchedUser) {
//       return res.status(400).json({
//         message: "Credenciales incorrectas",
//       });
//     }

//     const validPassword = bcrypt.compareSync(password, searchedUser.password);
//     if (!validPassword) {
//       return res.status(400).json({
//         message: "Credenciales incorrectas",
//       });
//     }
//     const token = await generateJWT(searchedUser._id);
//     res.status(200).json({
//       message: "El usuario existe",
//       email: searchedUser.email,
//       usuario: searchedUser.usuario,
//       rol: searchedUser.rol,
//       token,
//     });
//   } catch (error) {
//     console.error(
//       `Los siguientes errores ocurrieron al intentar loguearse: ${error}`
//     );
//     res.status(500).json({
//       message: "Ocurrio un error durante el login",
//     });
//   }
// };
