import { Router } from "express";
import {getNotices, createNotice, updateNotice, deleteNotice, getNoticeById} from "./notice.controller.js";
//import * as NoticeRepository from './notice.repository.js';
export const router = Router();
export const path = "/notices";

// router.route("path")
// .get(getNotices)
// .post(createNotice)

// http://localhost:5000/v1/notices/1

// router.route("/:id").get(getNotices);

// router.route("path/:id")
// .get(getNoticeById)
// .put(updateNotice)
// .delete(deleteNotice);

router.route("/list").get(getNotices);
// localhost:5000/v1/notices/list - GET 요청

router.route("/:id").get(getNoticeById);

// localhost:5000/v1/notices/1 - GET 요청 -> 1번 게시물 정보 가져옴

router.route("/write").post(createNotice);
router.route("/update/:id").patch(updateNotice);
router.route("/delete/:id").delete(deleteNotice);