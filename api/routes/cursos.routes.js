import { Router } from "express";
import {
  getCursos,
  getCurso,
  postCurso,
  putCurso,
  deleteCurso
} from "../controllers/cursos.controllers.js";

const router = Router();

router.get("/cursos", getCursos);

router.get("/cursos/:id", getCurso);

router.post("/cursos", postCurso);

router.put("/cursos/:id", putCurso);

router.delete("/cursos/:id", deleteCurso);

export default router;
