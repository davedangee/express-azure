// @ts-ignore
import dotenv from "dotenv";
dotenv.config();

export const config = {
    PORT: process.env.PORT || 5000,
    TERNANT_ID: process.env.AZURE_TERNANT_ID,
    CLIENT_ID: process.env.AZURE_CLIENT_ID!,
    CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET!,
    CALLBACK_URL: "http://localhost:5000/auth/callback",
    CLIENT_ORIGIN: "http://localhost:5173",
};