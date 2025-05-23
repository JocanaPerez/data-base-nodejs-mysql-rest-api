import { Router } from "express";
import {
  getEmployees,
  postEmployees,
  updateEmployees,
  deleteEmployees,
  getEmployee
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees); //obtener todos los empleados
router.get("/employees/:id", getEmployee); //obtener un empleado por id (id como parametro de la url)

router.post("/employees", postEmployees);
router.patch("/employees/:id", updateEmployees);

router.delete("/employees/:id", deleteEmployees);

export default router;
