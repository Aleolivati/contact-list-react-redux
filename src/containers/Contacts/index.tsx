import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

import { RootReducer } from '../../store'
import { search } from '../../store/reducers/filter'
import { addNewContact } from '../../store/reducers/contacts'
import {
  AvatarsItems,
  isClicked,
  selectedAvatar
} from '../../store/reducers/avatar'

import AvatarDropdown from '../../components/DropdownAvatar'
import CustomizedSwitches from '../../components/SwitchButton'
import AddButton from '../../components/Buttons'

import { Container } from '../../styles'
import * as S from './styles'
import Contact from '../../components/Contact'
import { ImCancelCircle } from 'react-icons/im'

const Contacts = () => {
  const dispatch = useDispatch()
  const [isAddContact, setIsAddContact] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const searchText = useSelector((state: RootReducer) => state.search.term)
  const contactsList = useSelector(
    (state: RootReducer) => state.contactsList.contacts
  )
  const selectedImage = useSelector((state: RootReducer) => state.avatar.avatar)
  const avatarIsCliked = useSelector(
    (state: RootReducer) => state.avatar.isClicked
  )

  const contactFilter = () => {
    let filteredContact = contactsList
    if (searchText !== undefined) {
      filteredContact = filteredContact.filter(
        (item) => item.name.toLowerCase().search(searchText.toLowerCase()) >= 0
      )
      return filteredContact
    } else {
      return contactsList
    }
  }

  const contact = contactFilter()
  const avatar = selectedImage.icon
  const InitialState = AvatarsItems.avatars[0]
  const isMobile = useMediaQuery({ query: '(max-width: 765px)' })

  const addContact = (event: FormEvent) => {
    event.preventDefault()
    dispatch(addNewContact({ name, email, phone, avatar }))
    dispatch(selectedAvatar(InitialState))
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <Container>
      {!isAddContact ? (
        <S.AddContactContainer>
          <S.AddContactButton onClick={() => setIsAddContact(true)}>
            Adicionar Contato +
          </S.AddContactButton>
          <CustomizedSwitches />
        </S.AddContactContainer>
      ) : (
        <>
          <S.AddContactContainer>
            <S.CancelAddContactButton
              onClick={() => {
                setIsAddContact(false)
                dispatch(isClicked(false))
              }}
            >
              <ImCancelCircle />
            </S.CancelAddContactButton>
            <CustomizedSwitches />
          </S.AddContactContainer>
          <S.ContainerForm onSubmit={addContact}>
            {!avatarIsCliked ? (
              <S.Avatar as="div" onClick={() => dispatch(isClicked(true))}>
                <img src={selectedImage.icon} alt={selectedImage.label} />
              </S.Avatar>
            ) : (
              <>
                <S.AvatarClicked
                  as="div"
                  onClick={() => dispatch(isClicked(false))}
                >
                  <img src={selectedImage.icon} alt={selectedImage.label} />
                </S.AvatarClicked>
              </>
            )}
            {isMobile && avatarIsCliked && <AvatarDropdown />}
            <S.Field
              name="name"
              type="text"
              placeholder="Nome Completo"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <S.Field
              name="email"
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <S.Field
              name="phone"
              type="tel"
              placeholder="Telefone"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <AddButton />
          </S.ContainerForm>
        </>
      )}
      {!isMobile && avatarIsCliked && <AvatarDropdown />}
      <S.Field
        name="search"
        type="text"
        placeholder="Buscar"
        value={searchText}
        onChange={(event) => dispatch(search(event.target.value))}
      />
      <S.ContactsContainer>
        {contact.map((t) => (
          <li key={t.id}>
            <Contact
              name={t.name}
              email={t.email}
              phone={t.phone}
              avatar={t.avatar}
              id={t.id}
            />
          </li>
        ))}
      </S.ContactsContainer>
    </Container>
  )
}

export default Contacts
