// @ts-ignore
import express from "express";
import { isAuthenticated } from "../middleware/authMiddleware";

const router = express.Router();

// Protected route that requires authentication
router.get("/protected", isAuthenticated, (req, res) => {
    res.json({ message: "Protected Data", user: req.user });
});

export default router;