import React from "react";
import ChartCharacterImage from "../../../../resources/img/chartCharacterImage.png";
import {
  BodyContainer,
  GetAttentionWrapper,
  GetAttentionFirst,
  GetAttentionSecond,
  ChartImage,
} from "./styled";

const strings = {
  en: {
    mainTitle: "wanna be a billionaire?",
    subTitle: "Let's check this out!",
  },
  ko: {
    mainTitle: "억만장자가 되고 싶나?",
    subTitle: "투자 성향을 확인해보자!",
  },
};

export default () => {
  return (
    <BodyContainer>
      <GetAttentionWrapper>
        <GetAttentionFirst>{strings.ko.mainTitle}</GetAttentionFirst>
        <GetAttentionSecond>{strings.ko.subTitle}</GetAttentionSecond>
      </GetAttentionWrapper>
      <ChartImage src={ChartCharacterImage} />
    </BodyContainer>
  );
};
