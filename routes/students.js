const express = require("express");
const router = express.Router();

const {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent,
} = require("../contoller/students/studentController");

router.get("/getStudents", getStudents);
router.post("/addStudent", addStudent);
router.put("/updateStudent/:id", updateStudent);
router.delete("/deleteStudent/:id", deleteStudent);

module.exports = router;
