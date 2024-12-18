import { CardContainer, Card, Title, Sep, ImageWrapper, Title2, Text } from '../common'
import { pageTransitions } from '../transitions'

const Home = () => {
  return (
    <CardContainer
      initial='initial'
      animate='in'
      exit='out'
      variants={pageTransitions}>        
      <Card>
        <Title>Skidslip<Sep/></Title>
        <ImageWrapper src='slipning.jpeg'></ImageWrapper>
        <Title2>Varför ska skidor slipas</Title2>
        <Text>
          Förutom att skidorna såklart glider snabbare och fäster bättre i backen 
          finns det också andra fördelar med att slipa. En stor fördel av att fixa
          sina skidor är att de helt enkelt mår bättre och klarar sig bättre till
          nästa säsong. Genom att regelbundet valla in sina skidor ser man främst 
          till att belaget inte torkar ut, detta syns då det börjar få gråa kanter,
          fördelen blir då att glidet blir bättre och håller under en längre tid. 
          Fördelen med att slipa sina skidor är att man kan fixa hack och skador 
          i kanterna i ett tidigare stadie. I helhet är underhållningen av sina
          skidor en viktigt del ifall man vill se till att de ska åka bra 
          och hålla så länge som möjligt. 
        </Text>
        <Title2>Vad innebär det att fixa skidorna</Title2>
        <Text>
          Det vi gör att vi helt enkelt slipar era skidor, för hand såklart. 
          Första steget är kolla belag och underkant för skador eller rost som kan
          tas bort med hjälp av bryne respektive gummibryne. Efter det ska kantvinkeln
          bestämmas varpå slipning av kanterna kan påbörja. När alla kanterna är vassa
          påbörjas arbetet med belaget. Detta inleds med att borsta belagen varpå de 
          sedan vallas in. Vallen sitter på i ett tag innan den sedan kan siklas och
          borstas in i belaget. Sen är skidorna redo att användas igen!
        </Text>
      </Card>
      <Card>
        <Title>Recensioner<Sep /></Title>
        <Title2>Återkoppling</Title2>
        <Text>
          Hemsidan är fortfarande i ett av sina tidigare stadier och allting
          är ännu inte fixat.
        </Text>
        <br />
        <Text> 
          Men tveka inte på att höra av er med recensioner eller återkoppling
          på vårat jobb!
        </Text>
      </Card>
    </CardContainer>
  )
}

export default Home
