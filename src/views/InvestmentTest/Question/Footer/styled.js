import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #131722;
`;

export const NextButton = styled.button`
  height: 40px;
  width: 80px;
  margin-right: 10px;
  font-size: 25px;
  color: #fff;
  border-radius: 15px;
  background-color: orange;
  cursor: pointer;
`;

export const PageCount = styled.div`
  font-size: 25px;
  font-weight: 400;
  color: #fff;
`;

export const PreviousButton = styled.button`
  height: 40px;
  width: 80px;
  margin-left: 10px;
  font-size: 25px;
  color: #fff;
  border-radius: 15px;
  background-color: orange;
  cursor: pointer;
`;
