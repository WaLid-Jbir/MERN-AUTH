import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js"
import authRoutes from "./routes/auth.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json()); // allows to parse json data coming from request body (req.body)

// Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
})