import fs from "fs";
import { nanoid } from "nanoid";
import { Product } from "../type/Product";
const products = require("../data/product.json");
export function getProductById(id: string): Product {
  return products.filter((product: Product) => product.id === id);
}

export function addProduct(data: {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}): any {
  let dataProducts = JSON.parse(
    fs
      .readFileSync(
        "/home/kevinpalowa/repos/online-store-web/data/product.json"
      )
      .toString()
  );
  dataProducts.push({
    id: data.id,
    title: data.title,
    description: data.description,
    price: data.price,
    image: data.image,
  });

  /* fs.writeFileSync( */
  /*   `/home/kevinpalowa/repos/online-store-web/assets/img/${data.image.filename}`, */
  /*   data.image.buffer */
  /* ); */
  fs.writeFileSync(
    "/home/kevinpalowa/repos/online-store-web/data/product.json",
    JSON.stringify(dataProducts)
  );
  return data;
}
