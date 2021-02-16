import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { MainContainer } from "./styled";

export default ({ history }) => {
  return (
    <MainContainer>
      <Header />
      <Body />
      <Footer history={history} />
    </MainContainer>
  );
};
