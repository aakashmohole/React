import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

// ThemeProvider component to provide the theme context
export const ThemeProvider =  ThemeContext.Provider;

// Custom hook to use the ThemeContext
export default function useTheme() {
    return useContext(ThemeContext);
}