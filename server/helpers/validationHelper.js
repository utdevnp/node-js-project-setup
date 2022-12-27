import { respondValidationError } from "../helpers/responseHelper.js";

const validateRequestBody = (schema, title, opt) => (req, res, next) => {
  const options = opt || { abortEarly: false };
  const validation = schema.validate(req.body, options);

  if (validation.error) {
    const formattedMessage = validation.error.details.map((item)=>{
      return{
        [item.context.label]: item.message.replace(/['"]/g, "")
      }
    });
      
    return respondValidationError(res,{
      message:"Required fields missing or invalid",
      validationErrors:formattedMessage
    });
  }

  if (!req.value) {
    req.value = {};
  }

  req.value.body = validation.value;

  next();
};

export default validateRequestBody;