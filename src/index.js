import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import router from './routes/order-routes.js';

dotenv.config();
const PORT = process.env.APP_PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/" , router)

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
