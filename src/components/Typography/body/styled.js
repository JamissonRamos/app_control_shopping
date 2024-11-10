import styled, {css} from "styled-components";
import {Theme} from '../../../theme';

const stylesText = {
    1: {
        fontSize: '12px',
        letterSpacing: '0.4px',
        fontWeight: '400',
        lineHeight: '16px',
    },
    2: {
        fontSize: '14px',
        letterSpacing: '0.25px',
        fontWeight: '400',
        lineHeight: '20px',
    },
    3: {
        fontSize: '16px',
        letterSpacing: '0.5px',
        fontWeight: '400',
        lineHeight: '24px',
    },
    4: {
        fontSize: '18px',
        letterSpacing: '0.15px',
        fontWeight: '400',
        lineHeight: '28px',
    },
    5: {
        fontSize: '20px',
        letterSpacing: '0.15px',
        fontWeight: '400',
        lineHeight: '30px',
    },
};


export const Body = styled.span`
    ${({ $level = 5}) => css`
        font-size: ${stylesText[$level]?.fontSize};
        font-weight: ${stylesText[$level]?.fontWeight};
        letter-spacing: ${stylesText[$level]?.letterSpacing};
        line-height: ${stylesText[$level]?.lineHeight};
        color: ${Theme.Colors.grey800};
    `}
`;