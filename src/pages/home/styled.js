import styled, { css } from "styled-components";
import { Theme } from "../../theme";

const ContainedStyles = css`
    width: 50%;
    height: 100%;
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
    @media (max-width: 425px) {
        width: 60%;
    }
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
        max-width: 500px;
        min-width: 320px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* gap: 32px; */
    padding: 1.2rem 0;
`;
export const CardsHeader = styled.div`
    border: 1px solid red;
    width: 100%;
        max-width: 500px;
        min-width: 320px;
    /* height: 12%; */
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    /* padding: .4rem ; */
    margin-bottom: 1rem;

`;
export const Card = styled.div`
    /* border: 1px solid red; */
    min-width: 200px;
    max-height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 1rem;
    border: 1px solid ${Theme.Colors.grey400};
    border-radius: 6px;
    box-shadow: ${Theme.Shadow.sh900};
`;
export const ItemIcon = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
        padding: .2rem;
        font-size: 2em;
        color: ${Theme.Colors.green800};
    }
    `;
export const WrapText = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: .2rem 0;
    & span {
        color: ${Theme.Colors.green800};
    }
    & span:last-child {
        color: ${Theme.Colors.grey800};
    }
`;
export const WrapButton = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem;
    margin-bottom: 2rem;
    & button {
        ${ContainedStyles}
    }
    
`;
export const Content = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 60%;
    overflow: auto;
`;

export const Empty = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 2;
    color: ${Theme.Colors.green800};
    @media (max-width: 425px) {
        height: 300px;
        padding: 0;
        flex: none;
    }
`;

export const SpinnerCustom = styled.div`
    /* border: 1px solid red; */
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: ${Theme.Colors.black800};
    & span {
        color: ${Theme.Colors.yellow600};
    }
    @media (max-width: 320px) {

        & :last-child {
            /* Retirar o texto */
            display: none;
        }
    }

`;


