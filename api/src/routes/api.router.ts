import express from "express";
import productRouter from "./product.router";

const apiRouter = express.Router();

apiRouter.use("/products", productRouter);
apiRouter.get("/", (req, res) => {
  res.json({ message: "api" });
});

export default apiRouter;
