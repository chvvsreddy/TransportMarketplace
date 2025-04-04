import { Router } from "express";
import {getAllUsers } from "../controllers/usersControllar"

const router = Router();

router.get("/", getAllUsers)

export default router;