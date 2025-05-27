import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Layout from "../../hocs/layouts/Layout";
import HomeResearch from "../../components/research/ResearchHome";
import ResearchList from "../../components/research/ResearchList";

function Research() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <HomeResearch />
        <ResearchList />
      </div>
      <Footer />
    </Layout>
  );
}

export default Research;
