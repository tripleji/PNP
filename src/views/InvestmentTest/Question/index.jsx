import React, { useState, useCallback } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { QuestionContainer } from "./styled";

const questionDataList = [
  {
    question: "질문1",
    questionType: "energy",
    options: [
      {
        optionAnswer: "가가",
        score: 1,
      },
      {
        optionAnswer: "나나",
        score: -1,
      },
    ],
  },
  {
    question: "질문2",
    questionType: "energy",
    options: [
      {
        optionAnswer: "다다",
        score: 1,
      },
      {
        optionAnswer: "라라",
        score: -1,
      },
    ],
  },
  {
    question: "질문3",
    questionType: "energy",
    options: [
      {
        optionAnswer: "마마",
        score: 1,
      },
      {
        optionAnswer: "바바",
        score: -1,
      },
    ],
  },
  {
    question: "질문4",
    questionType: "recognition",
    options: [
      {
        optionAnswer: "사사",
        score: 1,
      },
      {
        optionAnswer: "아아",
        score: -1,
      },
    ],
  },
  {
    question: "질문5",
    questionType: "recognition",
    options: [
      {
        optionAnswer: "자자",
        score: 1,
      },
      {
        optionAnswer: "차차",
        score: -1,
      },
    ],
  },
  {
    question: "질문6",
    questionType: "recognition",
    options: [
      {
        optionAnswer: "차차",
        score: 1,
      },
      {
        optionAnswer: "카카",
        score: -1,
      },
    ],
  },
  {
    question: "질문7",
    questionType: "judgement",
    options: [
      {
        optionAnswer: "aa",
        score: 1,
      },
      {
        optionAnswer: "bb",
        score: -1,
      },
    ],
  },
  {
    question: "질문8",
    questionType: "judgement",
    options: [
      {
        optionAnswer: "cc",
        score: 1,
      },
      {
        optionAnswer: "dd",
        score: -1,
      },
    ],
  },
  {
    question: "질문9",
    questionType: "judgement",
    options: [
      {
        optionAnswer: "ee",
        score: 1,
      },
      {
        optionAnswer: "ff",
        score: -1,
      },
    ],
  },
  {
    question: "질문10",
    questionType: "lifestyle",
    options: [
      {
        optionAnswer: "gg",
        score: 1,
      },
      {
        optionAnswer: "hh",
        score: -1,
      },
    ],
  },
  {
    question: "질문11",
    questionType: "lifestyle",
    options: [
      {
        optionAnswer: "ii",
        srcoe: 1,
      },
      {
        optionAnswer: "jj",
        score: -1,
      },
    ],
  },
  {
    question: "질문12",
    questionType: "lifestyle",
    options: [
      {
        optionAnswer: "kk",
        score: 1,
      },
      {
        optionAnswer: "ll",
        score: -1,
      },
    ],
  },
];

const ENERGY = "energy";
const LIFE_STYLE = "lifestyle";
const RECOGNITION = "recognition";
const JUDGEMENT = "judgement";

const QUESTION_TYPE = {
  [ENERGY]: ENERGY,
  [LIFE_STYLE]: LIFE_STYLE,
  [RECOGNITION]: RECOGNITION,
  [JUDGEMENT]: JUDGEMENT,
};

export default ({ history }) => {
  const QUESTION_COUNT = questionDataList.length;
  const [questionNum, setQuestionNum] = useState(0);
  const [answers, setAnswers] = useState([]);
  /*
    Answer
   {
     qustionType,
     score
   }
  */

  const goToNextQuestion = useCallback(() => {
    if (questionNum + 1 >= QUESTION_COUNT) {
      history.push("/result");
    } else {
      setQuestionNum(questionNum + 1);
    }
  }, [questionNum, setQuestionNum]);

  const goToPreviousQuestion = useCallback(() => {
    if (questionNum < 1) {
      history.goBack();
    } else {
      setQuestionNum(questionNum - 1);
    }
  }, [questionNum, setQuestionNum]);

  const selectOption = useCallback((questionNum, questionType, score) => {
    answers[questionNum] = { questionType, score };
    setAnswers([...answers]);
    // 배열의 주소값이 바뀌지않으면 리액트가 인식x => 렌더링 nono 스프레드연산자를
    //배열안에 사용함으로써 원래 answers값이랑 같으나 주소값 변경
  }, []);

  // 3문제씩 E&I, S&N, T&F, J&P
  // const [energyScore, setEnergyScore] = useState(0);
  // const [recognitionScore, setRecognitionScore] = useState(0);
  // const [judgementScore, setJudgementScore] = useState(0);
  // const [lifestyleScore, setLifeStyleScore] = useState(0);

  // const calculateScore = useCallback((questionType, score) => {
  //   if (questionType === QUESTION_TYPE['energy']) {
  //     setEnergyScore(energyScore + score);
  //   } else if (questionType === QUESTION_TYPE['recognition']) {
  //     setRecognitionScore(recognitionScore + score);
  //   } else if (questionType === QUESTION_TYPE['judgement']) {
  //     setJudgementScore(judgementScore + score);
  //   } else {
  //     setLifeStyleScore(lifestyleScore + score)
  //   }
  // });

  // 문제를 클릭했을때 점수 저장! 첫번째는 1점, 두번째는 -1점
  // OptionType별로 3문제씩해서 0점보다 높으면 > E&S&T&J
  // 0점보다 낮으면 I&N&F&P
  // 타입별 3문제마다 문자열 한글자씩 리턴할거고
  // 마지막 버튼을 클리하면 로딩창이 뜨고 그리턴한 4문자열을 합쳐서 리턴해서
  // 결과쪽 객체 키값과 같으면 그 키의 밸류갑을 마지막페이지에 자동으로 넣어줌

  return (
    <QuestionContainer>
      <Header />
      <Body
        currentQuestionNum={questionNum}
        questionData={questionDataList[questionNum]}
        goToNextQuestion={goToNextQuestion}
        selectOption={selectOption}
        answers={answers}
      />
      <Footer
        history={history}
        currentPage={questionNum + 1}
        pageTotal={QUESTION_COUNT}
        goToNextQuestion={goToNextQuestion}
        goToPreviousQuestion={goToPreviousQuestion}
      />
    </QuestionContainer>
  );
};
