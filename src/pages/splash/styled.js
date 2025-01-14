import styled from "styled-components";
import { Theme } from "../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
        max-width: 500px;
        min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 1.2rem 0;
`;
export const Header = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    max-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    & > img {
        max-width: 100%;
        max-height: 100%;
        object-fit: fill;
    }
`;
export const Body = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 28%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 2rem;
    & span{
        color: ${Theme.Colors.green800};
    }
    & span:last-child {
        color: ${Theme.Colors.green800};
    }

    @media (max-width: 425px) {
        height: 60%;
    }


`;
export const Footer = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4rem 0;
    & button {
        width: 50%;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        & span {
            font-size: 1em;
            font-weight: 400;
            color: ${Theme.Colors.green800};
        }
        & :hover {
            color: ${Theme.Colors.white800};
            & span {
                color: ${Theme.Colors.white800};
            }
        }
    }

    @media (max-width: 425px) {
        & button {
            width: 60%;
        }
    }

`;