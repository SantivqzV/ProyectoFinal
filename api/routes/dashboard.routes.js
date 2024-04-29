import { Router } from "express";
import {
    adminDashboardInfo, 
    userDashboardInfo
} from "../controllers/dashboard.controller.js";

const router = Router();

router.get("/adminDashboard", adminDashboardInfo);

router.get("/userDashboard", userDashboardInfo);

export default router;
