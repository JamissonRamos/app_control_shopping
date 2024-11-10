import styled, {css} from "styled-components";
import {Theme} from '../../../theme';

const stylesText = {
    1: {
        fontSize: '8px',
        letterSpacing: '0.5px',
        fontWeight: '500',
        lineHeight: '10px',
    },
    2: {
        fontSize: '10px',
        letterSpacing: '0.5px',
        fontWeight: '500',
        lineHeight: '12px',
    },
    3: {
        fontSize: '12px',
        letterSpacing: '0.4px',
        fontWeight: '500',
        lineHeight: '16px',
    }
};


export const Label = styled.span`
    ${({ $level = 3}) => css`
        font-size: ${stylesText[$level]?.fontSize};
        font-weight: ${stylesText[$level]?.fontWeight};
        letter-spacing: ${stylesText[$level]?.letterSpacing};
        line-height: ${stylesText[$level]?.lineHeight};
        color: ${Theme.Colors.grey800};
    `}
`;
