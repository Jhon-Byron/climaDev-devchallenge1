import styled from "styled-components";

import BackgroundImageContainer from "../src/components/backgroundImageContainer/backgroundImageContainer";
import Logo from "../src/components/logo/logo";
import Input from "../src/components/form/input/input";

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.white};
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`

export default function HomePage() {
  return (
    <BackgroundImageContainer>
      <StyledDiv>
        <Logo showImage type='vertical' />
        <Input placeholder='Digite a cidade' />
      </StyledDiv>
    </BackgroundImageContainer>
  );
}
