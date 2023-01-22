import { BrowserRouter, Routes, Route } from 'react-router-dom'

import styled from 'styled-components'

import NavBar from './NavBar/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


const Pages = () => {

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<></>} />
          </Route>
        </Routes>
        <NavBar />
      </Container>
    </BrowserRouter>
  )
}

const Container = styled.div`

  position: fixed;

  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  background: #eee;

  overflow: scroll;

`

export default Pages
