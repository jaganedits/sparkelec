import { useState, useEffect, createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { ThemeContextType, ThemeColors } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved) setIsDark(saved === 'dark');
        else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setIsDark(true);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark(!isDark) }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const getThemeColors = (isDark: boolean): ThemeColors => ({
    bg: isDark ? 'bg-gray-950' : 'bg-gray-50',
    bgAlt: isDark ? 'bg-gray-900' : 'bg-white',
    bgCard: isDark ? 'bg-gray-900/80' : 'bg-white',
    bgCardHover: isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50',
    text: isDark ? 'text-gray-100' : 'text-gray-900',
    textMuted: isDark ? 'text-gray-400' : 'text-gray-600',
    textLight: isDark ? 'text-gray-500' : 'text-gray-500',
    border: isDark ? 'border-gray-800' : 'border-gray-200',
    borderLight: isDark ? 'border-gray-800/50' : 'border-gray-100',
});
