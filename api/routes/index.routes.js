import { Router } from "express";

const router = Router();

// rutas iniciales
router.get("/", (req, res) => {
  res.send("Hola mundo desde la API!");
});
router.get("/marco", (req, res) => {
  res.send("Polo!");
});
router.get("/ping", (req, res) => {
  res.send("Pong!");
});
router.get("/a/b/c", (req, res) => {
  res.send("ABC!");
});

export default router;
