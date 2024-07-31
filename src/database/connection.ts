import pg from 'pg';

const { Pool } = pg;

const port = Number(process.env.port) ?? 5432;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: port,
});

export default pool;
