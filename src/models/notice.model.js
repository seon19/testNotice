import { DataTypes, Model } from "sequelize";

export default class Notice extends Model {
    static initialize(sequelize) {
        Notice.init({
            _id: {
                type: DataTypes.INTEGER(),
                allowNull: false,
                unique: true,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            content: {
                type: DataTypes.TEXT(),
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE(),
                allowNull: false,
                defaultValue: sequelize.fn("NOW"),
            },
            updatedAt: {
                type: DataTypes.DATE(),
                allowNull: false,
                defaultValue: sequelize.fn("NOW"),
            },
            deletedAt: {
                type: DataTypes.DATE(),
                allowNull: true,
            }
        }, {
            sequelize,
            tableName: "notices",
            modelName: "notice",
            charset: "utf8",
            paranoid: true,
            timestamps: true,
        })
    }
}