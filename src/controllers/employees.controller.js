import { pool } from "../db.js";

//obtener todos los empleados
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employes");
    res.send(rows);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurio algun problema",
    });
  }
};

//obtener solo un empleado por id com parametro de la url
export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employes WHERE id = ?", [
      req.params.id,
    ]); //busca en db el employee id que se resive por parametro de la url
    if (rows.length <= 0)
      //si lo que retorna db en array rows es basio ejecuta
      return res.status(404).json({ mensaje: "Empleado no encontrado" });
    res.send(rows[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurio algun problema",
    });
  }
};

//guardar dato
export const postEmployees = async (req, res) => {
  const { name, salary } = req.body; //Desestructurar de la req.body solo el name y salary
  try {
    // agregar a db employes el dato name y salary, el db retorna un arrray [obtener el indice 0 en rows q es = a un objeto]
    const [rows] = await pool.query(
      "INSERT INTO employes (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    //responder al cliente con un objeto {id que se obtiene del objeto rows mas name y salary }
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurio algun problema",
    });
  }
};

// metodo patch para actualizar todo el dato segun el id o solo el dato necesario
export const updateEmployees = async (req, res) => {
  const { id } = req.params; //obtener el id de su url parametro
  const { name, salary } = req.body;

  try {
    // actualizar el dato en db con los nuevos datos
    const [result] = await pool.query(
      "UPDATE employes SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    //si no encuentra en db el dato para actualizar
    if (result.affectedRows === 0)
      return res.status(404).json({
        mensaje: "Empleado no encontrado",
      });

    //obtener el dato actualizado de la db por id
    const [rows] = await pool.query("SELECT * FROM employes WHERE id = ?", [
      id,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurio algun problema",
    });
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM employes WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({
        mensaje: "Empleado no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurio algun problema",
    });
  }
};
