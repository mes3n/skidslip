import { Title, Title2, Sep, Text, Card, CardContainer } from './Styles'

const About = () => {
  return (
    <CardContainer>
      <Card>
        <Title>Skidslip<Sep /></Title>
        <Title2>Vår historia</Title2>
        <Text>
          Redan vid ung ålder började vi åka skidor och det tog inte lång tid tills vi började tävla.
          I takt med att man växte upp på skidorna blev man allt mer beskyddande över dem och efter ett
          tag var man också tvungen att börja ta hand om dem själv. I tre år slipade vi våra skidor inför
          både träning och tävling. När man inte längre tävlade fanns det istället stora luckor med tid.
          Därmed startade vi det här, och nu har vi hållt på i fem säsonger.
        </Text>
        <Title2>Priser</Title2>
        <Text>
          Slipa - 250 kr
        </Text>
        <Text>
          Valla - 250 kr
        </Text>
        <Text>
          Slipa och valla - 400 kr
        </Text>
        <Text>
          Annat fixande bestämms utifrån situation
        </Text>
        <Title2>Kontakt</Title2>
        <Text>
          Ifall ni är intreserade av att fixa era skidor kan ni höra av er till ett av våra nummer som 
          finns i kontaktfliken. Ifall ni har specifika önskemål angående gradtal på kantarna är det 
          bara att säga till, annars behåller vi samma gradtal som innan.
        </Text>
      </Card>
      <Card>
        <Title>README<Sep /></Title>
        <Title2>Utvecklare</Title2>
        <Text>
          Hemsidan är skriven i React TypeScript av mig (Markus) och jag har under de senare åren plockat 
          upp en hobby för att programmera. Ifall ni finner behov av en hemsida får ni supergärna hojta till 
          så kan jag fixa något liknande till det här. Dessutom får ni jättegärna höra av er ifall ni har förslag 
          på hur jag ska förbättra den här hemsidan, källkoden finns på min GitHub som ni hittar i kontaktfliken.
        </Text>
        <Title2>Annat</Title2>
        <Text>
          Jag programmarar dessutom i Python, C, C++, Dart, (TypeScript) och Rust ifall att ni även råkar finna er i 
          behov av en backend eller fullstack utvecklare.
        </Text>

        
      </Card>
    </CardContainer>
  )
}



export default About