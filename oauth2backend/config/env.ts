// @ts-ignore
import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.resolve(__dirname, "../config/.env") })

export const config = {
    PORT: process.env.PORT || 5000,
    TENANT_ID: "ffcb5cef-5f3d-4671-86c3-e50bd56f9812",
    CLIENT_ID: "c1dbc2f7-3936-4f30-af85-612c77b8623a",
    CLIENT_SECRET: "W-~8Q~yPXyio5yZzg.GflRppRR4MzwxVcF96gc8s",
    CALLBACK_URL: "http://localhost:5000/auth/callback",
    CLIENT_ORIGIN: "http://localhost:5173",
};

