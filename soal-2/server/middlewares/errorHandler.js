function errorHandler(error, req, res, next) {
  let message = "Internal Server Error";
  let status = 500;

  if (error.msg === "Invalid Email/Password") {
    message = error.msg;
    status = 401;
  }

  if (error.msg === "Please login first") {
    message = error.msg;
    status = 401;
  }

  if (error.msg === "Please fill reCAPTCHA") {
    message = error.msg;
    status = 401;
  }
  res.status(status).json({
    message: message,
  });
}

module.exports = errorHandler;