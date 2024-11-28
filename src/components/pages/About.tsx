import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { Title, Title2, Sep, Text, Card, CardContainer, ImageWrapper } from '../common'
import { pageTransitions } from '../transitions'

const About = () => {
  const navigate = useNavigate();

  return (
    <CardContainer
      initial='initial'
      animate='in'
      exit='out'
      variants={pageTransitions}>
      <Card>
        <Title>Om oss<Sep /></Title>
        <ImageWrapper src='skiier.jpg' />
        <Title2>Vår bakgrund inom skidåkning</Title2>
        <Text>
          Redan vid ung ålder började vi åka skidor och det tog inte lång tid
          tills vi började tävla. I takt med att man växte upp på skidorna blev
          man allt mer beskyddande över dem och efter ett tag ville man också
          börja ta hand om och slipa sina skidor på egen hand. Så i resterna år
          slipade vi våra skidor inför både träning och tävling och såg till att
          de alltid var i bra skick. Nu när vi själva har slutat tävlat bestämde
          vi oss för att slipa andras skidor istället och det har vi därefter
          gjort sedan 2017.
        </Text>
        <Title2>Kontakt</Title2>
        <Text>
          Ifall ni är intresserade av att fixa era skidor kan ni höra av er till ett av våra nummer som
          finns i under <a onClick={() => navigate('/contact')} href='#'>kontakt</a>. Ifall ni har specifika önskemål angående gradtal på kanterna är det
          bara att säga till, annars behåller vi samma gradtal som skidorna hade när vi fick dem.
        </Text>
      </Card>
      <Card>
        <Title>Priser</Title>
        <PriceContainer>
          <div>
            <Title2>Slipa</Title2>
            <Text>250 kr</Text>
          </div>
          <div>
            <Title2>Valla</Title2>
            <Text>250 kr</Text>
          </div>
          <div>
            <Title2>Kombination</Title2>
            <Text>400 kr</Text>
          </div>
        </PriceContainer>
        <Title2>Annat</Title2>
        <Text>
          Vi klarar också av annat fixande som exempelvis mindre skador i
          belagen, hör er till oss direkt isåfall.
        </Text>
      </Card>
    </CardContainer>
  )
}


const PriceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`


export default About
