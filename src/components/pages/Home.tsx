import { Title, CardContainer, Card } from '../common'
import { pageTransitions } from '../transitions'

const Home = () => {
  return (
    <CardContainer
      initial='initial'
      animate='in'
      exit='out'
      variants={pageTransitions}>        
      <Card>
        <Title>
          HOME
        </Title>
      </Card>
    </CardContainer>
  )
}

export default Home
