"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
// Protected route that requires authentication
router.get("/protected", authMiddleware_1.isAuthenticated, (req, res) => {
    res.json({ message: "Protected Data", user: req.user });
});
exports.default = router;
