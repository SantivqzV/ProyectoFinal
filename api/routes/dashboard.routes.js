import { Router } from "express";
import {
    adminDashboardInfoGlobal,
    adminDashboardInfoPais, 
    userDashboardInfo
} from "../controllers/dashboard.controller.js";

const router = Router();

router.get("/adminDashboard", adminDashboardInfoGlobal);
router.get("/adminDashboard/:pais", adminDashboardInfoPais);

router.get("/userDashboard", userDashboardInfo);

export default router;
