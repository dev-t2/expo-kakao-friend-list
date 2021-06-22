import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    surface: string;
    primary: string;
    onSurface: string;
    border: string;
    focus: string;
    error: string;
  }
}
