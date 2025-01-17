import { Outlet } from "react-router";
import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";

const StyledAppLayout = styled.div``;

const Main = styled.main``;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  );
};

export default AppLayout;
