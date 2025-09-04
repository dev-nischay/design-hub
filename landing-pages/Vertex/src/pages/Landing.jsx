import BaseLayout from "../components/BaseLayout";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
export default () => {
  return (
    <BaseLayout>
      <Navbar />
      <Container>
        <Hero />
      </Container>
    </BaseLayout>
  );
};
