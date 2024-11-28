import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'

import { Title, Title2, Sep, Text, Card, CardContainer } from '../common'
import { pageTransitions } from '../transitions'

const Contact = () => {

  const Icon = (icon: string) => {
    if (icon === 'phone') {
      return <HiOutlinePhone size={32} style={{ marginRight: '12px' }} />
    } else if (icon === 'mail') {
      return <HiOutlineMail size={32} style={{ marginRight: '12px' }} />
    } else if (icon === 'github') {
      return <FiGithub size={32} style={{ marginRight: '12px' }} />
    }
  }

  return (
    <CardContainer
      initial='initial'
      animate='in'
      exit='out'
      variants={pageTransitions}>
      <Card>
        <Title>Markus Svedenheim<Sep /></Title>
        <Title2>{Icon('phone')}Telefon</Title2>
        <Text>076-070 40 29</Text>
        <Title2>{Icon('mail')}Email</Title2>
        <Text>markus@svedenheim.se</Text>
        {/* <Text>markus.svedenheim@gmail.com</Text> */}
        <Title2>{Icon('github')}GitHub</Title2>
        <Text>källkod - <a href='https://github.com/mes3n/skidslip'>mes3n/skidslip</a></Text>
      </Card>
      <Card>
        <Title>Elsa Svedenheim<Sep /></Title>
        {/* <ImageWrapper src='markus.jpeg' /> */}
        <Title2>{Icon('phone')}Telefon</Title2>
        <Text>079-313 79 09</Text>
        <Title2>{Icon('mail')}Email</Title2>
        <Text>elsa.svedenheim@gmail.com</Text>
      </Card>
    </CardContainer>
  )
}


export default Contact
