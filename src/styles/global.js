import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Heebo', sans-serif;
        color: inherit;
    }

    button{
        border: none;
        cursor: pointer;
    }

    input{
        color: inherit;
    }

`