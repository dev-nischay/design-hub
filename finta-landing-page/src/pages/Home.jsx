import Container from "../components/container";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import image from "../assets/hero.png";

export default () => {
  return (
    <Layout>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className="hero-image-container">
        <img className="hero-image" src={image} alt="" />
      </div>
    </Layout>
  );
};
