import { NextApiRequest, NextApiResponse } from "next";
import { getProductById } from "../../../lib/product";
import { Product } from "../../../type/Product";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  const { id } = req.query;
  if (req.method === "GET") {
    return res.status(200).json(getProductById(id as string));
  }
}
