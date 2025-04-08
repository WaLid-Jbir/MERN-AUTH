import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";


import './utils/passport.js'; // import passport configuration

import { connectDB } from "./lib/db.js"
import authRoutes from "./routes/auth.route.js"
import googleRoutes from "./routes/google.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
})); // allows to make requests from client to server for only the client url
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // set to true if using https
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    }
}));
app.use(passport.initialize()); // initialize passport for authentication
app.use(express.json()); // allows to parse json data coming from request body (req.body)
app.use(cookieParser()); // allows to parse incoming cookies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', googleRoutes);

// swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
})