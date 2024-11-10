import styled, {css} from "styled-components";
import {Theme} from '../../../theme';

const stylesText = {
    1: {
        fontSize: '24px',
        letterSpacing: '0px',
        fontWeight: '400',
        lineHeight: '32px',
    },
    2: {
        fontSize: '34px',
        letterSpacing: '0.25px',
        fontWeight: '400',
        lineHeight: '40px',
    },
    3: {
        fontSize: '48px',
        letterSpacing: '0px',
        fontWeight: '400',
        lineHeight: '56px',
    }
};

export const Display = styled.span`
    ${({ $level = 3}) => css`
        font-size: ${stylesText[$level]?.fontSize};
        font-weight: ${stylesText[$level]?.fontWeight};
        letter-spacing: ${stylesText[$level]?.letterSpacing};
        line-height: ${stylesText[$level]?.lineHeight};
        color: ${Theme.Colors.grey800};
    `}
`;
