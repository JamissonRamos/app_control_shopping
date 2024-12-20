import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

const StyledButton = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 8px;
    border-radius: 4px;
    background-color: transparent;
    border: .75px solid;
    cursor: pointer;
    transition: background-color 0.4s ease, color 0.4s;
    @media (max-width: 768px) {
        padding: 6px 8px;
    }
`;

const StyledContained = css`
    color: ${Theme.Colors.green800};
    &:hover{
        background-color: ${Theme.Colors.green800};
        color: ${Theme.Colors.white800};
    }
`;


export const Content = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: .8rem; //Quando gerar barra de rolagem;
`;
export const CardItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;
export const WrapItem = styled.div`
    width: 100%;
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;
export const WrapDescriptionIndex = styled.div`
/* border: 1px solid blue; */
    flex: 5;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: .4rem;
`;
export const Index = styled.div`
    /* border: 1px solid blue; */
    width: auto;
    span {
        display: inline-block;   /* Permite definir largura e altura */
        width: auto;
        max-width: 100px;             /* Define a largura máxima */
        word-wrap: break-word;   /* Quebra o texto */
        overflow-wrap: break-word;
        white-space: normal;     /* Permite que o texto quebre em várias linhas */
        overflow: hidden;        /* Oculta o texto excedente */
    }
`;
export const Product = styled.div`
    /* border: 1px solid blue; */
    flex: 3.8;
    & span {
        font-size: 12px;
        letter-Spacing: 0.5px;
        line-Height: 12px;
        font-Weight: 500;
        color: ${Theme.Colors.grey700};
        text-transform: uppercase;
    }
`;
export const WrapDateValue = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
`;
export const DatePurchase = styled.div`
    /* border: 1px solid blue; */
    
    @media (max-width: 768px) {
        text-align: center;
    }
`;
export const ValuePurchase = styled.div`
    /* border: 1px solid blue; */
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const WrapButton = styled.button`
    ${StyledButton};
    ${StyledContained};
    border-color: ${Theme.Colors.green800};
`;
