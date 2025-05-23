import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import Navbar from "../../components/Navbar";
import Layout from "../../hocs/layouts/Layout";

function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <HomeHeader />
      </div>
      <Footer />
    </Layout>
  );
}

export default Home;
