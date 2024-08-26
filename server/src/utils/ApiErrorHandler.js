class ApiErrorHandler extends Error {
  constructor(message = "Something went wrong", errors = [], statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
  }
}
export { ApiErrorHandler };
