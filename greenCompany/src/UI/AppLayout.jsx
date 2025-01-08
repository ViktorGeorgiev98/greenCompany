import { Outlet } from "react-router";
import styled from "styled-components";
import NavBar from "./NavBar";

const StyledAppLayout = styled.div``;

const Main = styled.main``;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
