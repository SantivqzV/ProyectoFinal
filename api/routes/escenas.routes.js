import { Router } from "express";
import {
  getEscena,
  putEscenaYCurso,
  putCertificado
} from "../controllers/escenas.controllers.js";

const router = Router();

router.get("/escena/:id_usuario", getEscena);

router.put("/put_escena/:id_usuario/:escena/:nuevo_curso", putEscenaYCurso);

router.put("/put_certificado/:id_usuario", putCertificado);


export default router;
