import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { connection } from "./database/connection.js";

dotenv.config();
const PORT = process.env.APP_PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

// ROTA DE TESTE
app.get("/test-db", async (req, res) => {
  try {
    const result = await connection.query("SELECT NOW()");
    res.json({
      message: "Conexão bem-sucedida!",
      serverTime: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao conectar ao banco" });
  }
});

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
