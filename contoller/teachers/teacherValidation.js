const Joi = require("joi");

module.exports = {
    addTeacher: Joi.object().keys({
        experience: Joi.number().required(),
        department: Joi.string().required(),
        userID: Joi.number().required(),
    }),
};
