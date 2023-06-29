import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContactsClass from '../../models/contacts'

type ContactsState = {
  contacts: ContactsClass[]
}

const initialState: ContactsState = {
  contacts: [
    {
      id: 0,
      name: 'Alexandre',
      email: 'alexandre@gmail.com',
      phone: '11990900909',
      avatar: 'https://api.dicebear.com/6.x/fun-emoji/svg?seed=Tigger'
    },
    {
      id: 1,
      name: 'Carla',
      email: 'carla@gmail.com',
      phone: '11990900908',
      avatar: 'https://api.dicebear.com/6.x/fun-emoji/svg?seed=Bandit'
    },
    {
      id: 2,
      name: 'Fernanda',
      email: 'fernanda@gmail.com',
      phone: '11990900907',
      avatar: 'https://api.dicebear.com/6.x/fun-emoji/svg?seed=Bear'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNewContact: (
      state,
      action: PayloadAction<Omit<ContactsClass, 'id'>>
    ) => {
      const contactAlreadyExists = state.contacts.find(
        (c) => c.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (contactAlreadyExists) {
        alert(
          'Já existe um contato com esse nome. Favor inserir um novo nome para o contato!'
        )
      } else {
        const lastContact = state.contacts[state.contacts.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.contacts.push(newContact)
      }
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      )
    },
    editContact: (state, action: PayloadAction<ContactsClass>) => {
      const contactIndex = state.contacts.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.contacts[contactIndex] = action.payload
      }
    }
  }
})

export const { addNewContact, removeContact, editContact } =
  contactsSlice.actions
export default contactsSlice.reducer
