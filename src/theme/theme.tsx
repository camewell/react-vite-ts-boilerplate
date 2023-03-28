import React, { useMemo } from 'react';
import { createGlobalStyle, ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { getTheme } from '@/theme/index';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = true;
  const themeObject = useMemo(() => getTheme(darkMode), [darkMode]);
  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>;
}

export const ThemedGlobalStyle = createGlobalStyle`
  summary::-webkit-details-marker {
    display:none;
  }
`;
