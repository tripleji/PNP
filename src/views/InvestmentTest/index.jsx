import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";
import Question from "./Question";
import Result from "./Result";
import { InvestmentTestContainer } from "./styled";

export default () => {
  return (
    <InvestmentTestContainer>
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/question" component={Question} />
        <Route path="/result" component={Result} />
      </BrowserRouter>
    </InvestmentTestContainer>
  );
};
