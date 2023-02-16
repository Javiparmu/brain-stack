import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import reportWebVitals from './reportWebVitals'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { BrowserRouter } from 'react-router-dom'
import {
  ChakraProvider,
  ColorModeScript,
  CSSReset,
} from '@chakra-ui/react'
import theme from './theme/theme'
import App from './App'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
        />
        <CSSReset />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)

reportWebVitals()
