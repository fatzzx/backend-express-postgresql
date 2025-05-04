import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "../database/configdb.js";
import User from "../models/User.js";
import userRoute from "../routes/user.route.js";
import userProtected from "../routes/protected.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRoute);
app.use("/auth", userProtected);

app.get("/", (req, res) => res.send("Express on Vercel"));

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida.");
    await sequelize.sync();
    console.log("Modelos sincronizados com o banco de dados.");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
  }
})();

export default app;
