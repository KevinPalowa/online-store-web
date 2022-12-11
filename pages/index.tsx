import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import pic1 from "../assets/img/product-1.jpeg";
import pic2 from "../assets/img/product-2.jpeg";
import pic3 from "../assets/img/product-3.jpeg";
import pic4 from "../assets/img/product-4.jpeg";
export default function Home() {
  return (
    <Layout title="Home Page">
      <Jumbotron />
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 container place-items-center my-5 mx-auto">
        <Card src={pic1} title="Daster Merah" price="25000">
          Daster berbahan katun yang adem
        </Card>
        <Card src={pic2} title="Cemilan kriuk" price="15000">
          Cemilan kriuk yang menggugah selera
        </Card>
        <Card src={pic3} title="Daster Murah" price="20000">
          Daster Murah meriah
        </Card>
        <Card src={pic4} title="Daster Keren" price="30000">
          Daster keren dan kece
        </Card>
      </div>
    </Layout>
  );
}
/* export async function getServerSideProps() { */
/*   // Fetch data from external API */
/*   const env = process.env.NODE_ENV; */
/*   let res; */
/*   if (env == "development") { */
/*     // do something */
/*     res = await fetch(`https://online-store-web.vercel.app/api/product`); */
/*   } else if (env == "production") { */
/*     // do something */
/*     res = await fetch(`http://localhost:3000/api/product`); */
/*   } */
/*   const data = await res?.json(); */
/**/
/*   // Pass data to the page via props */
/*   return { props: { data } }; */
/* } */
