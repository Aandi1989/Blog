import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../shared/components/index";
import * as Styled from "./layout.style";

export const Layout = () => {
  return (
    <Styled.Layout>
      <Header />
      <Styled.Main>
        <Outlet />
      </Styled.Main>
      <Footer />
    </Styled.Layout>
  );
};

export default Layout;
