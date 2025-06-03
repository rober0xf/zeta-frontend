import BlogList from "../../components/home/BlogList";
import BlogSection from "../../components/home/BlogSection";
import CTA from "../../components/home/CTA";
import Features from "../../components/home/Features";
import Footer from "../../components/Footer";
import HomeHeader from "../../components/home/HomeHeader";
import Incentives from "../../components/home/Incentives";
import Navbar from "../../components/Navbar";
import Layout from "../../hocs/layouts/Layout";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <HomeHeader />
        <Incentives />
        <BlogSection />
        <Features />
        <CTA />
        <BlogList />
      </div>
      <Footer />
    </Layout>
  );
}

export default Home;
