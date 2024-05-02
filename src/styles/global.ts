import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    a {
        text-decoration: none;
    }
    
    ${reset}
`

export default GlobalStyle