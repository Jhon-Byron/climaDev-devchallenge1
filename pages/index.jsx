import styled from "styled-components";

import BackgroundImageContainer from "../src/components/backgroundImageContainer";

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.white};
  min-width: 500px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`

export default function HomePage() {
  return (
    <BackgroundImageContainer>
      <StyledDiv>
        HomePage
      </StyledDiv>
    </BackgroundImageContainer>
  );
}
