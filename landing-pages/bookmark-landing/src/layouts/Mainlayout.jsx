import { Outlet } from "react-router-dom";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
export const Mainlayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
