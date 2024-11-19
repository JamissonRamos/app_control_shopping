import styled, { css } from "styled-components";
import { Theme } from "../../theme";

const StyledButton = css`
    /* width: 30%; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 4px;
    & span {
        font-size: .8rem;
        font-weight: 500;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }
    cursor: pointer;
    transition: background-color 0.4s ease, color 0.4s;
`;
export const AlertDelete = styled.div`
    width: 40%;
    min-width: 300px;
    max-width: 90%;
    position: fixed;
    top: 40vh;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-bottom: .4rem;
    background: ${Theme.Colors.white800};
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
    z-index: 10;
    animation-duration: 1s;
    animation-name: formModal;
    @keyframes formModal {
        from {
            top: 0%;
        }
        to {
            top: 40%;
        }
    }
    @media (max-width: 1300px) {
        width: 50%;
    }
    @media (max-width: 1024px) {
        width: 60%;
    }
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 425px) {
        width: 90%;
    }
`;
export const Header = styled.div`
    width: 100%;
    height: 30px;
    padding: .2rem .4rem;
    background: ${Theme.Colors.red800};
    & span {
        color: ${Theme.Colors.white800}
    }
`;
export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .2rem .4rem;
`;
export const WrapIcon = styled.div`
    width: 100%;
    padding: .2rem .4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
        font-size: 4em;
        color: red;
    }
`;
export const WrapTitles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    padding: .2rem .4rem;
    margin-bottom: 1rem;
    & span:last-child{
        color: ${Theme.Colors.red800};
    }
    @media (max-width: 768px) {
        gap: .8rem;
        text-align: center;
    }
`;
export const WrapButtons = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    padding: .2rem .4rem;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
    margin-top: .8rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export const WrapButton = styled.div`
    height: 32px;
    
    & button {
        ${StyledButton};
    }
`;
