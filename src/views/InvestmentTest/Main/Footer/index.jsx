import React from "react";
import { copyToClipboard } from "../../../../util";
import {
  FooterContainer,
  StartButton,
  ShareWrapper,
  ShareTitle,
  ShareButton,
} from "./styled";

const strings = {
  en: {
    startButtonName: "Start",
    shareFriendButtonName: "Share to Friends",
    linkCopyButtonName: "Link Copy",
  },
  ko: {
    startButtonName: "시작하기",
    shareFriendButtonName: "친구에게 공유하기",
    linkCopyButtonName: "링크복사",
  },
};

export default ({ history }) => {
  return (
    <FooterContainer>
      <StartButton
        onClick={() => {
          history.push("/question");
        }}
      >
        {strings.ko.startButtonName}
      </StartButton>
      <ShareWrapper
        onClick={() => {
          copyToClipboard("www.therich.io");
        }}
      >
        <ShareTitle>{strings.ko.shareFriendButtonName}</ShareTitle>
        <ShareButton>{strings.ko.linkCopyButtonName}</ShareButton>
      </ShareWrapper>
    </FooterContainer>
  );
};
