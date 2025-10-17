import { Outlet } from "react-router-dom";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { ContactUs } from "../components/ContactUs";
import { Footer } from "../components/Footer";
export const Mainlayout = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Outlet />
      </Container>
      <ContactUs />
      <Footer />
    </div>
  );
};
