import React from 'react';
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';

export default function StyledComponents() {
    let goItalics = "italic";
    const setTransitionTime = (time) => `all ${time} linear`;

    // animation
    const fadeIn = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;

    const MyH3 = styled.h3`
        font-size: 24px;
        font-style: ${goItalics};

        /* props normales */
        /* color: ${(props) => props.color}; */

        /* con destructuracion */
        color: ${({ color }) => color || "#fda085"};
        transition: ${setTransitionTime(".2s")};

        /* styled components inside styled components */
        ${({ isButton }) => isButton && css`
            color: #FFF;
            padding: 25px;
            background: #c3e7e9;
            border-radius: 45px;
            margin: 25px 0 0;

            /* animations */
            &:hover {
                animation: ${fadeIn} 2s ease-in-out;
            }
        `}

        &:hover {
            font-size: 28px;
            transition: ${setTransitionTime(".2s")};
        }
    `;

    const light = {
        color: '#222',
        bgColor: '#DDD'
    };

    const dark = {
        color: '#DDD',
        bgColor: '#222'
    };

    const Box = styled.div`
        padding: 25px;
        margin: 25px;
        color: ${({ theme }) => theme.color};
        background-color: ${({ theme }) => theme.bgColor};
    `;

    const BoxRounded = styled(Box)`
        border-radius: 45px;
    `;

    // should be in index.js
    // it resets the styles in the whole app
    const GlobalStyle = createGlobalStyle`
        h2 {
            font-style: italic;
            text-transform: uppercase;
            color: #61dafb;
            background-color: #fff;
            padding: 2rem;
        }
    `;

    return (
        <>
            <GlobalStyle />
            <h2>Styled Components</h2>
            <MyH3>H3 with StyledComponents</MyH3>
            <MyH3 color='#fbc2eb'>H3 with StyledComponents</MyH3>
            <MyH3 isButton>
                H3 as button
            </MyH3>

            <ThemeProvider theme={light}>
                <Box>
                    A light box
                </Box>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>
                    A dark box
                </Box>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <BoxRounded>
                    A dark box - that inherit styling
                </BoxRounded>
            </ThemeProvider>
        </>
    )
}