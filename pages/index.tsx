import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import axios from "axios";
import { Product } from "../type/Product";
export default function Home({ data }: { data: Product[] }) {
  return (
    <Layout title="Home Page">
      <Jumbotron />
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 container mx-auto mt-5">
        {data.map((product) => {
          return (
            <Card
              src={`/image/${product.image}`}
              title={product.title}
              key={product.id}
              price={product.price}
            >
              {product.description}
            </Card>
          );
        })}
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const env = process.env.NODE_ENV;
  let res;
  if (env == "development") {
    // do something
    res = await fetch(`https://online-store-web.vercel.app/api/product`);
  } else if (env == "production") {
    // do something
    res = await fetch(`http://localhost:3000/api/product`);
  }
  const data = await res?.json();

  // Pass data to the page via props
  return { props: { data } };
}
