import { Router } from "express";
import {
  getProgreso,
  putEscena,
  putCertificado,
  putCurso
} from "../controllers/escenas.controllers.js";

const router = Router();

router.get("/getProgreso/:idUsuario", getProgreso);

router.put("/putEscena/:idUsuario/:idEscena", putEscena);

router.put("/putCertificado/:idUsuario", putCertificado);

router.put("/putCurso/:idUsuario/:idCurso", putCurso);


export default router;
