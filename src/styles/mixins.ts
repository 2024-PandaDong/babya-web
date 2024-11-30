import { css } from "styled-components";

export const flexBox = (direction = "row", justify = "center", align = "center") => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
`;

export const fontStyle = (size = "1rem", weight = "Medium", color = "#000") => css`
    font-family: Pretendard-${weight}, sans-serif;
    font-size: ${size};
    color: ${color};
`;

export const boxStyle = (bgColor: string | (() => string), radius = "5px", shadow = "none") => css`
    background: ${typeof bgColor === "function" ? bgColor() : bgColor};
    border-radius: ${radius};
    box-shadow: ${shadow};
`;


export const noScrollBar = css`
    &::-webkit-scrollbar {
        display: none;
    }
`;
