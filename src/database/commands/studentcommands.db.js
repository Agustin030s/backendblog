import pool from "../database.js";
const table = "estudiante";

export const createStudent = async (student) => {
    const { nombrecompleto, email, edad, github, descripcion, legajo } = student;
    let connect;
    try {
      connect = await pool.getConnection();
      const result = await connect.query(
        `
          INSERT INTO estudiante (nombrecompleto, email, edad, github, descripcion, legajo)
          VALUES (?, ?, ?, ?, ?, ?)`,
        [nombrecompleto, email, edad, github, descripcion, legajo]
      );
    } catch (error) {
      return Promise.reject(error);
    } finally {
      if (connect) await connect.release();
    }
  };

  export const updateStudent = async (id, student) => {
    const { nombrecompleto, email, edad, github, descripcion } = student;
    let connect;
    try {
      connect = await pool.getConnection();
      const result = await connect.query(`
        UPDATE ${table} 
        SET nombrecompleto = ?, email = ?, edad = ?, github = ?, descripcion = ?
        WHERE id = ?`, [nombrecompleto, email, edad, github, descripcion, id]
      );
    } catch (error) {
      return Promise.reject(error);
    } finally {
      if (connect) await connect.release();
    }
  };

  export const deleteStudent = async (id) => {
    let connect;
    try {
      connect = await pool.getConnection();
      const result = await connect.query(`
        DELETE FROM ${table} WHERE id = ?`, [id]
      );
    } catch (error) {
      return Promise.reject(error);
    } finally {
      if (connect) await connect.release();
    }
  };