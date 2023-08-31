const responseOk = (msg, data) => {
  return {
    message: msg,
    data,
  };
};

const responseError = (err) => {
  return {
    error: err,
  };
};

export { responseError, responseOk };
