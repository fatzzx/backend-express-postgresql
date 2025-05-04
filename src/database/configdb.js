import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const isLocalhost = process.env.DATABASE_URL.includes("localhost");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: isLocalhost
      ? false
      : {
          require: true,
          rejectUnauthorized: false,
        },
  },
  logging: false,
});

// Testar conexão
sequelize
  .authenticate()
  .then(() => console.log("✅ Conexão com banco estabelecida"))
  .catch((err) => console.error("❌ Erro ao conectar ao banco:", err));

export default sequelize;
