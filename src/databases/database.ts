import mysql from "mysql2/promise"

export const connection = mysql.createPool({
    host: "localhost", // Cambia según tu configuración
    user: "root",      // Usuario de la base de datos
    password: "",      // Contraseña de la base de datos
    database: "typescript_crud", // Nombre de tu base de datos
  });

  


 
  