import pool from "../database.js";
const table = "usuario";

export const getAllUsers = async () => {
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

export const getUserById = async (id) => {
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

export const getUserByEmail = async (email) => {
  let connect;
  try {
    connect = await pool.getConnection();
    const rows = await connect.query(
      `SELECT * FROM ${table} WHERE email="${email}"`
    );
    return rows;
  } catch (error) {
    return Promise.reject(error);
  } finally {
    if (connect) await connect.release();
  }
};
