import pool from "../database.js";
const table = "estudiante";

export const getAllStudents = async () => {
    let connect;
    try {
      connect = await pool.getConnection();
      const rows = await connect.query(`SELECT * FROM ${table}`);
      return rows;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      if (connect) await connect.release();
    }
  };
  
  export const getStudentById = async (id) => {
    let connect;
    try {
      connect = await pool.getConnection();
      const rows = await connect.query(`SELECT * FROM ${table} WHERE id=${id}`);
      return rows;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      if (connect) await connect.release();
    }
  };
  
  export const getStudentByLegajo = async (legajo) => {
    let connect;
    try {
      connect = await pool.getConnection();
      const rows = await connect.query(`SELECT * FROM ${table} WHERE legajo=?`, [legajo]);
      return rows;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      if (connect) await connect.release();
    }
  };