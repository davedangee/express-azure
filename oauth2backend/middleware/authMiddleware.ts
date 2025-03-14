// Middleware to protect API routes
export const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    // If user is not authenticated, return an unauthorized response
    res.status(401).json({ message: "Unauthorized" });
};