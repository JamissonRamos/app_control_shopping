import styled, { css } from "styled-components";
import { Theme } from "../../theme";

const ContainedStyles = css`
    width: 50%;
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
    height: 12%;
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    padding: .4rem ;
    margin-bottom: .8rem;

`;
export const Card = styled.div`
    border: 1px solid red;
    width: 200px;   
    max-width: 200px;
    min-width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: .8rem;
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
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .8rem;
    margin-bottom: 2rem;
    & button {
        ${ContainedStyles}
    }
    
`;
export const Content = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 60%;
    overflow: auto
`;

