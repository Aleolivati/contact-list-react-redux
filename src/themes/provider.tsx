import { useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { ThemeProvider } from 'styled-components'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const DarkThemeProvider = ({ children }: Props) => {
  const usingDarkTheme = useSelector(
    (state: RootReducer) => state.theme.usingDarkTheme
  )
  return (
    <ThemeProvider theme={{ theme: usingDarkTheme ? 'dark' : 'light' }}>
      {children}
    </ThemeProvider>
  )
}

export default DarkThemeProvider
