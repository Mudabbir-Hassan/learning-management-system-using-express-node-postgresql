const express = require("express");
const router = express.Router();

const {
    getCourses,
    addCourse,
    updateCourse,
    deleteCourse,
} = require("../contoller/courses/courseController");

router.get("/getCourses", getCourses);
router.post("/addCourse", addCourse);

router.put("/updateCourse/:id", updateCourse);
router.delete("/deleteCourse/:id", deleteCourse);

module.exports = router;
