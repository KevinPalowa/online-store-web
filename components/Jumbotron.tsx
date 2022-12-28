import Image from "next/image";

export default function Jumbotron() {
  return (
    <div className="w-full bg-gray-900 py-36 space-y-3 flex flex-col items-center">
      {/* <h1 className="text-white text-5xl font-bold">Gardam olshop</h1> */}
      <div className="text-gray-500 flex">
        <Image
          src="/img/jumbotron.jpeg"
          alt="jumbotron image"
          width={300}
          height={300}
          className="object-cover"
        />
        {/* <p>Kami menjual :</p> */}
        {/* <ul> */}
        {/*   <li>cemilan medan</li> */}
        {/*   <li>Pakaian perempuan</li> */}
        {/*   <li>Rempah karo</li> */}
        {/*   <li>Madu</li> */}
        {/*   <li>Skincare</li> */}
        {/* </ul> */}
      </div>
    </div>
  );
}
