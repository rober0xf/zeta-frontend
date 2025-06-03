import { useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PricingHome from "../../components/pricing/PricingHome";
import Layout from "../../hocs/layouts/Layout";

function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Navbar />
      <div className="flex-1 ml-1">
        <PricingHome />
      </div>
      <Footer />
    </Layout>
  );
}

export default Pricing;
