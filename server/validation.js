import Joi from "@hapi/joi";

export const userValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
};

export const userValidationForForgotPw = (data) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    id: Joi.string().required(),
  });
  return schema.validate(data);
};
