export const responseSuccess = (res, statusCode, title, message, data) => {
  res.status(statusCode).send({ title, message, data });
}

export const responseError = (res, statusCode, title, message, data) => {
  res.status(statusCode).send({ title, message, data });
}

export const respondValidationError = async (res, data) => {
  res.status(422).send(data);
};