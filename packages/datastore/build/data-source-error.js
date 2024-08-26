"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceError = void 0;
class DataSourceError extends Error {
    statusCode;
    message;
    status;
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.DataSourceError = DataSourceError;
