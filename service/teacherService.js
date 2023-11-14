const { models } = require("../models");

const getTeachers = async () => {
    const teachers = await models.teacher.findAll();
    return teachers;
};

const addTeacher = async (data) => {
    const teacher = await models.teacher.create(data);
    return teacher;
};

const updateTeacher = async (teacherID, updateTeacherData) => {
    const teacher = await models.teacher.findByPk(teacherID);

    if (teacher) {
        await teacher.update(updateTeacherData);
        return teacher;
    }

    return null;
};

const deleteTeacher = async (teacherID) => {
    const teacher = await models.teacher.findByPk(teacherID);

    if (teacher) {
        await teacher.destroy();
        return true;
    }

    return false;
};

module.exports = {
    addTeacher,
    getTeachers,
    updateTeacher,
    deleteTeacher,
};
