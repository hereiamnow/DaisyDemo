'use client';

// Import necessary React hooks for state management, context, and effects.
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a React context for managing the theme.
const ThemeContext = createContext();

// Custom hook to easily access the theme context.
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to wrap the application and provide the theme context.
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme. Initialize with 'daisystarter'.
  const [theme, setTheme] = useState('daisystarter');

  // Effect to update the 'data-theme' attribute on the root HTML element
  // whenever the 'theme' state changes. This is how DaisyUI applies themes.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // Log the new theme value to the console when it changes.
    console.log('Theme changed to:', theme);
  }, [theme]);

  // Create the value object that will be provided by the context.
  const value = { theme, setTheme };

  // Log the initial theme context value when it is created.
  console.log('Theme context created with value:', value);

  // Provide the theme context value to the children components.
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};