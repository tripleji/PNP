import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { ResultContainer } from "./styled";

// MBTI 16개 유형 데이터
const resultDataList = {
  ISTJ: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  ISFJ: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  INFJ: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  INTJ: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  ISTP: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  ISFP: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  INFP: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  INTP: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  ESTP: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  ESFP: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  ENFP: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  ENTP: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  ESTJ: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  ESFJ: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  ENFJ: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
  ENTJ: {
    mbtiImageUrl: "",
    mbtiDescription: "",
    investorImageUrl: "",
    investorQuote: "",
    investorPortfolioLink: "",
  },
};

export default ({ history }) => {
  return (
    <ResultContainer>
      <Header />
      <Body />
      <Footer history={history} />
    </ResultContainer>
  );
};
