
import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
dotenv.config();

export function getDb() {
    const url = process.env.TURSO_DATABASE_URL;
    const authToken = process.env.TURSO_AUTH_TOKEN;

    if (!url || !authToken) {
        console.error("❌ DB CONFIG FEHLT: Bitte TURSO_DATABASE_URL und TURSO_AUTH_TOKEN in Netlify setzen.");
        throw new Error("Datenbank-Verbindung fehlt (Check Netlify Logs)");
    }

    return createClient({ url, authToken });
}
            