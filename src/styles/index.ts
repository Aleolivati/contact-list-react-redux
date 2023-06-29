import styled, { createGlobalStyle } from 'styled-components'
import { backgroundImage } from '../themes'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Nunito, sains-serif;
    list-style: none;
  }
`

export const Background = styled.div`
  background-image: ${backgroundImage};
  background-size: cover;
  padding-bottom: 32px;
  height: 100%;
  min-height: 100vh;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;

  @media (max-width: 765px) {
    width: 95%;
    margin: 0 auto;
  }
`

export default GlobalStyle
