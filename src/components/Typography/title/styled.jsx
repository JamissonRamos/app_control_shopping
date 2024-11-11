import styled, {css} from "styled-components";
import {Theme} from '../../../theme';

const stylesText = {
    1: {
        fontSize: '18px',
        letterSpacing: '0px',
        fontWeight: '400',
        lineHeight: '24px',
    },
    2: {
        fontSize: '20px',
        letterSpacing: '0.25px',
        fontWeight: '400',
        lineHeight: '28px',
    },
    3: {
        fontSize: '24px',
        letterSpacing: '0px',
        fontWeight: '400',
        lineHeight: '32px',
    }
};


export const Title = styled.span`
    ${({ $level = 1}) => css`
        font-size: ${stylesText[$level]?.fontSize};
        font-weight: ${stylesText[$level]?.fontWeight};
        letter-spacing: ${stylesText[$level]?.letterSpacing};
        line-height: ${stylesText[$level]?.lineHeight};
        color: ${Theme.Colors.grey800};
    `}
`;