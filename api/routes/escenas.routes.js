import { Router } from "express";
import {
  getEscena,
  putEscena,
  putCertificado
} from "../controllers/escenas.controllers.js";

const router = Router();

router.get("/escena/:id_trabajador", getEscena);

router.put("/put_escena/:id_trabajador/:escena", putEscena);

router.put("/put_certificado/:id_trabajador", putCertificado);


export default router;
