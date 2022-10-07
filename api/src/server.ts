import express from "express";
import { apiRouter } from "./routes";
import sequelize from "./config/sequelize";

sequelize
  .authenticate()
  .catch((err) => console.error("Unable to connect to the database:", err));
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

export default app;
