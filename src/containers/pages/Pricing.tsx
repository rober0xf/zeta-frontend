import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Layout from "../../hocs/layouts/Layout";

function Pricing() {
  return (
    <Layout>
      <Navbar />
      <h1 className="flex-1 ml-1">See our prices</h1>
      <Footer />
    </Layout>
  );
}

export default Pricing;
