import { createGlobalStyle } from 'styled-components'
import 'font-awesome/css/font-awesome.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, html {
    height: 100vh;
    background: #fff;
    font-family: "Helvetica Bold", "Helvetica", Arial, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-image: url("imagens/fundo.jpg");
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url("imagens/fundo.jpg");
    background-repeat: no-repeat;
    background-size: cover;

  }
`

export default GlobalStyle
