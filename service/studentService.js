const { models } = require("../models");

const getStudents = async () => {
    const students = await models.student.findAll();
    return students;
};

const addStudent = async (data) => {
    const student = await models.student.create(data);
    return student;
};

const updateStudent = async (studentID, updateStudentData) => {
    const student = await models.student.findByPk(studentID);

    if (student) {
        await student.update(updateStudentData);
        return student;
    }

    return null;
};

const deleteStudent = async (studentID) => {
    const student = await models.student.findByPk(studentID);

    if (student) {
        await student.destroy();
        return true;
    }

    return false;
};

module.exports = { getStudents, addStudent, updateStudent, deleteStudent };
