import { Sequelize } from "sequelize";
import Notice from "./models/notice.model.js";

const sequelize = new Sequelize("board", "test", "test1234", {
    host: "localhost",
    dialect: "mysql",
    dialectOptions: {},
    port: 3306,
})

export const connect = async () => {
    Notice.initialize(sequelize);

    await sequelize.authenticate().then(() => {
        sequelize.sync({ alter: true }).then(() => {
            console.log("성공적으로 데이터베이스와 동기화 하였습니다.");
        }).catch((err) => {
            console.log(`데이터베이스와 동기화 도중 오류가 발생했습니다. 오류: ${err}`);
        })
    }).catch((err) => {
        console.log(`데이터베이스 서버 연결 도중 오류가 발생했습니다. 오류: ${err}`);
    });
}