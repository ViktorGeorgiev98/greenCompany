import { Outlet } from "react-router";
import styled from "styled-components";

const StyledAppLayout = styled.div``;

const Main = styled.main``;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <header>dsadsadasdsa</header>
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
