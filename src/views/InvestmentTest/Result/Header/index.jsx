import React from "react";
import LogoImage from "../../../../resources/img/logoImage.png";
import { HeaderContainer, HeaderLogoImage, HeaderLogoName } from "./styled";

export default () => {
  return (
    <HeaderContainer>
      <HeaderLogoImage src={LogoImage} />
      <HeaderLogoName>The Rich</HeaderLogoName>
    </HeaderContainer>
  );
};
