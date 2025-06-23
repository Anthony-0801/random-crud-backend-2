type ErrorCode =
  | "ERROR_ENTITY_NOT_FOUND"
  | "ERROR_AUTHENTICATION_FAILED"
  | "ERROR_INVALID_INPUT"
  | "ERROR_UNAUTHORIZED"
  | "ERROR_FORBIDDEN"
  | "ERROR_VALIDATION_FAILED"
  | "ERROR_INTERNAL_SERVER";

type ValidationError = {
  error: {
    message: string;
    code: ErrorCode;
    errors: { message: string }[];
  };
};
