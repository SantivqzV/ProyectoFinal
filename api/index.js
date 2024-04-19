import "dotenv/config";
import express from "express";
import cursosRoutes from "./routes/cursos.routes.js";
import morgan from "morgan";
import cors from "cors";


const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(cursosRoutes);

app.listen(5000, console.log("http://localhost:5000"));
