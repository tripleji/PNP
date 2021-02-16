/*
  input: [Answer]
  Answer : {
    score: Number,
    questionType: String,
  }
  
  output: MBTI Type
*/

const MBTI_TYPE = {
  [ISTJ]: "ISTJ",
  [ISFJ]: "ISFJ",
  [INFJ]: "INFJ",
  [INTJ]: "INTJ",
  [ISTP]: "ISTP",
  [ISFP]: "ISFP",
  [INFP]: "INFP",
  [INTP]: "INTP",
  [ESTP]: "ESTP",
  [ESFP]: "ESFP",
  [ENFP]: "ENFP",
  [ENTP]: "ENTP",
  [ESTJ]: "ESTJ",
  [ESFJ]: "ESFJ",
  [ENFJ]: "ENFJ",
  [ENTJ]: "ENTJ",
};

export const calculateScore = (answers = []) => {
  let energyScore = 0;
  let recognitionScore = 0;
  let judgementScore = 0;
  let lifestyleScore = 0;

  answers.forEach((answer) => {
    if (answer.questionType === QUESTTYPE["energy"]) {
      energyScore += answer.score;
    }
  });

  const energyChar = energyScore > 0 ? "E" : "I";
  const recognitionChar = recognitionScore > 0 ? "S" : "N";
  const judgementChar = judgementScore > 0 ? "T" : "F";
  const lifestyleChar = lifestyleScore > 0 ? "J" : "P";

  return MBTI_TYPE[
    `${energyChar}${recognitionChar}${judgementChar}${lifestyleChar}`
  ];
};
