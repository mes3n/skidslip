import styled from 'styled-components'


export const Title = styled.h1`

  margin: 2rem;
  margin-bottom: 0;

  color: #1c648e;
  font-size: 3rem;

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
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
  margin-left: 2rem;
  margin-top: 1rem;

  color: #4783a6;
  font-size: 2rem;

  @media screen and (max-width: 800px) {
    font-size: 1.1rem;
  }

`

export const Text = styled.p`

  margin: 0;
  margin-left: 2rem;
  margin-right: 1rem;
  margin-bottom: 0.4rem;

  color: black;
  font-size: 1rem;

  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }

`

export const Card = styled.div`
  width: 700px;

  margin-right: 35px;
  margin-left: 35px;

  margin-bottom: 40px;

  display: inline;

  background: #f8f8f8;
  border-radius: 20px;

  @media screen and (max-width: 800px) {
    width: 80%;
  }

`

export const CardContainer = styled.div`

  position: fixed;

  height: 100%;
  width: 100%;

  left: 0;
  top: 0;

  // background: red;

  display: flex;

  padding-top: 40px;
  padding-left: calc(50% - 770px);
  padding-bottom: 40px;

  flex-wrap: wrap;

  overflow: scroll;
`
