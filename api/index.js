import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";


import cursosRoutes from "./routes/cursos.routes.js";
import userRoutes from "./routes/users.routes.js";
import escenaRoutes from "./routes/escenas.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js"
import pagesRoutes from "./routes/pages.routes.js"



const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(cursosRoutes);
app.use(userRoutes);
app.use(escenaRoutes);
app.use(dashboardRoutes);
app.use(pagesRoutes);

app.listen(5001, console.log("http://localhost:5001"));
