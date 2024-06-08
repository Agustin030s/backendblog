import pool from "../database.js";
import bcrypt from "bcrypt";
import { getUserByEmail } from "./userqueries.db.js";

const initializeAdminUser = async () => {
  let connect;
  const table = "usuario";
  try {
    connect = await pool.getConnection();
    const existingAdmin = await getUserByEmail("admin@admin.com");
    if (existingAdmin.length === 0) {
      const adminUser = {
        email: "admin@admin.com",
        password: "Admin1234",
        rol: "admin",
      };

      const salt = bcrypt.genSaltSync(10);
      adminUser.password = bcrypt.hashSync(adminUser.password, salt);

      await connect.query(
        `INSERT INTO ${table} (email, password, rol) values (?, ?, ?)`,
        [adminUser.email, adminUser.password, adminUser.rol]
      );
    }
  } catch (error) {
    console.error("Error inicializando usuario administrador query:", error);
  } finally {
    if (connect)  connect.release();
  }
};

export default initializeAdminUser;
