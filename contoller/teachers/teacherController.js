const teacherValidation = require("./teacherValidation");
const teacherService = require("../../service/teacherService");

const getTeachers = async (req, res) => {
    const teachers = await teacherService.getTeachers();
    res.send(teachers);
};

const addTeacher = async (req, res) => {
    try {
        const { error, value } = teacherValidation.addTeacher.validate(
            req.body,
            {
                abortEarly: false,
            }
        );
        if (error) {
            return res.send(error.details.map((err) => err.message));
        } else {
            const data = value;
            const newTeachers = await teacherService.addTeacher(data);
            return res.send(newTeachers);
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = { addTeacher, getTeachers };
