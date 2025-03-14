"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// @ts-ignore
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    PORT: process.env.PORT || 5000,
    TERNANT_ID: process.env.AZURE_TERNANT_ID,
    CLIENT_ID: process.env.AZURE_CLIENT_ID,
    CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET,
    CALLBACK_URL: "http://localhost:5000/auth/callback",
    CLIENT_ORIGIN: "http://localhost:5173",
};
