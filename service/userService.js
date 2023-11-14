const { models } = require("../models");

const getUsers = async () => {
    const users = await models.user.findAll();
    return users;
};

const addUser = async (data) => {
    const user = await models.user.create(data);
    return user;
};

const updateUser = async (userID, updatedUserData) => {
    const user = await models.user.findByPk(userID);
    if (user) {
        await user.update(updatedUserData);
    }
    return user;
};

const deleteUser = async (userID) => {
    const user = await models.user.findByPk(userID);
    if (user) {
        await user.destroy();
        return "USER DELETED SUCCESSFULLY";
    }
    return null;
};

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
};
