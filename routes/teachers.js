const express = require("express");
const router = express.Router();

const { addTeacher, getTeachers } = require("../contoller/teachers/teacherController");

router.get("/getTeachers", getTeachers);
router.post("/addTeacher", addTeacher);

module.exports = router;
