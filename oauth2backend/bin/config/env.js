"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// @ts-ignore
const dotenv_1 = __importDefault(require("dotenv"));
const node_path_1 = __importDefault(require("node:path"));
dotenv_1.default.config({ path: node_path_1.default.resolve(__dirname, "../config/.env") });
exports.config = {
    PORT: process.env.PORT || 5000,
    TENANT_ID: "ffcb5cef-5f3d-4671-86c3-e50bd56f9812",
    CLIENT_ID: "c1dbc2f7-3936-4f30-af85-612c77b8623a",
    CLIENT_SECRET: "W-~8Q~yPXyio5yZzg.GflRppRR4MzwxVcF96gc8s",
    CALLBACK_URL: "http://localhost:5000/auth/callback",
    CLIENT_ORIGIN: "http://localhost:5173",
};
