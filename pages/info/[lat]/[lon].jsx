import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";

import Navbar from "../../../src/components/navbar/navbar";
import Container from "../../../src/components/layouts/container/container";
import ClimaCard from "../../../src/components/climaCard/climaCard";

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

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`

export default function InfoPage() {
  const [currentInfo, setCurrentInfo] = useState()
  const [futureInfo, setFutureInfo] = useState()
  const router = useRouter()
  const { lat, lon } = router.query

  const fetchCurrentInfo = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}&units=metric&lang=pt_br`)
    const json = await response.json()
    setCurrentInfo(json)
  }

  const fetchFutureInfo = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}&units=metric&lang=pt_br`)
    const json = await response.json()
    setFutureInfo(json)
  }

  useEffect(() => {
    if ( lat, lon) {
      fetchCurrentInfo()
      fetchFutureInfo()
    }
  }, [lat, lon])


  const formatTemperature = (temperature) => {
    return Math.round(temperature);
  };  

  return (
    <>
      <Navbar />
      <Body>
        <Container>
          <Content>
            <Text>previsão do tempo para</Text>
            <CityName>{currentInfo?.name}, {currentInfo?.sys.country}</CityName>
          </Content>
          <InfoContainer>
            <ClimaCard
              title="Agora"
              icon={currentInfo?.weather[0].icon}
              description={currentInfo?.weather[0].description}
              temp={formatTemperature(currentInfo?.main.temp)}
              feels={formatTemperature(currentInfo?.main.feels_like)}
              min={formatTemperature(currentInfo?.main.temp_min)}
              max={formatTemperature(currentInfo?.main.temp_max)}
            />
             <ClimaCard
              title="Próximas 3 horas"
              icon={futureInfo?.list[0].weather[0].icon}
              description={futureInfo?.list[0].weather[0].description}
              temp={formatTemperature(futureInfo?.list[0].main.temp)}
              feels={formatTemperature(futureInfo?.list[0].main.feels_like)}
              min={formatTemperature(futureInfo?.list[0].main.temp_min)}
              max={formatTemperature(futureInfo?.list[0].main.temp_max)}
            /> 
            <ClimaCard
              title="Próximas 6 horas"
              icon={futureInfo?.list[1].weather[0].icon}
              description={futureInfo?.list[1].weather[0].description}
              temp={formatTemperature(futureInfo?.list[1].main.temp)}
              feels={formatTemperature(futureInfo?.list[1].main.feels_like)}
              min={formatTemperature(futureInfo?.list[1].main.temp_min)}
              max={formatTemperature(futureInfo?.list[1].main.temp_max)}
            /> 
          </InfoContainer>
        </Container>
      </Body>
    </>
  );
}
