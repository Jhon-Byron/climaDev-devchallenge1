import styled from "styled-components";

import Navbar from "../../../src/components/navbar/navbar";
import Container from "../../../src/components/layouts/container/container";

const Body = styled.div`
  background-color: ${props => props.theme.colors.grey};
  min-height: 100vh;
`;

export default function InfoPage() {
  return (
    <>
      <Navbar />
      <Body>
        <Container>
          conteudo
        </Container>
      </Body>
    </>
  );
}
