import styled from 'styled-components'
import { Button } from '../../components/Buttons/styles'
import * as T from '../../themes'

export const Field = styled.input`
  width: 100%;
  height: 40px;
  max-width: 720px;
  border-radius: 40px;
  padding: 0 12px;
  border: ${T.secondaryColor} solid 2px;
  font-size: 16px;
  background-color: ${T.mainColor};
  color: ${T.textSecondaryColor};
  margin-top: 16px;

  &::placeholder {
    color: ${T.secondaryColor};
  }

  &:focus {
    outline: ${T.borderColor} solid 3px;
    border: transparent;
  }
`

export const ContainerForm = styled.form`
  max-width: 720px;
  width: 100%;
  display: grid;
  grid-template-columns: 0.3fr 1.8fr 1.2fr 1fr 0.3fr;
  gap: 4px;

  @media (max-width: 765px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`

export const Avatar = styled(Field)`
  transition: all ease 0.3s;
  display: flex;
  justify-content: center;
  cursor: pointer;

  img {
    border-radius: 50%;
    padding: 5px 0;
  }

  @media (max-width: 765px) {
    width: 80px;
    padding: 3px;
    height: 45px;

    img {
      width: 100%;
      height: 100%;
      max-width: 35px;
      max-height: 35px;
      padding: 0;
    }
  }
`

export const AvatarClicked = styled(Avatar)`
  background-color: ${T.secondaryColor};
  border-radius: 50% 50% 0 0;
`

export const ContactsContainer = styled.ul`
  max-width: 720px;
  width: 100%;
`

export const AddContactContainer = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: space-between;
`

export const AddContactButton = styled(Button)`
  margin: 12px auto 0 0;
  padding: 0 15px;
  max-width: fit-content;
  width: 100%;
  border-radius: 40px;
  font-size: 16px;
  line-height: 28px;
  background-color: ${T.editButtonColorHover};
  color: ${T.iconButtonColor};

  &:hover {
    background-color: ${T.editButtonColor};
  }

  @media (max-width: 765px) {
    margin: 12px auto 0;
  }
`

export const CancelAddContactButton = styled(AddContactButton)`
  background-color: #f70707;
  padding: 5px;
  margin-left: 10px;

  &:hover {
    background-color: #dd7973;
  }

  svg {
    width: 100%;
    height: 25px;
  }
`
