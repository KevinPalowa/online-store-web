import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import product from "../../../data/product.json";
import { addProduct } from "../../../lib/product";
import path from "path";
import { nanoid } from "nanoid";
const formidable = require("formidable-serverless");
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    return res.status(200).json(product);
  } else if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, async (err: any, fields: any, files: any) => {
      const id = nanoid(16);
      if (err) {
        return res.status(400).json({ message: err });
      }
      const image = files.image;
      const ext = path.extname(image.path);
      const baseDir = path.resolve(__dirname, "../../../../public");
      const fileName = id + ext;
      const destination = `${baseDir}/image/${fileName}`;
      fs.copyFileSync(image.path, destination);
      const data = { ...fields, id, image: fileName };
      addProduct(data);
      return res.status(201).json("success");
    });
    /* return res.status(201).json({ message: "success" }); */
  } else {
    return res.status(405).json({ msg: "Method not allowed" });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
