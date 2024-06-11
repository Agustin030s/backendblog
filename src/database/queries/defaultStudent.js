import pool from "../database.js";
import { getStudentByLegajo } from "./studentqueries.db.js";

const initializeStudent = async () => {
  let connect;
  const table = "estudiante";
  try {
    connect = await pool.getConnection();
    const existingStudent = await getStudentByLegajo(50240);
    if (existingStudent.length === 0) {
      const student = {
        nombrecompleto: "Sebastian Agustin Maza",
        email: "sebas030.maza@gmail.com",
        edad: 23,
        github: "Agustin030s",
        descripcion:
          "Soy estudiante de 5to año de Ingeniería en Sistemas de Información, apasionado por la tecnología y siempre en constante aprendizaje. Me dedico a innovar y desarrollar soluciones eficientes, manteniéndome al día con los últimos avances del sector.",
        legajo: 50240,
      };

      await connect.query(
        `
                  INSERT INTO estudiante (nombrecompleto, email, edad, github, descripcion, legajo)
                  VALUES (?, ?, ?, ?, ?, ?)`,
        [
          student.nombrecompleto,
          student.email,
          student.edad,
          student.github,
          student.descripcion,
          student.legajo,
        ]
      );
    }
  } catch (error) {
    console.error("Error al inicializar el estudiante: ", error);
  } finally {
    if (connect) connect.release();
  }
};

export default initializeStudent;
