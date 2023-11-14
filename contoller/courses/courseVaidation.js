const Joi = require("joi");

module.exports = {
    addCourse: Joi.object().keys({
        courseName: Joi.string().required(),
        Description: Joi.string().optional(),
    }),

    deleteCourse: Joi.object().keys({
        id: Joi.number().required(),
    }),

    updateCourse: Joi.object().keys({
        id: Joi.number().required(),
        courseName: Joi.string().required(),
        description: Joi.string().optional(),
    }),
};
