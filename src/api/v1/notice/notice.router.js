import { Router } from "express";
import {getNotices, createNotice, updateNotice, deleteNotice, getNoticeById} from "./notice.controller.js";
//import * as NoticeRepository from './notice.repository.js';
export const router = Router();
export const path = "/notices";

router.route("path")
.get(getNotices)
.post(createNotice)

router.route("path/:id")
.get(getNoticeById)
.put(updateNotice)
.delete(deleteNotice);

