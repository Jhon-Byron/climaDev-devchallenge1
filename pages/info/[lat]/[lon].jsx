import styled from "styled-components";

import Navbar from "../../../src/components/navbar/navbar";

const Body = styled.div`
  background-color: ${props => props.theme.colors.grey};
  min-height: 100vh;
`;

export default function InfoPage() {
  return (
    <>
      <Navbar />
      <Body>
        Conteudo
      </Body>
    </>
  );
}
