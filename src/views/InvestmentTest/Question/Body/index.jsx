import React from "react";
import { BodyContainer, EachQuestion, OptionWrapper, Option } from "./styled";

export default ({
  currentQuestionNum,
  questionData,
  goToNextQuestion,
  selectOption,
  answers,
}) => {
  const { question, questionType, options } = questionData;

  return (
    <BodyContainer>
      <EachQuestion>{question}</EachQuestion>
      <OptionWrapper>
        {options.map((option) => {
          const { optionAnswer, score } = option;
          const isSelected =
            (answers[currentQuestionNum] || {}).score === score;

          return (
            <Option
              isSelected={isSelected}
              onClick={() => {
                selectOption(currentQuestionNum, questionType, score);
                goToNextQuestion();
              }}
            >
              {optionAnswer}
            </Option>
          );
        })}
      </OptionWrapper>
    </BodyContainer>
  );
};
