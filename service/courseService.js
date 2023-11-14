const { models } = require("../models");

const getCourses = async () => {
    const courses = await models.course.findAll();
    return courses;
};

const addCourse = async (data) => {
    const courses = await models.course.create(data);
    return courses;
};

const updateCourse = async (courseID, updateCourseData) => {
    const courseIndex = await courses.findIndex(
        (course) => course.id === courseID
    );

    if (courseIndex !== -1) {
        courses[courseIndex] = {
            ...courses[courseIndex],
            ...updateCourseData,
        };
        return courses;
    }
    return null;
};

const deleteCourse = (courseID) => {
    const courseIndex = courses.findIndex(
        (course) => course.id === courseID
    );
    if (courseIndex !== -1) {
        courses.splice(courseIndex, 1);
        return courses;
    }
    return null;
};

module.exports = { getCourses, addCourse, updateCourse, deleteCourse };
