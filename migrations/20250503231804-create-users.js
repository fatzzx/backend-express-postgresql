import { config } from "dotenv";
config(); // Carregar variáveis de ambiente do .env

export default {
  development: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: "postgres", // Verifique se o dialeto está como 'postgres'
    ssl: {
      require: true,
      rejectUnauthorized: false, // Necessário para conexões SSL
    },
  },
  test: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: "postgres",
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: "postgres",
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
