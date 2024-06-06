import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        --shadow : 0 10px 30px rgba(0, 0, 0, 0.1);
        --successColor : #42bf3d;
        --yuColor : rgb(21,57,116);
    }
`;

export default GlobalStyle;