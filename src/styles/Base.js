import { createGlobalStyle } from "styled-components";  


/* 
    -Alterar seletores ou components que vão mudar de acordo a necessidade do projeto;

*/
const Base = createGlobalStyle`

    body, html {
        /* border: 1px solid red; */
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
    }

    main {
        border: 1px solid green;
        width: 100vw;
        height: 100vh;
        padding: .4rem;
        overflow: auto;
        transition: margin 0.4s; 
        @media (min-width: 500px) {
            display: flex;
            flex-direction: column;
            align-items: center;

    }

    }

    

`;


export default Base;
