import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string()
        .regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
        .min(1)
        .max(20)
        .required()
        .messages({
            'string.pattern.base': 'Only letters, min length is 1, max length is 20'
        }),
    price: Joi.number()
        .min(0)
        .max(1000000)
        .required(),
    year: Joi.number()
        .min(1990)
        .max(new Date().getFullYear())
        .required()
})