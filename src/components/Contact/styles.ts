import styled from 'styled-components'
import { Button } from '../Buttons/styles'
import * as T from '../../themes'

export const ContactStyle = styled.div`
  background-color: ${T.mainColor};
  width: 100%;
  max-width: 720px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  border-radius: 100px 40px 40px 100px;
  border-bottom: ${T.secondaryColor} solid 1px;
  border-top: ${T.secondaryColor} solid 1px;
  border-right: ${T.secondaryColor} solid 3px;
  transition: all ease 0.3s;

  &.isEditing {
    background-color: ${T.secondaryColor};
    border: ${T.borderColor} solid 6px;

    button {
      visibility: visible;
    }

    textarea {
      border-bottom: ${T.mainColor} solid 1px;
    }
  }

  &:hover {
    background-color: ${T.secondaryColor};

    button {
      visibility: visible;
    }
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  background-color: transparent;

  img {
    width: 100%;
    height: 100%;
    max-height: 180px;
    max-width: 180px;
    border-radius: 50%;

    @media (max-width: 765px) {
      width: 80px;
      height: 80px;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;

  @media (max-width: 765px) {
    display: block;
  }
`

export const InfoContainer = styled.div`
  margin-left: 16px;
  background-color: transparent;
  width: 100%;

  @media (max-width: 765px) {
    margin-left: 5px;
  }
`

export const ContactTitle = styled.textarea`
  display: block;
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  resize: none;
  border: none;
  width: 100%;
  height: 100%;
  max-height: 26px;
  min-width: 150px;
  margin: 2px auto 0 2px;
  color: ${T.textMainColor};

  @media (max-width: 765px) {
    font-size: 14px;
  }
`

export const ContactLabels = styled(ContactTitle)`
  font-size: 14px;
  font-weight: normal;
  max-height: 20px;
  margin-bottom: 2px;

  @media (max-width: 765px) {
    font-size: 12px;
  }
`

export const RemoveCancelButton = styled(Button)`
  max-height: 25px;
  max-width: 25px;
  background-color: ${T.removeButtonColor};
  margin: 0 15px 0 0;
  padding: 5px;
  visibility: hidden;

  &:hover {
    background-color: ${T.removeButtonColorHover};
  }

  svg {
    width: 100%;
    height: 100%;
    color: ${T.iconButtonColor};
  }

  @media (max-width: 765px) {
    margin: 10px 5px 5px auto;
    max-width: 30px;
  }
`

export const EditButton = styled(RemoveCancelButton)`
  background-color: ${T.editButtonColor};
  margin: 0 15px 0 auto;
  padding-right: 4px;
  padding-left: 6px;

  &:hover {
    background-color: ${T.editButtonColorHover};
  }

  @media (max-width: 765px) {
    margin: 5px 5px 0 auto;
    max-width: 30px;
  }
`

export const SaveButton = styled(EditButton)`
  background-color: ${T.successButtonColorHover};
  padding-right: 5px;
  padding-left: 5px;

  &:hover {
    background-color: ${T.successButtonColor};
  }
`
