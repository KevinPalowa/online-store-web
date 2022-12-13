import Image from "next/image";
import pic1 from "../assets/img/product-1.jpeg";
import pic2 from "../assets/img/product-2.jpeg";
import pic3 from "../assets/img/product-3.jpeg";
import pic4 from "../assets/img/product-4.jpeg";
import pic5 from "../assets/img/product5.jpeg";
import pic6 from "../assets/img/product6.jpeg";
export function Gallery() {
  return (
    <section className="overflow-hidden text-gray-700">
      <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={pic1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={pic2}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={pic3}
                priority
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                priority
                src={pic4}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={pic5}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={pic6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
