import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ThemeState = {
  usingDarkTheme: boolean
}

const initialState: ThemeState = {
  usingDarkTheme: false
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeChange: (state, action: PayloadAction<boolean>) => {
      state.usingDarkTheme = action.payload
    }
  }
})

export const { themeChange } = themeSlice.actions
export default themeSlice.reducer
