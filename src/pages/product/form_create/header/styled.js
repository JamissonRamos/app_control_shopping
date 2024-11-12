import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    padding: .2rem 0;
    margin-bottom: 1rem;
    & span {
        padding: .2rem 0;
        color: ${Theme.Colors.grey500}
    }
    & span:first-child {
        color: ${Theme.Colors.green800}
    }
`;
