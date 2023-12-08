import styled from "styled-components";

import BackgroundImageContainer from "../src/components/backgroundImageContainer/backgroundImageContainer";
import Logo from "../src/components/logo/logo";
import InputWithSuggestions from "../src/components/form/inputWithSuggestions/inputWithSuggestions";

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`;

const StyledInput = styled(InputWithSuggestions)`
  width: 100%;
  box-sizing: border-box;
`;

const InputContainer = styled.div`
  @media (min-width: 750px) {
    width: 150%;
  }

  z-index: 10;
`;

export default function HomePage() {
  return (
    <BackgroundImageContainer>
      <StyledDiv>
        <Logo showImage type="vertical" />
        <InputContainer>
          <StyledInput placeholder="Digite a cidade" />
        </InputContainer>
      </StyledDiv>
    </BackgroundImageContainer>
  );
}
