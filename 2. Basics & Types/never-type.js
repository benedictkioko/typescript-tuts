function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occorred!", 500);
