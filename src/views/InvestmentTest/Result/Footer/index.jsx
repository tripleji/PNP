import React from "react";
import {
  FooterContainer,
  InvestorWrapper,
  InvestorImage,
  InvestorPortfolio,
  LinksWrapper,
  LinkCopy,
  KakaoShare,
  RetryTest,
} from "./styled";

export default ({ history }) => {
  return (
    <FooterContainer>
      <InvestorWrapper>
        <InvestorImage>성향에 맞는 투자자 사진</InvestorImage>
        <InvestorPortfolio>포트폴리오 보기</InvestorPortfolio>
      </InvestorWrapper>
      <LinksWrapper>
        <LinkCopy>링크복사</LinkCopy>
        <KakaoShare>카카오톡 공유하기</KakaoShare>
      </LinksWrapper>
      <RetryTest
        onClick={() => {
          history.push("/");
        }}
      >
        다시하기
      </RetryTest>
    </FooterContainer>
  );
};
