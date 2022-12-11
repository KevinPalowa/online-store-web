import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  src: string | StaticImageData;
  title: string;
  children: string;
  price: string;
};
export default function Card({ src, title, children, price }: Props) {
  return (
    <div className="w-72 rounded-lg shadow-lg bg-white max-w-sm">
      {/* <Link href="#!"> */}
      <div className="relative w-full h-56">
        <Image className="rounded-t-lg" src={src} alt="Product Picture" fill />
      </div>
      {/* </Link> */}
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
        <p className="text-gray-700 text-base mb-4">{children}</p>
        <p className="text-gray-700 text-base mb-4 font-bold">Rp. {price}</p>
        <Link
          className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          href={`https://wa.me/+6283836222168?text=Saya+mau+pesan+${title}`}
          target="_blank"
        >
          Chat Whatsapp
        </Link>
      </div>
    </div>
  );
}
