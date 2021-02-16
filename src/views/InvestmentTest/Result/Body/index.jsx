import React from "react";
import { BodyContainer, ResultImage, ResultExplanation } from "./styled";

export default () => {
  return (
    <BodyContainer>
      <ResultImage>주식 성향 결과 이미지</ResultImage>
      <ResultExplanation>주식 성향 설명</ResultExplanation>
    </BodyContainer>
  );
};
