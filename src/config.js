import { config } from "dotenv";
config();

export const DB_HOST = process.env.DB_HOST || process.env.MYSQLHOST || 'localhost';
export const DB_USER = process.env.DB_USER || process.env.MYSQLUSER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || process.env.MYSQLPASSWORD || 'root1234';
export const DB_DATABASE = process.env.DB_DATABASE || process.env.MYSQLDATABASE || 'companydb';
export const DB_PORT = process.env.DB_PORT || process.env.MYSQLPORT || 3306;
