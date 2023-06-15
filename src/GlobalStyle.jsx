import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    body {
        background: grey;
        width: 100%;
        height: 100%;
    }
`;
