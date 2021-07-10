import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
    ${reset};
    html, body, #root, .App{
        width: 100%;
        height: 100%;
        min-height: 100vh;
        font-family: noto san KR;
        background-color: #fafafa;   
    };
    button{
        cursor: pointer;
        outline: none;
    };
    input{
        outline: none;
    }
`;

export default GlobalStyled;