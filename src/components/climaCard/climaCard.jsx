import styled from "styled-components";

const StyledClimaCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 400px;
  padding: 15px;
  box-sizing: border-box;
`

const Title = styled.h6`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin: 0;
  padding: 0;
`

const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const BasicInfoImg = styled.img`
  width: 100px;
  height: 100px;
`

const BasicInfoText = styled.div`
  text-align: center;
  flex: 1;
`

const InfoLine = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding:  20px;
`

const InfoTemperature = styled.span`
  font-weight: 700;
  ${props => props.blue && 'color: #00C9F5'};
  ${props => props.red && 'color: #FF0000'}

`

export default function ClimaCard() {
  return ( 
    <StyledClimaCard>
      <Title>Clima Card</Title>
      <BasicInfo>
        <BasicInfoImg src="http://openweathermap.org/img/wn/11d@2x.png" />
        <BasicInfoText>Algumas nuvens</BasicInfoText>
      </BasicInfo>
      <InfoLine>
        Temperatura<InfoTemperature>29℃</InfoTemperature>
      </InfoLine>
    </StyledClimaCard>
  )
 }
