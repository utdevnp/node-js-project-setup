import Joi from "joi";

export const authorSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  city: Joi.string().required(),
  description: Joi.string().allow(""),
});