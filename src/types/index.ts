import type React from 'react';

export interface Stat {
    value: number;
    suffix: string;
    label: string;
}

export interface Service {
    icon: React.FC;
    title: string;
    desc: string;
    features: string[];
}

export interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

export interface ThemeColors {
    bg: string;
    bgAlt: string;
    bgCard: string;
    bgCardHover: string;
    text: string;
    textMuted: string;
    textLight: string;
    border: string;
    borderLight: string;
}
