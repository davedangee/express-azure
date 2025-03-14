// @ts-ignore
import express from "express";
import passport from "../auth/passport";

const router = express.Router();

// Route to initiate login with Azure OAuth
router.get("/login", passport.authenticate("azure_ad_oauth2"));

// OAuth callback route
router.get(
    "/callback",
    passport.authenticate("azure_ad_oauth2", { failureRedirect: "/login" }),
    (req, res) => {
        // Redirect user to frontend after successful authentication
        res.redirect("http://localhost:5173/dashboard");
    }
);

// Logout route to clear session
router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error(err);
        }
        res.redirect("http://localhost:5173");
    });
});

export default router;