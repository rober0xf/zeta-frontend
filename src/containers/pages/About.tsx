import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Layout from "../../hocs/layouts/Layout";

function About() {
  return (
    <Layout>
      <Navbar />
      <h1 className="flex-1 ml-1">Know more about us</h1>
      <Footer />
    </Layout>
  );
}

export default About;
