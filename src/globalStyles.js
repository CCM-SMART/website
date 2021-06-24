import React from 'react'
import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    html, body{
        overflow-x: hidden;
    }
` 

export default globalStyles;
