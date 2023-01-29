import styled, { css } from 'styled-components'

import { motion } from 'framer-motion'


export const Title = styled.h1`

  margin: 24px;
  margin-bottom: 0;

  color: #1c648e;
  font-size: 40px;

  @media screen and (max-width: 800px) {
    font-size: 32px;
  }

`

export const Sep = styled.div`
  margin: 0;
  padding: 0;

  height: 4px;

  border-radius: 2px;

  background: #1c648e;
`

export const Title2 = styled.h1`
  
  margin: 0;
  margin-left: 32px;
  margin-top: 16px;
  margin-bottom: 8px;

  color: #4783a6;
  font-size: 32px;

  display: flex;
  align-items: center;
  
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }

`

export const Text = styled.p`

  margin: 0;
  margin-left: 32px;
  margin-right: 16px;

  line-height: 24px;

  color: #110022;
  font-size: 16px;

  @media screen and (max-width: 800px) {
    line-height: 20px;
    font-size: 12px;
  }

`

export const Card = styled.div`
  width: 900px;

  margin-right: 35px;
  margin-left: 35px;

  margin-bottom: 4vh;
  padding-bottom: 2rem;

  background: #eee;
  border-radius: 20px;

  border-left: 10px solid #1c648e;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  
  @media screen and (max-width: 800px) {
    margin: 0;
    margin-bottom: 4vh;
    width: 80%;
  }
`

export const CardContainer = styled(motion.div)`

  position: absolute;
  width: 100%;

  left: 0;
  top: 0;

  display: flex;
  justify-content: center;

  padding-top: 4vh;

  flex-wrap: wrap;
`


const ImageContainer = styled.div<{ size: string }>`

  float: right;
  width: 40%;

  margin: 16px;
  margin-right: 32px;

  display: flex;
  align-items: center;

  ${props => props.size === 'full' && css`
    float: none;
    width: 90%;

    margin-left: 32px;
    margin-right: auto;
  `}

  @media screen and (max-width: 800px) {
    margin-left: auto;
    float: none;
    width: 60%;

    ${props => props.size === 'full' && css`
      width: 80%;
      margin-right: auto;
  `}
  }
`
interface ImageProps {
  src: string,
  size?: string
}

export const ImageWrapper: React.FC<ImageProps> = ({ src, size }) => {

  return (
    <ImageContainer size={size || ''}>
      <img src={src} width='100%' alt='' style={{
        border: '3px solid #1c648e',
        borderRadius: '20px',
      }}></img>
    </ImageContainer>
  )
}
  