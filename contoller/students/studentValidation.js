const Joi = require("joi");

module.exports = {
    addStudent: Joi.object().keys({
        class: Joi.number().required(),
        userID: Joi.number().required(),
        program: Joi.string().required(),
    }),
};
