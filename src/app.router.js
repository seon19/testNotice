import { Router } from "express";
import * as v1 from "./api/v1/v1.router.js";

export const router = Router();
export const path = "";

router.get("/healthCheck", (req, res) => {
    res.status(200).json({code: 200})
})

router.use(v1.path, v1.router);