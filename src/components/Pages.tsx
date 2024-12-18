import { Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

import NavBar from './navbar/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


const Pages = () => {

  let location = useLocation()

  return (
    <Container>
      <Background />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<></>} />
        </Routes>
      </AnimatePresence>
      <NavBar />
    </Container>
  )
}

const Container = styled.div`
  position: fixed;

  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  overflow: scroll;
`

const Background = styled.div`
  position: fixed;

  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  overflow: scroll;
  background-image: url('powder.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(8px);
`

export default Pages
