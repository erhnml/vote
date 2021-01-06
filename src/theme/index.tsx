import React from "react";
import { ThemeProvider } from 'styled-components'

export interface ThemeProps  { 
  children: React.ReactNode
}

const theme = {
  colors: {
    orange:"#ea5b0c",
    gray: "#343434"
  }
}

const Theme = ({ children }:ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;