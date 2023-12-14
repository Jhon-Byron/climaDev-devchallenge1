import styled from "styled-components";

import Logo from "../logo/logo";
import Container from "../layouts/container/container";

const StyledNavbar = styled.div`
  height: 105px;
  display: flex;
  align-items: center;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Container>
        <Logo />
      </Container>
    </StyledNavbar>
  );
}
