import { useContext, useState } from "react";
import { createContext } from "vm"


type ThemeProviderPropType = {
    children: React.ReactNode
}

type ThemeContextType = {
    theme: string,
    toggleTheme: () => void
}

export const ThemeContext = createContext();

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: ThemeProviderPropType) {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
