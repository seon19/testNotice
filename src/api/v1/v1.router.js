import {Router} from "express";
import * as Notice from "./notice/notice.router.js";

export const router = Router();
export const path = "/v1";

router.use(Notice.path, Notice.router);