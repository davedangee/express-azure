"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("../auth/passport"));
const router = express_1.default.Router();
// Route to initiate login with Azure OAuth
router.get("/login", passport_1.default.authenticate("azure_ad_oauth2"));
// OAuth callback route
router.get("/callback", passport_1.default.authenticate("azure_ad_oauth2", { failureRedirect: "/login" }), (req, res) => {
    // Redirect user to frontend after successful authentication
    res.redirect("http://localhost:5173/dashboard");
});
// Logout route to clear session
router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error(err);
        }
        res.redirect("http://localhost:5173");
    });
});
exports.default = router;
