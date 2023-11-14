const teacher = require("./schemas/teacherSchema");
const user = require("./schemas/userSchema");
const student = require("./schemas/studentSchema");
const course = require("./schemas/courseSchema");
// const CourseStudent = require("./schemas/studentCourseJunctionSchema");

const sequalize = require("../common/dbConnection");

user.hasOne(teacher, {
    onDelete: "CASCADE",
    foreignKey: { name: "userID", allowNull: false, unique: true },
});
teacher.belongsTo(user, {
    onDelete: "CASCADE",
    foreignKey: { name: "userID", allowNull: false, unique: true },
});

user.hasOne(student, {
    onDelete: "CASCADE",
    foreignKey: { name: "userID", allowNull: false, unique: true },
});
student.belongsTo(user, {
    onDelete: "CASCADE",
    foreignKey: { name: "userID", allowNull: false, unique: true },
});


course.belongsToMany(student, { 
    onDelete: "CASCADE",
    foreignKey: { name: "courseId", allowNull: false, unique: true },
    through: "studentCourse" 
});
student.belongsToMany(course, { 
    onDelete: "CASCADE",
    foreignKey: { name: "studentId", allowNull: false, unique: true },
    through: "studentCourse" 
});

course.belongsToMany(teacher, { 
    onDelete: "CASCADE",
    foreignKey: { name: "courseId", allowNull: false, unique: true },
    through: "teacherCourse" 
});
teacher.belongsToMany(course, { 
    onDelete: "CASCADE",
    foreignKey: { name: "teacherId", allowNull: false, unique: true },
    through: "teacherCourse" 
});

const models = sequalize.models;
// console.log(models);
const db = {};
db.sequalize = sequalize;
module.exports = { db, models };
