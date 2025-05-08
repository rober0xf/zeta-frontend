import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Layout from "../../hocs/layouts/Layout";

function Home() {
  return (
    <Layout>
      <Navbar />
      <main className="flex-1 ml-1">Home page</main>
      <Footer />
    </Layout>
  );
}

export default Home;
