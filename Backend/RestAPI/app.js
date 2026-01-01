import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// Routes
app.use("/api", userRoutes);

export default app;
