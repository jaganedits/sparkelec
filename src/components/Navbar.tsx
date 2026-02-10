import { useState } from 'react';
import { Zap, Phone, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme, getThemeColors } from '../context/ThemeContext';
import { BUSINESS, NAV_ITEMS } from '../data/constants';

interface NavbarProps {
    scrollY: number;
    activeSection: string;
    onNavigate: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollY, activeSection, onNavigate }) => {
    const { isDark, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const theme = getThemeColors(isDark);

    const handleNavigate = (id: string) => {
        onNavigate(id);
        setIsMenuOpen(false);
    };

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50
                ? `${theme.bgAlt} shadow-lg ${isDark ? 'shadow-red-950/20' : 'shadow-red-100/50'}`
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => handleNavigate('home')}>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 btn-gradient rounded-xl flex items-center justify-center shadow-lg glow-red">
                            <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                            <span className="text-lg sm:text-xl font-bold text-red-600">SPARK</span>
                            <span className={`text-lg sm:text-xl font-bold ${theme.text}`}>ELEC</span>
                            <p className={`text-[10px] sm:text-xs ${theme.textLight} -mt-1`}>{BUSINESS.tagline}</p>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavigate(item.toLowerCase())}
                                className={`relative py-2 text-sm font-medium transition-colors ${activeSection === item.toLowerCase()
                                    ? 'text-red-500'
                                    : `${theme.textMuted} hover:text-red-500`
                                    }`}
                            >
                                {item}
                                {activeSection === item.toLowerCase() && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                        <button
                            onClick={toggleTheme}
                            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                            className={`p-2.5 rounded-xl ${theme.bgCard} border ${theme.border} hover:border-red-500/50 transition-all`}
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-amber-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-600" />
                            )}
                        </button>

                        <a href={`tel:${BUSINESS.phoneRaw}`} className="hidden sm:flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 btn-gradient text-white font-semibold rounded-xl shadow-lg text-sm sm:text-base glow-red">
                            <Phone className="w-4 h-4" />
                            <span className="hidden md:inline">{BUSINESS.phone}</span>
                            <span className="md:hidden">Call</span>
                        </a>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            className={`lg:hidden p-2 ${theme.text}`}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className={`lg:hidden mt-4 pb-4 ${theme.bgCard} rounded-xl shadow-lg mx-2 px-4 animate-fade-up border ${theme.border}`}>
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavigate(item.toLowerCase())}
                                className={`block w-full text-left py-3 text-lg font-medium border-b ${theme.borderLight} last:border-0 ${activeSection === item.toLowerCase() ? 'text-red-500' : theme.textMuted
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                        <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center justify-center gap-2 mt-4 px-6 py-3 btn-gradient text-white font-semibold rounded-xl">
                            <Phone className="w-4 h-4" /><span>{BUSINESS.phone}</span>
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
