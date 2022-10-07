import express from "express";
import { productController } from "../controllers";

const productRouter = express.Router();

productRouter.get("/", productController.getProducts);
productRouter.post("/", productController.addProduct);

export default productRouter;
