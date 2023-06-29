import { configureStore } from '@reduxjs/toolkit'

import avatarReducer from './reducers/avatar'
import searchReducer from './reducers/filter'
import contactsReducer from './reducers/contacts'
import themeReducer from './reducers/theme'

const store = configureStore({
  reducer: {
    avatar: avatarReducer,
    search: searchReducer,
    contactsList: contactsReducer,
    theme: themeReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
