import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      "primary-dark": string;
      secondary: string;
      background: string;
      black: string;
      text: string;
      "text-secondary": string;
      "text-muted": string;
      "text-footer": string;
      "bg-button-favorite": string;
      "bg-button-share": string,
      "text-course-page": string;
      "text-modal-title": string;
      "bg-whatsapp-button": string;
      "bg-button-close-modal": string;
      "border-button-close-modal": string;
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