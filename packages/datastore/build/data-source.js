"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const config_1 = require("./config/config");
const todo_entity_1 = require("./domain/todo/todo.entity");
dotenv_1.default.config({ path: './env_files/.env.development' });
const config = {
    host: (0, config_1.getDBHost)(),
    port: parseInt((0, config_1.getDBPort)()),
    username: (0, config_1.getDBUser)(),
    password: (0, config_1.getDBPassword)(),
    database: (0, config_1.getDBName)(),
};
const dataSource = new typeorm_1.DataSource({
    ...config,
    type: 'postgres',
    synchronize: false,
    logging: false,
    entities: [todo_entity_1.Todo],
    migrations: [],
    subscribers: [],
});
exports.dataSource = dataSource;
