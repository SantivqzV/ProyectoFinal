import { getConnection, sql } from "../database/db.js";

export const getItems = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("select * from trabajadores");
  // console.log(result.recordset);
  res.json(result.recordset);
};

export const getItem = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .query("select * from items where id = @id");
  // console.log(result.recordset);
  res.json(result.recordset);
};


export const postItem = async (req, res) => {
  const { nombre, apellido1 } = req.body;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("nombre", sql.VarChar, nombre)
    .input("apellido1", sql.VarChar, apellido1)
    .query("insert into trabajadores (nombre, apellido1) values (@nombre, @apellido1)");
  // console.log(result.recordset);
  res.json({ nombre, apellido1 });
  // res.send("post item");
};

export const putItem = async (req, res) => {
  const { name, price } = req.body;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .input("name", sql.VarChar, name)
    .input("price", sql.Float, price)
    .query("update items set name=@name, price=@price where id = @id");
  // console.log(result.recordset);
  res.json({ name, price });
  // res.send("post item");
};


export const deleteItem = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .query("delete from items where id = @id");
  // console.log(result.recordset);
  res.sendStatus(200);
};
