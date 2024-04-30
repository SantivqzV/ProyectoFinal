import { Router } from "express";
import {
    getLeaderboard
} from "../controllers/pages.controllers.js";

const router = Router();

router.get("/getLeaderboard", getLeaderboard);

export default router;
