const { Sequelize } = require("sequelize");
const config = require("../config");

const database = new Sequelize(config.db);

database
    .authenticate()
    .then(() => console.log("DB SUCCESSFULLY CONNECTED"))
    .catch((error) => console.log(error));

module.exports = database;
