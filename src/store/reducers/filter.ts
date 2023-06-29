import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SearchTermState = {
  term?: string
}

const initialState: SearchTermState = {
  term: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { search } = filterSlice.actions
export default filterSlice.reducer
