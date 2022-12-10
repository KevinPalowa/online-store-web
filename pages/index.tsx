import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import pic from "../assets/img/product-1.jpeg";
import pic2 from "../assets/img/product-2.jpeg";
import pic3 from "../assets/img/product-3.jpeg";
import pic4 from "../assets/img/product-4.jpeg";
export default function Home() {
  return (
    <Layout title="Home Page">
      <Jumbotron />
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 container mx-auto mt-5">
        <Card src={pic} title="Baju Daster">
          Baju daster dengan bahan yang adem & murah
        </Card>
        <Card src={pic2} title="Baju Daster">
          Cemilan kriuk yang enak
        </Card>
        <Card src={pic3} title="Baju Daster">
          Cemilan kriuk yang enak
        </Card>
        <Card src={pic4} title="Baju Daster">
          Cemilan kriuk yang enak
        </Card>
      </div>
    </Layout>
  );
}
