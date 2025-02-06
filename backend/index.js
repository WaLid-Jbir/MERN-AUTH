import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js"

const app = express();
const PORT = process.env.PORT;
dotenv.config();

app.get('/', (req, res) =>  {
    res.send("Hello world!");
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
})