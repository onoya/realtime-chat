import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap');
  * {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
    box-sizing: border-box;
  }
  body {
    background-color: #2C3A47;
    margin: 0;
    height: 100vh;
  }
  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
