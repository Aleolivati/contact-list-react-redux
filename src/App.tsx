import { Provider } from 'react-redux'
import Contacts from './containers/Contacts'
import GlobalStyle, { Background, Container } from './styles'
import store from './store'
import DarkThemeProvider from './themes/provider'

function App() {
  return (
    <Provider store={store}>
      <DarkThemeProvider>
        <GlobalStyle />
        <Background>
          <Container>
            <Contacts />
          </Container>
        </Background>
      </DarkThemeProvider>
    </Provider>
  )
}

export default App
