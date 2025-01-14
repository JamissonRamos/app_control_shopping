import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

const StyledButton = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem .6rem;
    margin-bottom: .8rem;
    border-left: 5px solid  ${Theme.Colors.green800};
    border-radius: 4px;
    box-shadow: ${Theme.Shadow.sh600};
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.4s ease, color 0.4s;
    @media (max-width: 768px) {
        padding: 6px 8px;
    }
`;

const StyledContained = css`
    color: ${Theme.Colors.green800};
    &:hover{
        border-left: 5px solid  ${Theme.Colors.grey400};
        background-color: ${Theme.Colors.green800};
        span {
            color: ${Theme.Colors.white800};
        }
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
export const WrapButton = styled.button`
    ${StyledButton};
    ${StyledContained};
`;
export const CardItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const WrapItem = styled.div`
    width: 100%;
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: .8rem;
    padding: .4rem 0;
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
    & span {
        color: ${Theme.Colors.green800};
        font-weight: 500;  
    }
`;
export const Product = styled.div`
    /* border: 1px solid blue; */
    flex: 3.8;
    & span{
        display: flex;
        flex-direction: column;
        padding: 0 .2rem;
        text-align: start;
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
    gap: .4rem;
`;
export const DatePurchase = styled.div`
    /* border: 1px solid blue; */
    & span {
        font-weight: 500;
    }
    @media (max-width: 768px) {
        text-align: center;
    }
`;
export const ValuePurchase = styled.div`
    /* border: 1px solid blue; */
    & span {
        font-weight: 500;
    }
    @media (max-width: 768px) {
        text-align: center;
    }
`;


