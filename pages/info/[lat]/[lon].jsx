import styled from "styled-components";

import Navbar from "../../../src/components/navbar/navbar";
import Container from "../../../src/components/layouts/container/container";

const Body = styled.div`
  background-color: ${props => props.theme.colors.grey};
  min-height: 100vh;
`

const Content = styled.div`
  padding: 80px 0;
`

const Text = styled.p`
  font-size: 20px;
  margin: 0;
  padding: 0;
`

const CityName = styled.h2`
  font-size: 60px;
  margin: 0;
  padding: 0;
`

export default function InfoPage() {
  return (
    <>
      <Navbar />
      <Body>
        <Container>
          <Content>
            <Text>previsão do tempo para</Text>
            <CityName>Caxias Do Sul, RS, BR</CityName>
          </Content>
        </Container>
      </Body>
    </>
  );
}
