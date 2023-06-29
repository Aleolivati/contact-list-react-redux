import theme from 'styled-theming'
import BackgroundLight from '../assets/images/background-light.jpg'
import BackgroundDark from '../assets/images/background-dark.jpg'

export const backgroundImage = theme('theme', {
  light: `url(${BackgroundLight})`,
  dark: `url(${BackgroundDark})`
})

export const mainColor = theme('theme', {
  light: '#e4e4e4',
  dark: '#424242'
})

export const secondaryColor = theme('theme', {
  light: '#747474',
  dark: '#959595'
})

export const textMainColor = theme('theme', {
  light: '#000',
  dark: '#e4e4e4'
})

export const textSecondaryColor = theme('theme', {
  light: '#424242',
  dark: '#e4e4e4'
})

export const iconButtonColor = theme('theme', {
  light: '#e4e4e4',
  dark: '#e4e4e4'
})

export const removeButtonColor = theme('theme', {
  light: '#dd7973',
  dark: '#f70707'
})

export const removeButtonColorHover = theme('theme', {
  light: '#f70707',
  dark: '#dd7973'
})

export const successButtonColor = theme('theme', {
  light: '#2b7a0b',
  dark: '#5dc732'
})

export const successButtonColorHover = theme('theme', {
  light: '#5dc732',
  dark: '#2b7a0b'
})

export const editButtonColor = theme('theme', {
  light: '#ffca35',
  dark: '#d98404'
})

export const editButtonColorHover = theme('theme', {
  light: '#ffa41b',
  dark: '#ffa41b'
})

export const borderColor = theme('theme', {
  light: '#ffa41b',
  dark: '#d98404'
})
