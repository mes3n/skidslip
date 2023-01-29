import { useLocation } from 'react-router'

import styled from 'styled-components'

import NavLink from './NavLink'


const NavLinks = () => {

  const location = useLocation();

  return (
    <Container>
      <NavLink icon='skiier' path='' active={location.pathname === '/'}/>
      <NavLink icon='about' path='about' active={location.pathname === '/about'}/>
      <NavLink icon='contact' path='contact' active={location.pathname === '/contact'}/>
    </Container>
  )
}

const Container = styled.div`

  height: calc(100% - 160px);

  display: flex;
  justify-content: center;
  flex-direction: column;

`

export default NavLinks
