const apiError = (status, message) => {
  const ResponseStatus = {
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    UNAUTHORIZED: 401,
  };

  switch (status) {
    case ResponseStatus.BAD_REQUEST:
      return { statusCodeError: status, message };
      break;
    case ResponseStatus.NOT_FOUND:
      return { statusCodeError: status, message };
      break;
    case ResponseStatus.INTERNAL_SERVER_ERROR:
      return { statusCodeError: status, message };
      break;
    case ResponseStatus.UNAUTHORIZED:
      return { statusCodeError: status, message };
      break;
    default:
      break;
  }
};

module.exports = { apiError };
