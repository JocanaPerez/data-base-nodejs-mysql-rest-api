import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();
app.use(express.json());

app.use(indexRoutes);
app.use("/api", employeesRoutes); //(url mas la funcion que se importa )

//responder si la url resivido no existe en este servidor
app.use((req, res) => {
  res.status(404).json({
    mensaje: "pagina no encontrada",
  });
});

export default app;
