const { DataTypes } = require("sequelize");
const sequalize = require("../../common/dbConnection");
const user = sequalize.define(
    "user",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            unique: true,
            allowNull: false,
            type: DataTypes.STRING,
            validate: { isEmail: true },
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
        paranoid: true,
    }
);

module.exports = user;
