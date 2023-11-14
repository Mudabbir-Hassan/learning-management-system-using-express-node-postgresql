const userService = require("../../service/userService");
const userValidation = require("./userValidation");

const getUsers = async (req, res) => {
    const users = await userService.getUsers();
    res.send(users);
};

const addUser = async (req, res) => {
    try {
        const { error, value } = userValidation.addUser.validate(req.body, {
            abortEarly: false,
        });
        if (error) {
            return res.send(error.details.map((err) => err.message));
        } else {
            const data = value;
            const newUsers = await userService.addUser(data);
            return res.send(newUsers);
        }
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const { error, value } = userValidation.updateUser.validate(
            { ...req.body, id: req.params.id },
            {
                abortEarly: false,
            }
        );
        if (error) {
            return res.send(error.details.map((err) => err.message));
        } else {
            const userID = Number(value.id);
            const updatedUserData = req.body;
            const data = await userService.updateUser(userID, updatedUserData);
            res.send(data);
        }
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { error, value } = userValidation.deleteUser.validate({
            id: req.params.id,
        });
        if (error) {
            return res.send(error.details.map((err) => err.message));
        } else {
            const userID = Number(value.id);
            const data = await userService.deleteUser(userID);
            res.send(data);
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
};
