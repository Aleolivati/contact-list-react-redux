import styled from 'styled-components'
import { Container } from '../../styles'
import * as T from '../../themes'

export const AvatarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 0 40px 40px 40px;
  background-color: ${T.secondaryColor};
  position: absolute;
  top: 0;
  left: -360px;

  @media (max-width: 765px) {
    left: 0;
    border-radius: 40px;
    justify-content: center;
  }

  li {
    display: inline-block;
    padding: 8px;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 60px;
    max-height: 60px;
    cursor: pointer;
    border-radius: 50%;
    margin: 5px;
    transition: all ease .2s;

    &:hover {
      max-width: 70px;
      max-height: 70px;
      margin: 0;
  }
`

export const MainContainer = styled(Container)`
  display: block;
  width: auto;

  @media (max-width: 765px) {
    display: flex;
    width: 100%;
  }
`
