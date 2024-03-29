import { createContext, useState} from 'react';
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [toggleTheme, setToggleTheme] = useState('light')
    
    const themeChange = { 
        toggleTheme, setToggleTheme
    }
    return(
        <ThemeContext.Provider value={themeChange}>
            {children}
        </ThemeContext.Provider>
    )
}