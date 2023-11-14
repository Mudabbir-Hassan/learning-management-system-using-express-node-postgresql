const { DataTypes } = require("sequelize");
const sequalize = require("../../common/dbConnection");

const student = sequalize.define(
    "student",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        class: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        program: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
        paranoid: true,
    }
);
module.exports = student;
