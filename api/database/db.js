import sql from "mssql";

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: { encrypt: true, trustServerCertificate: true },
};

export async function getConnection() {
  const pool = await sql.connect(config);
  return pool;
}

export { sql };
