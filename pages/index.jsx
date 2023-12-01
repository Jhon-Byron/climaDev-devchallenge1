import styled from "styled-components";

import BackgroundImageContainer from "../src/components/backgroundImageContainer";

const StyledDiv = styled.div`
  background-color: red;
`;

export default function homePage() {
  return (
    <BackgroundImageContainer>
      <StyledDiv>
        HomePage
      </StyledDiv>
    </BackgroundImageContainer>
  );
}
