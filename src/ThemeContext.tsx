import React from 'react';

export const ThemeContext = React.createContext<'light' | 'dark'>('light');

export const ThemeProvider = ThemeContext.Provider;
