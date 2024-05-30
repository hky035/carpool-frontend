import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        --shadow : 0 10px 30px rgba(0, 0, 0, 0.1);
    }
`;

export default GlobalStyle;