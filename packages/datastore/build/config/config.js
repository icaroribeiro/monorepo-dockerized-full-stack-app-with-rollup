"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDBDriver = getDBDriver;
exports.getDBHost = getDBHost;
exports.getDBName = getDBName;
exports.getDBPassword = getDBPassword;
exports.getDBPort = getDBPort;
exports.getDBUser = getDBUser;
const data_source_error_1 = require("../data-source-error");
function getDBDriver() {
    return getEnvVar('DB_DRIVER');
}
function getDBUser() {
    return getEnvVar('DB_USER');
}
function getDBPassword() {
    return getEnvVar('DB_PASSWORD');
}
function getDBHost() {
    return getEnvVar('DB_HOST');
}
function getDBPort() {
    return getEnvVar('DB_PORT');
}
function getDBName() {
    return getEnvVar('DB_NAME');
}
function getEnvVar(name) {
    if (!process.env[name]) {
        const message = `${name} environment variable isn't set`;
        throw new data_source_error_1.DataSourceError(500, message);
    }
    return process.env[name];
}
