const studentService = require("../../service/studentService");
const studentValidation = require("./studentValidation");

const getStudents = (req, res) => {
    const students = studentService.getStudents();
    res.send(students);
};

const addStudent = async (req, res) => {
    try {
        const { error, value } = studentValidation.addStudent.validate(
            req.body,
            {
                abortEarly: false,
            }
        );
        if (error) {
            return res.send(error.details.map((err) => err.message));
        } else {
            const data = value;
            const newStudent = await studentService.addStudent(data);
            return res.send(newStudent);
        }
    } catch (error) {
        console.log(error);
    }
};

const updateStudent = (req, res) => {
    const studentID = Number(req.params.id);
    const updateStudentData = req.body;

    const data = studentService.updateStudent(studentID, updateStudentData);
    res.send(data);
};

const deleteStudent = (req, res) => {
    const studentID = Number(req.params.id);
    const data = studentService.deleteStudent(studentID);
    res.send(data);
};

module.exports = { getStudents, addStudent, updateStudent, deleteStudent };
