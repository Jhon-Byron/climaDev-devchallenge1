import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../src/themes'

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;

    background-color: ${props => props.theme.colors.primary};
}
`

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp