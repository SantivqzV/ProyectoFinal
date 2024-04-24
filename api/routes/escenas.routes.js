import { Router } from "express";
import {
  getEscena,
  putEscena
} from "../controllers/escenas.controllers.js";

const router = Router();

router.get("/escena/:id_trabajador", getEscena);

router.put("/put_escena/:id_trabajador/:escena", putEscena);


export default router;
