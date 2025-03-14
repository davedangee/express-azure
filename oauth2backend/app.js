import express from "express";
import session from "express-session";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import protectedRoutes from "./routes/protectedRoutes";
import { config } from "./config/env";
import passport from "./auth/passport";

const app = express();

app.use(cors({ origin: config.CLIENT_ORIGIN, credentials: true }));
app.use(express.json());

app.use(
    session({
        secret: "LUKASGEMEINDERATLUKASGEMEINDERATLUKASGEMEINDERATLUKASGEMEINDERATLUKASGEMEINDERATLUKASGEMEINDERATLUKASGEMEINDERATLUKASGEMEINDERATLUKASGEMEINDERATLUKASGEMEINDERATLUKASGEMEINDERAT",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/api", protectedRoutes);

app.listen(config.PORT, () => {
    console.log(`Server running on http://localhost:${config.PORT}`);
});
