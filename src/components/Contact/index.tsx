import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { RootReducer } from '../../store'
import { editContact, removeContact } from '../../store/reducers/contacts'
import ContactsClass from '../../models/contacts'

import { BsTrash } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import { IoIosSave } from 'react-icons/io'
import { ImCancelCircle } from 'react-icons/im'

import * as S from './styles'

type Props = ContactsClass

const Contact = ({
  id,
  name: originalName,
  email: originalEmail,
  phone: originalPhone,
  avatar
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName)
    }
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
    if (originalPhone.length > 0) {
      setPhone(originalPhone)
    }
  }, [originalName, originalEmail, originalPhone])

  function cancelEditing() {
    setIsEditing(false)
    setName(originalName)
    setEmail(originalEmail)
    setPhone(originalPhone)
  }

  const contactList = useSelector(
    (state: RootReducer) => state.contactsList.contacts
  )

  function continueEditing() {
    const contactsWithoutEditing = contactList.filter((c) => c.id !== id)

    const contactAlreadyExists = contactsWithoutEditing.find(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    )

    if (contactAlreadyExists) {
      setIsEditing(true)
      alert(
        'Já existe um contato com esse nome. Favor inserir um novo nome para o contato!'
      )
    } else {
      setIsEditing(false)
      dispatch(editContact({ id, name, email, phone, avatar }))
    }
  }

  return (
    <S.ContactStyle className={isEditing ? 'isEditing' : ''}>
      <S.AvatarContainer>
        <img src={avatar} />
      </S.AvatarContainer>
      <S.InfoContainer>
        <S.ContactTitle
          name="nameLabel"
          maxLength={21}
          value={name}
          disabled={!isEditing}
          onChange={(event) => setName(event.target.value)}
        />
        <S.ContactLabels
          name="emailLabel"
          maxLength={24}
          value={email}
          disabled={!isEditing}
          onChange={(event) => setEmail(event.target.value)}
        />
        <S.ContactLabels
          name="phoneLabel"
          maxLength={20}
          value={phone}
          disabled={!isEditing}
          onChange={(event) => setPhone(event.target.value)}
        />
      </S.InfoContainer>
      {!isEditing ? (
        <S.ButtonContainer>
          <S.EditButton onClick={() => setIsEditing(true)}>
            <FaRegEdit />
          </S.EditButton>
          <S.RemoveCancelButton onClick={() => dispatch(removeContact(id))}>
            <BsTrash />
          </S.RemoveCancelButton>
        </S.ButtonContainer>
      ) : (
        <S.ButtonContainer>
          <S.SaveButton
            onClick={() => {
              continueEditing()
            }}
          >
            <IoIosSave />
          </S.SaveButton>
          <S.RemoveCancelButton onClick={() => cancelEditing()}>
            <ImCancelCircle />
          </S.RemoveCancelButton>
        </S.ButtonContainer>
      )}
    </S.ContactStyle>
  )
}

export default Contact
