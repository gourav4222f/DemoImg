import { config } from "dotenv";
import { existsSync } from "fs";

const envFilePath = `.env.${process.env.NODE_ENV || 'development'}.local`;

if (existsSync(envFilePath)) {
    config({ path: envFilePath });
} else {
    console.warn(`Environment file ${envFilePath} not found, falling back to default .env`);
    config();
}

export const { PORT, NODE_ENV, DB_URI, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

