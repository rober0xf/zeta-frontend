import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Layout from "../../hocs/layouts/Layout";

function Models() {
  return (
    <Layout>
      <Navbar />
      <h1 className="flex-1 ml-1">Discover which models are we using</h1>
      <Footer />
    </Layout>
  );
}

export default Models;
