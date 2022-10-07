import { Request, Response } from "express";
import { Product, Comment } from "@models/index";
import reformatProduct from "../helpers/reformat-product";
import RequestBody from "../types/request-body";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const item = await Product.findAll();
      console.log(item)
    const answer = await reformatProduct(item);
    res.json(answer);
  } catch (err) {
    res.status(500).json({ message: String(err) });
  }
};

export const addProduct = async (
  req: RequestBody<{
    name: string;
    width: number;
    height: number;
    weight: string;
    count: number;
    imageUrl: string;
  }>,
  res: Response
) => {
  try {
    const item = await Product.create(req.body);
    const created = await reformatProduct(item);
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ message: String(err) });
  }
};
