"use client";

import GlobalStyle from "@/styles/globalStyle";
import theme from "@/styles/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";


export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}