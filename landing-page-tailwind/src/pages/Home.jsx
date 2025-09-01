import Layout from "../components/Layout";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import image from "../assets/hero-image.webp";
export default () => {
  return (
    <Layout>
      <Container>
        <Navbar />
        <Hero />
        <img src={image} alt="" />
      </Container>
    </Layout>
  );
};
