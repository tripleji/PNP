import React from "react";
import {
  FooterContainer,
  NextButton,
  PageCount,
  PreviousButton,
} from "./styled";

const strings = {
  en: {
    nextButtonName: "Next",
    previousButtonName: "Previous",
  },
  ko: {
    nextButtonName: "다음",
    previousButtonName: "이전",
  },
};

export default ({
  currentPage,
  pageTotal,
  goToNextQuestion,
  goToPreviousQuestion,
}) => {
  return (
    <FooterContainer>
      <PreviousButton onClick={goToPreviousQuestion}>
        {strings.ko.previousButtonName}
      </PreviousButton>
      <PageCount>
        {currentPage} / {pageTotal}
      </PageCount>
      <NextButton onClick={goToNextQuestion}>
        {strings.ko.nextButtonName}
      </NextButton>
    </FooterContainer>
  );
};
