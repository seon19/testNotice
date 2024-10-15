import express from "express";
import bodyparser from "body-parser";
import * as Api from "./app.router.js";
import { connect } from "./db.js";

const app = express();

app.use(bodyparser.json());       

app.use(Api.path, Api.router);    // API 경로 설정

app.listen(5000, async () => {
    await connect();
    console.log(`Server listening on port 5000`)
})