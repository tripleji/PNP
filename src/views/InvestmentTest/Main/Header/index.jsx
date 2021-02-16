import React from "react";
import LogoImage from "../../../../resources/img/logoImage.png";
import { HeaderContainer, HeaderLogoImage, HeaderLogoName } from "./styled";

const strings = {
  en: {
    companyName: "The Rich",
  },
  ko: {
    companyName: "더리치",
  },
};

export default () => {
  return (
    <HeaderContainer>
      <HeaderLogoImage src={LogoImage} />
      <HeaderLogoName>{strings.en.companyName}</HeaderLogoName>
    </HeaderContainer>
  );
};
