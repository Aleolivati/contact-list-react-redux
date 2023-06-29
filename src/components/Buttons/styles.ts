import styled from 'styled-components'
import * as T from '../../themes'

export const Button = styled.button`
  width: 100%;
  height: 100%;
  max-height: 40px;
  max-width: 40px;
  font-size: 30px;
  padding: 0;
  font-weight: bold;
  background-color: ${T.successButtonColor};
  border-radius: 50%;
  border: none;
  margin: 16px 0 0 auto;
  color: ${T.iconButtonColor};
  padding-bottom: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color ease 0.3s;

  &:hover {
    background-color: ${T.successButtonColorHover};
  }

  @media (max-width: 765px) {
    margin: 10px 0 0;
  }
`
