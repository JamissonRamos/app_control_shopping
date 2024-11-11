import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

const containedStyles = css`
    width: 80%;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: none;
    background-color: ${Theme.Colors.green800};
    border: none;
    transition: background-color 0.4s ease, color 0.4s;
    & span {
        font-size: .8rem;
        font-weight: 500;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: ${Theme.Colors.white800};
    }
    & svg {
        margin-right: 8px;
        color: ${Theme.Colors.white800};
    }
    &:hover {
        box-shadow: none;
        background-color: ${props => {
            const color = props.color || Theme.Colors.green800;
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return `rgb(${r - 35}, ${g - 35}, ${b - 35})`;
        }};
    }
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    padding: .2rem 0;
    margin-bottom: 1rem;
    & span {
        color: ${Theme.Colors.grey500}
    }
    & span:first-child {
        color: ${Theme.Colors.green800}
    }
`;

export const WrapButtonCreate = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .8rem ;
    margin-top: 1rem;
    & button {
        ${containedStyles};
    }
    

`;