import React from "react";
import { ThemeProvider } from 'styled-components'

export interface ThemeProps  { 
  children: React.ReactNode
}

const theme = {
  colors: {
    orange:"#ea5b0c",
    lightOrange: "rgba(234, 91, 12, 0.3)",
    gray: "#343434",
    black: '#000000',
    lightGray: "#dddddd",
    white: '#fff',
  }
}

const Theme = ({ children }:ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;