// const { DataTypes } = require("sequelize");
// const sequalize = require("../../common/dbConnection");
// const Course = require("./courseSchema");
// const Student = require("./studentSchema");

// const CourseStudent = sequalize.define("course_student", {
//     courseId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: Course,
//             key: "id",
//         },
//     },
//     studentId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: Student,
//             key: "id",
//         },
//     },
// });

// module.exports = CourseStudent;
