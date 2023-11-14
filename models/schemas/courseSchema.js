const { DataTypes } = require("sequelize");
const sequalize = require("../../common/dbConnection");

const course = sequalize.define(
    "course",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        courseName: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
        paranoid: true,
    }
);
module.exports = course;