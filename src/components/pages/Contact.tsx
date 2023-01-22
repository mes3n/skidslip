import { Title, Title2, Sep, Text, Card, CardContainer } from './Styles'

const Contact = () => {
  return (
    <CardContainer>
      <Card>
        <Title>Markus Svedenheim<Sep /></Title>
        <Title2>Telefon</Title2>
        <Text>076-070 40 29</Text>
        <Title2>Email</Title2>
        <Text>markus@svedenheim.se</Text>
        <Text>markus.svedenheim@gmail.com</Text>
        <Title2>GitHub</Title2>
        <Text>källkod: https://github.com/mes3n/skidslip</Text>
        <Text>användarnamn: mes3n</Text>

      </Card>
      <Card>
        <Title>Elsa Svedenheim<Sep /></Title>
        <Title2>Telefon</Title2>
        <Text>079-313 79 09</Text>
        <Title2>Email</Title2>
        <Text>elsa.svedenheim@gmail.com</Text>
      </Card>
    </CardContainer>
  )
}


export default Contact