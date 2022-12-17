import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import products from "../data/product.json";
export default function Home() {
  return (
    <Layout title="Home Page">
      <Jumbotron />
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 container place-items-center my-5 mx-auto">
        {products.map((product, i) => (
          <Card
            key={i}
            src={`/img/${product.image}`}
            title={product.title}
            price={product.price}
          />
        ))}
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
