import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
`;

export const EachQuestion = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? "#262f47" : "")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 110px;
  font-size: 20px;
  margin-bottom: 40px;
  border: 1px solid #fff;
  border-radius: 15px;
  color: #fff;

  &:hover {
    background-color: #262f47;
  }
  &:active {
    background-color: #383d4a;
  }
`;
