import styled from "styled-components";
import { Theme } from "../../../../../theme";

export const Content = styled.div`
    /* border: 1px solid red; */
    padding-bottom: .8rem;
    & label {
        display: inline-block;
        margin: 0;
        font-size: .8em;
        font-weight: 500;
        letter-spacing: 0.5px;
        line-height: 1.5;
        color: ${Theme.Colors.green800};
    }
    & form input:focus, form .input-group input:focus, form select:focus {
        border-color: ${Theme.Colors.green800};
        box-shadow: none;
        & svg {
            color: ${Theme.Colors.green800};
        }
    }
    overflow: auto;
`;

