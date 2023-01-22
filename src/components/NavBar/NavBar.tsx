import styled from 'styled-components'

import { TbLetterE } from 'react-icons/tb'


import NavLinks from './NavLinks'


const NavBar = () => {
	
	return (
		<Container>
			<Logo />
			<NavLinks />
			{/* <div style={{ background: 'blue', width: 50, height: 50, margin: '15px auto' }}></div> */}
		</Container>
	)
}

const Logo = () => {
	return (
		<LogoContainer>
			<TbLetterE size={60} style={{ rotate: '70deg' }} />
			<LogoName>Skidslip</LogoName>
		</LogoContainer>
	)
}

const LogoContainer = styled.div`
	width: 90px;
	height: 90px;

  display: flex;
  justify-content: center;
	align-items: center;
  flex-direction: column;

`

const LogoName = styled.label`
	font-family: 'Montserrat', sans-serif;
`

const Container = styled.div`

	position: fixed;

	height: 50%;
	width: 90px;

	left: -77px;
	top: 25%;

	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;

	background: #83b1cfaa;

	overflow: hidden;

	transition: 0.3s;

	&:hover {
		left: 0;
		top: 1%;

		height: 98%;
	}

`

export default NavBar