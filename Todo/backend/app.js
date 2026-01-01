import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", todoRoutes);

export default app;
