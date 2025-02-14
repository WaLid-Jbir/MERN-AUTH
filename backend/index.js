import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js"
import authRoutes from "./routes/auth.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
})); // allows to make requests from client to server for only the client url
app.use(express.json()); // allows to parse json data coming from request body (req.body)
app.use(cookieParser()); // allows to parse incoming cookies

// Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
})