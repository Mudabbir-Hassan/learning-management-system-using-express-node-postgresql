const express = require("express");
const router = express.Router();

const {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
} = require("../contoller/users/userController");

router.get("/getUsers", getUsers);

router.post("/addUser", addUser);

router.put("/updateUser/:id", updateUser);

router.delete("/deleteUser/:id", deleteUser);



module.exports = router;
