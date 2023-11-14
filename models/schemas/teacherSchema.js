const { DataTypes } = require("sequelize");
const sequalize = require("../../common/dbConnection");

const teacher = sequalize.define(
    "teacher",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        experience: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        department: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
        paranoid: true,
    }
);
module.exports = teacher;
