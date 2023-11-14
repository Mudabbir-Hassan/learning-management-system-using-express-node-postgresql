const courseService = require("../../service/courseService");
const courseValidation = require("./courseVaidation");

const getCourses = (req, res) => {
    const courses = courseService.getCourses();
    res.send(courses);
};

const addCourse = async (req, res) => {
    try {
        const { error, value } = courseValidation.addCourse.validate(
            req.body,
            {
                abortEarly: false,
            }
        );
        if (error) {
            return res.send(error.details.map((err) => err.message));
        } else {
            const data = value;
            const newCourse = await courseService.addCourse(data);
            return res.send(newCourse);
        }
    } catch (error) {
        console.log(error);
    }
};

const updateCourse = (req, res) => {
    const courseID = Number(req.params.id);
    const updateCourseData = req.body;

    const data = courseService.updateCourse(courseID, updateCourseData);
    res.send(data);
};

const deleteCourse = (req, res) => {
    const courseID = Number(req.params.id);
    const data = courseService.deleteCourse(courseID);
    res.send(data);
};

module.exports = { getCourses, addCourse, updateCourse, deleteCourse };
