import { Pool } from "pg";
require("dotenv").config();

const db = new Pool({
  host: process.env.DB_HOST_DEV,
  user: process.env.DB_USER_DEV,
  database: process.env.DB_DATABASE_DEV,
  password: process.env.DB_PASSWORD_DEV,
  port: Number(process.env.DB_PORT_DEV),
});

module.exports = db;
