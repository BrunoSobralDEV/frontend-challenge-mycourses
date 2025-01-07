import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      black: string;
      text: string;
      "text-secondary": string;
      "text-muted": string;
      "text-footer": string;
    };
    fontSizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
    screen: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}