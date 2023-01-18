import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index";
import path from "path";
import cors from "cors";

const app = express();

//setting
app.set("port", process.env.PORT || 3000);

//moddlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api", indexRoutes);

app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
