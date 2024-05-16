import express from "express";
import authRoutes from "./routes/auth.js"
import taskRoutes from "./routes/tasks.js"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);

app.listen(8000, () => {
  console.log("connected on port 8000");
})