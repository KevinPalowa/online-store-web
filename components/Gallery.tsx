import Image from "next/image";
import products from "../data/product.json";
export function Gallery() {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-3 gap-2 mx-auto mt-5">
      {products.map((product, i) => (
        <div key={i} className="w-full rounded relative h-52">
          <Image
            src={`/img/${product.image}`}
            alt="image"
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
