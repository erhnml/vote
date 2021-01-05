import React from "react";
import { ThemeProvider } from 'styled-components'

export interface ThemeProps  { 
  children: React.ReactNode
}

const theme = {
  colors: {
    orange: '#000'
  }
}

const Theme = ({ children }:ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;