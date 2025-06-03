import { useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Layout from "../../hocs/layouts/Layout";
import AboutHeader from "../../components/about/AboutHeader";
import AboutTestimonial from "../../components/about/Testimonial";
import AboutTeam from "../../components/about/AboutTeam";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <AboutHeader />
        <AboutTestimonial />
        <AboutTeam />
      </div>
      <Footer />
    </Layout>
  );
}

export default About;
