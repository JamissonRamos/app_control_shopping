import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

const StyledButton = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 9px 0;
    border-radius: 4px;
    background-color: transparent;
    border: .75px solid;
    cursor: pointer;
    transition: background-color 0.4s ease, color 0.4s;
    @media (max-width: 768px) {
        max-width: 40%;
        padding: 6px 0;
    }
`;

const StyledEdit = css`
    color: ${Theme.Colors.green800};
    &:hover{
        background-color: ${Theme.Colors.green800};
        color: ${Theme.Colors.white800};
    }
`;
const StyledDelete = css`
    color: ${Theme.Colors.red800};
    &:hover{
        background-color: ${Theme.Colors.red800};
        color: ${Theme.Colors.white800};
    }
`;

const StyledText = css`
    font-size: 10px;
    font-weight: 300;
    line-height: 14px;
    text-align: left;
    text-transform: uppercase;
    color: ${Theme.Colors.grey800};
    text-transform: uppercase;
`;

export const Content = styled.div`
    border: 1px solid red;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: .8rem; //Quando gerar barra de rolagem;
`;

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: .4rem; // definir um espaço de elemento;
    border: .75px solid ${Theme.Colors.grey400};
    /* box-shadow: ${Theme.Shadow.sh600}; */
    border-radius: 8px;

`;
export const WrapItem = styled.div`
    width: 100%;
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* gap: .8rem; */
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
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
`;
export const Product = styled.div`
    /* border: 1px solid blue; */
    flex: 3.8;
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
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
    
    & span {
        /* ${StyledText}; */
    }
    @media (max-width: 768px) {
        text-align: center;
    }
`;
export const ValuePurchase = styled.div`
    /* border: 1px solid blue; */
 
    & span {
        /* ${StyledText}; */
    }
    @media (max-width: 768px) {
        text-align: center;
    }
`;
export const WrapButtons = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    flex: 2;
    display: flex;
    justify-content: space-around;
    gap: .8rem;
    @media (max-width: 768px) {
        justify-content: center;
    }


`;
export const WrapButtonDelete = styled.button`
    ${StyledButton}
    ${StyledDelete}
    border-color: ${Theme.Colors.red800};
`;
export const WrapButtonEdit = styled.button`
    ${StyledButton}
    ${StyledEdit}
    border-color: ${Theme.Colors.green800};
`;