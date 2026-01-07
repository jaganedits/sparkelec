import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { Zap, Phone, Menu, X, Lightbulb, CheckCircle2, ArrowRight, Shield, Award, Clock, ChevronRight, Moon, Sun } from 'lucide-react';
import electricianImage from './assets/images/Gemini_Generated_Image_hyt6k2hyt6k2hyt6.png';

// Types
interface Stat {
    value: number;
    suffix: string;
    label: string;
}

interface Service {
    icon: React.FC;
    title: string;
    desc: string;
    features: string[];
}

interface Project {
    title: string;
    type: string;
    image: string;
}

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

interface ThemeColors {
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

// Theme Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
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

// Custom hook for intersection observer
const useInView = (options: IntersectionObserverInit = {}): [React.RefObject<HTMLDivElement | null>, boolean] => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsInView(true);
        }, { threshold: 0.1, ...options });

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
            observer.disconnect();
        };
    }, []);

    return [ref, isInView];
};

// Animated counter component
interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [ref, isInView] = useInView();

    useEffect(() => {
        if (!isInView) return;
        let startTime: number;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

// Custom Icons
const CableIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" />
        <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" />
        <path d="M21 21v-2h-4" />
        <path d="M3 5h4V3" />
        <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" />
    </svg>
);

const FanIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

const PlugIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-5" />
        <path d="M9 8V2" />
        <path d="M15 8V2" />
        <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
);

const DropletsIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
);

const LightningIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
        <path d="m13 12-3 5h4l-3 5" />
    </svg>
);

const EarthIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
    </svg>
);

const ElectricianWebsite: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            const sections = ['home', 'about', 'services',  'contact'];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 100) setActiveSection(section);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string): void => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const services: Service[] = [
        { icon: CableIcon, title: 'Electrical Re-wiring', desc: 'Complete electrical re-wiring services for HDB, condos, and landed properties.', features: ['Full House Re-wiring', 'Partial Re-wiring', 'Cable Upgrades', 'Safety Compliance'] },
        { icon: () => <Zap className="w-7 h-7" />, title: 'Distribution Board (DB)', desc: 'Professional DB box installation and component replacement including MCB, RCCB, ELR, and EFR.', features: ['DB Box Installation', 'MCB Replacement', 'RCCB Installation', 'ELR/EFR Upgrade'] },
        { icon: () => <Lightbulb className="w-7 h-7" />, title: 'Light Fittings', desc: 'Modern lighting solutions including LED lights, downlights, and track lights.', features: ['LED Lights', 'Downlights', 'Track Lights', 'Feature Lighting'] },
        { icon: FanIcon, title: 'Ceiling Fans', desc: 'Expert ceiling fan installation and replacement services for all brands.', features: ['New Installation', 'Fan Replacement', 'All Brands', 'Speed Control Setup'] },
        { icon: PlugIcon, title: 'Power Sockets & Switches', desc: 'Installation of electrical power sockets, switches, and isolators.', features: ['Power Sockets', 'Light Switches', 'Isolator Installation', 'USB Outlets'] },
        { icon: DropletsIcon, title: 'Water Heater', desc: 'Professional installation of instant and storage water heaters.', features: ['Instant Heaters', 'Storage Heaters', 'Replacement', 'Safety Check'] },
        { icon: LightningIcon, title: 'Lightning Protection', desc: 'Comprehensive lightning protection system installation.', features: ['Risk Assessment', 'System Design', 'Installation', 'Maintenance'] },
        { icon: EarthIcon, title: 'Earthing System', desc: 'Professional earthing system installation and testing.', features: ['Earth Rod Installation', 'Earth Testing', 'System Upgrade', 'Compliance Check'] },
    ];

    const stats: Stat[] = [
        { value: 25, suffix: '+', label: 'Years Experience' },
        { value: 2500, suffix: '+', label: 'Projects Completed' },
        { value: 98, suffix: '%', label: 'Client Satisfaction' },
        { value: 50, suffix: '+', label: 'Team Members' },
    ];

    const projects: Project[] = [
        { title: 'HDB 5-Room Full Rewiring', type: 'Residential', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
        { title: 'Office Building DB Upgrade', type: 'Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop' },
        { title: 'Condo Lighting Installation', type: 'Residential', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop' },
        { title: 'Factory Earthing System', type: 'Industrial', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop' },
    ];

    const navItems: string[] = ['Home', 'About', 'Services', 'Projects', 'Contact'];

    // Theme-aware colors
    const theme: ThemeColors = {
        bg: isDark ? 'bg-gray-950' : 'bg-gray-50',
        bgAlt: isDark ? 'bg-gray-900' : 'bg-white',
        bgCard: isDark ? 'bg-gray-900/80' : 'bg-white',
        bgCardHover: isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50',
        text: isDark ? 'text-gray-100' : 'text-gray-900',
        textMuted: isDark ? 'text-gray-400' : 'text-gray-600',
        textLight: isDark ? 'text-gray-500' : 'text-gray-500',
        border: isDark ? 'border-gray-800' : 'border-gray-200',
        borderLight: isDark ? 'border-gray-800/50' : 'border-gray-100',
    };

    return (
        <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Outfit', sans-serif; }
        
        .gradient-text {
          background: linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #F87171 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-text-dark {
          background: linear-gradient(135deg, #FCA5A5 0%, #F87171 50%, #EF4444 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .btn-gradient {
          background: linear-gradient(135deg, #B91C1C 0%, #DC2626 50%, #EF4444 100%);
        }
        
        .btn-gradient:hover {
          background: linear-gradient(135deg, #991B1B 0%, #B91C1C 50%, #DC2626 100%);
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(220, 38, 38, 0.15);
        }
        
        .dark .card-hover:hover {
          box-shadow: 0 20px 40px rgba(248, 113, 113, 0.1);
        }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-up { animation: fadeUp 0.6s ease-out forwards; opacity: 0; }
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        
        .hero-pattern-light {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC2626' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        .hero-pattern-dark {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EF4444' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        
        .scroll-indicator { animation: bounce 2s infinite; }
        
        .glow-red {
          box-shadow: 0 0 40px rgba(220, 38, 38, 0.3);
        }
        
        .dark .glow-red {
          box-shadow: 0 0 40px rgba(248, 113, 113, 0.2);
        }
      `}</style>

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50
                    ? `${theme.bgAlt} shadow-lg ${isDark ? 'shadow-red-950/20' : 'shadow-red-100/50'}`
                    : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 btn-gradient rounded-xl flex items-center justify-center shadow-lg glow-red">
                                <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                            </div>
                            <div>
                                <span className="text-lg sm:text-xl font-bold text-red-600">SPARK</span>
                                <span className={`text-lg sm:text-xl font-bold ${theme.text}`}>ELEC</span>
                                <p className={`text-[10px] sm:text-xs ${theme.textLight} -mt-1`}>Licensed Electricians</p>
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
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
                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className={`p-2.5 rounded-xl ${theme.bgCard} border ${theme.border} hover:border-red-500/50 transition-all`}
                            >
                                {isDark ? (
                                    <Sun className="w-5 h-5 text-amber-400" />
                                ) : (
                                    <Moon className="w-5 h-5 text-gray-600" />
                                )}
                            </button>

                            <a href="tel:+6591234567" className="hidden sm:flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 btn-gradient text-white font-semibold rounded-xl shadow-lg text-sm sm:text-base glow-red">
                                <Phone className="w-4 h-4" />
                                <span className="hidden md:inline">+65 9123 4567</span>
                                <span className="md:hidden">Call</span>
                            </a>

                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden p-2 ${theme.text}`}>
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className={`lg:hidden mt-4 pb-4 ${theme.bgCard} rounded-xl shadow-lg mx-2 px-4 animate-fade-up border ${theme.border}`}>
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`block w-full text-left py-3 text-lg font-medium border-b ${theme.borderLight} last:border-0 ${activeSection === item.toLowerCase() ? 'text-red-500' : theme.textMuted
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                            <a href="tel:+6591234567" className="flex items-center justify-center gap-2 mt-4 px-6 py-3 btn-gradient text-white font-semibold rounded-xl">
                                <Phone className="w-4 h-4" /><span>+65 9123 4567</span>
                            </a>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isDark ? 'hero-pattern-dark' : 'hero-pattern-light'}`}>
                <div className={`absolute inset-0 ${isDark
                        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-red-950/30'
                        : 'bg-gradient-to-br from-red-50 via-white to-orange-50'
                    }`}></div>
                <div className={`absolute top-20 right-0 w-72 sm:w-96 h-72 sm:h-96 ${isDark ? 'bg-red-600' : 'bg-red-400'} rounded-full blur-3xl opacity-20`}></div>
                <div className={`absolute bottom-20 left-0 w-64 sm:w-80 h-64 sm:h-80 ${isDark ? 'bg-orange-600' : 'bg-orange-400'} rounded-full blur-3xl opacity-20`}></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <div className="animate-fade-up">
                                <span className={`inline-flex items-center gap-2 px-4 py-2 ${isDark ? 'bg-red-900/50' : 'bg-red-100'} rounded-full text-sm ${isDark ? 'text-red-300' : 'text-red-700'} font-medium mb-6`}>
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    EMA Licensed Electricians in Singapore
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-up animate-delay-100">
                                <span className={theme.text}>Your Trusted</span><br />
                                <span className={isDark ? 'gradient-text-dark' : 'gradient-text'}>Electrical</span><br />
                                <span className={theme.text}>Experts</span>
                            </h1>

                            <p className={`text-base sm:text-lg md:text-xl ${theme.textMuted} mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-up animate-delay-200`}>
                                Professional electrical services for HDB, condos, landed properties, and commercial spaces. Quality work, fair pricing, and 24/7 emergency support.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animate-delay-300">
                                <button onClick={() => scrollToSection('contact')} className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 btn-gradient text-white font-semibold rounded-xl shadow-lg glow-red">
                                    Get Free Quote<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => scrollToSection('services')}
                                    className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 ${theme.bgCard} border-2 border-red-600 text-red-500 font-semibold rounded-xl hover:bg-red-600 hover:text-white transition-all`}
                                >
                                    Our Services<ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-10 sm:mt-12 animate-fade-up">
                                <div className={`flex items-center gap-2 ${theme.bgCard} px-4 py-2 rounded-full shadow-md border ${theme.borderLight}`}>
                                    <Shield className="w-5 h-5 text-red-500" /><span className={`text-sm ${theme.text} font-medium`}>EMA Licensed</span>
                                </div>
                                <div className={`flex items-center gap-2 ${theme.bgCard} px-4 py-2 rounded-full shadow-md border ${theme.borderLight}`}>
                                    <Award className="w-5 h-5 text-red-500" /><span className={`text-sm ${theme.text} font-medium`}>BCA Registered</span>
                                </div>
                                <div className={`flex items-center gap-2 ${theme.bgCard} px-4 py-2 rounded-full shadow-md border ${theme.borderLight}`}>
                                    <Clock className="w-5 h-5 text-red-500" /><span className={`text-sm ${theme.text} font-medium`}>24/7 Emergency</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative animate-fade-up animate-delay-300 mt-8 lg:mt-0">
                            <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
                                <div className="absolute inset-4 sm:inset-8 bg-gradient-to-br from-red-600 to-orange-500 rounded-3xl transform rotate-6"></div>
                                <div className={`relative ${theme.bgCard} rounded-3xl overflow-hidden shadow-2xl`}>
                                    <img  src={electricianImage}  alt="Professional Electrician" className="w-full h-[500px] object-cover" />
                                </div>
                                <div className={`absolute -bottom-4 sm:-bottom-6 left-2 right-2 sm:left-4 sm:right-4 ${theme.bgCard} rounded-2xl p-4 sm:p-6 shadow-xl border ${theme.borderLight}`}>
                                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                                        <div>
                                            <p className="text-xl sm:text-2xl font-bold text-red-500"><AnimatedCounter end={15} suffix="+" /></p>
                                            <p className={`text-[10px] sm:text-xs ${theme.textLight}`}>Years Exp</p>
                                        </div>
                                        <div className={`border-x ${theme.border}`}>
                                            <p className="text-xl sm:text-2xl font-bold text-red-500"><AnimatedCounter end={2500} suffix="+" /></p>
                                            <p className={`text-[10px] sm:text-xs ${theme.textLight}`}>Projects</p>
                                        </div>
                                        <div>
                                            <p className="text-xl sm:text-2xl font-bold text-red-500"><AnimatedCounter end={98} suffix="%" /></p>
                                            <p className={`text-[10px] sm:text-xs ${theme.textLight}`}>Satisfaction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator hidden sm:block">
                    <div className={`w-6 h-10 rounded-full border-2 ${isDark ? 'border-red-800' : 'border-red-300'} flex justify-center pt-2`}>
                        <div className="w-1.5 h-3 bg-red-500 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={`py-16 sm:py-24 ${theme.bgAlt}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <AboutContent stats={stats} theme={theme} isDark={isDark} />
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className={`py-16 sm:py-24 ${theme.bg}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <ServicesContent services={services} theme={theme} isDark={isDark} />
                </div>
            </section>


            {/* Contact Section */}
            <section id="contact" className={`py-16 sm:py-24 ${theme.bg}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <ContactContent theme={theme} isDark={isDark} />
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-12 ${isDark ? 'bg-gray-950' : 'bg-gray-900'} text-white`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 btn-gradient rounded-xl flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <span className="text-lg font-bold text-red-400">SPARK</span>
                                    <span className="text-lg font-bold">ELEC</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm">Your trusted electrical partner in Singapore since 2009. Licensed, insured, and committed to quality.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-white">Services</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="hover:text-red-400 cursor-pointer transition-colors">Electrical Re-wiring</li>
                                <li className="hover:text-red-400 cursor-pointer transition-colors">DB Installation</li>
                                <li className="hover:text-red-400 cursor-pointer transition-colors">Light Fittings</li>
                                <li className="hover:text-red-400 cursor-pointer transition-colors">Ceiling Fans</li>
                                <li className="hover:text-red-400 cursor-pointer transition-colors">Power Sockets</li>
                                <li className="hover:text-red-400 cursor-pointer transition-colors">Water Heaters</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-white">Contact</h4>
                            <div className="flex items-center gap-3 p-4 bg-red-600/20 rounded-xl border border-red-600/30">
                                <div className="w-12 h-12 btn-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold">+65 9123 4567</p>
                                    <p className="text-xs text-red-300">24/7 Emergency Line</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col sm:flex-row justify-between items-center pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-700'} gap-4`}>
                        <p className="text-sm text-gray-400 text-center sm:text-left">© 2025 SparkElec Pte Ltd. All rights reserved. UEN: 200912345A</p>
                    </div>
                </div>
            </footer>

            {/* WhatsApp Button */}
            <a href="https://wa.me/6591234567" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50">
                <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>

            {/* Mobile Call Button */}
            <a href="tel:+6591234567" className="sm:hidden fixed bottom-4 left-4 w-12 h-12 btn-gradient rounded-full flex items-center justify-center shadow-lg z-50 glow-red">
                <Phone className="w-6 h-6 text-white" />
            </a>
        </div>
    );
};

// About Content Component
interface AboutContentProps {
    stats: Stat[];
    theme: ThemeColors;
    isDark: boolean;
}

const AboutContent: React.FC<AboutContentProps> = ({ stats, theme, isDark }) => {
    const [ref, isInView] = useInView();

    return (
        <div ref={ref}>
            <div className="text-center mb-12 sm:mb-16">
                <span className={`inline-block px-4 py-1.5 ${isDark ? 'bg-red-900/50' : 'bg-red-100'} rounded-full text-sm ${isDark ? 'text-red-300' : 'text-red-700'} font-medium mb-4`}>About Us</span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
                    Singapore's <span className={isDark ? 'gradient-text-dark' : 'gradient-text'}>Trusted</span> Electricians
                </h2>
                <p className={`${theme.textMuted} max-w-2xl mx-auto text-sm sm:text-base ${isInView ? 'animate-fade-up animate-delay-100' : 'opacity-0'}`}>
                    For over 15 years, we've been delivering excellence in electrical services across Singapore. From HDB flats to commercial buildings, we handle it all.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={`space-y-4 sm:space-y-6 ${isInView ? 'animate-fade-up animate-delay-200' : 'opacity-0'}`}>
                    <div className={`p-4 sm:p-6 ${theme.bg} rounded-2xl border ${theme.borderLight} card-hover transition-all duration-300`}>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                            <div className={`w-10 h-10 ${isDark ? 'bg-red-900/50' : 'bg-red-100'} rounded-xl flex items-center justify-center`}>
                                <Shield className="w-5 h-5 text-red-500" />
                            </div>
                            Safety First Approach
                        </h3>
                        <p className={`${theme.textMuted} text-sm sm:text-base`}>Every project adheres to SS 638 standards and EMA regulations. We never compromise on safety.</p>
                    </div>

                    <div className={`p-4 sm:p-6 ${theme.bg} rounded-2xl border ${theme.borderLight} card-hover transition-all duration-300`}>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                            <div className={`w-10 h-10 ${isDark ? 'bg-red-900/50' : 'bg-red-100'} rounded-xl flex items-center justify-center`}>
                                <Award className="w-5 h-5 text-red-500" />
                            </div>
                            Licensed Professionals
                        </h3>
                        <p className={`${theme.textMuted} text-sm sm:text-base`}>Our team consists of EMA-licensed electricians with extensive training and certifications.</p>
                    </div>

                    <div className={`p-4 sm:p-6 ${theme.bg} rounded-2xl border ${theme.borderLight} card-hover transition-all duration-300`}>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                            <div className={`w-10 h-10 ${isDark ? 'bg-red-900/50' : 'bg-red-100'} rounded-xl flex items-center justify-center`}>
                                <Clock className="w-5 h-5 text-red-500" />
                            </div>
                            24/7 Emergency Support
                        </h3>
                        <p className={`${theme.textMuted} text-sm sm:text-base`}>Electrical emergencies don't wait. Neither do we. Available round the clock for urgent repairs.</p>
                    </div>
                </div>

                <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${isInView ? 'animate-fade-up animate-delay-300' : 'opacity-0'}`}>
                    {stats.map((stat, i) => (
                        <div key={i} className={`p-4 sm:p-6 ${theme.bgCard} rounded-2xl border ${theme.borderLight} text-center card-hover transition-all duration-300 shadow-sm`}>
                            <p className={`text-3xl sm:text-4xl font-bold ${isDark ? 'gradient-text-dark' : 'gradient-text'} mb-2`}>
                                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                            </p>
                            <p className={`text-xs sm:text-sm ${theme.textMuted}`}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Services Content Component
interface ServicesContentProps {
    services: Service[];
    theme: ThemeColors;
    isDark: boolean;
}

const ServicesContent: React.FC<ServicesContentProps> = ({ services, theme, isDark }) => {
    const [ref, isInView] = useInView();

    return (
        <div ref={ref}>
            <div className="text-center mb-12 sm:mb-16">
                <span className={`inline-block px-4 py-1.5 ${isDark ? 'bg-red-900/50' : 'bg-red-100'} rounded-full text-sm ${isDark ? 'text-red-300' : 'text-red-700'} font-medium mb-4`}>Our Services</span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
                    Complete <span className={isDark ? 'gradient-text-dark' : 'gradient-text'}>Electrical</span> Solutions
                </h2>
                <p className={`${theme.textMuted} max-w-2xl mx-auto text-sm sm:text-base ${isInView ? 'animate-fade-up animate-delay-100' : 'opacity-0'}`}>
                    From basic repairs to complete electrical installations, we've got all your needs covered.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className={`group p-4 sm:p-6 ${theme.bgCard} rounded-2xl border ${theme.borderLight} hover:border-red-500/30 transition-all duration-300 card-hover cursor-pointer ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
                        style={{ animationDelay: `${(i + 2) * 0.05}s` }}
                    >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 btn-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg text-white">
                            <service.icon />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold mb-2">{service.title}</h3>
                        <p className={`${theme.textMuted} text-xs sm:text-sm mb-4`}>{service.desc}</p>
                        <ul className="space-y-1.5 sm:space-y-2">
                            {service.features.map((feature, j) => (
                                <li key={j} className={`flex items-center gap-2 text-xs sm:text-sm ${theme.textMuted}`}>
                                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />{feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};


// Contact Content Component - SIMPLIFIED TO ONLY SHOW PHONE
interface ContactContentProps {
    theme: ThemeColors;
    isDark: boolean;
}

const ContactContent: React.FC<ContactContentProps> = ({ theme, isDark }) => {
    const [ref, isInView] = useInView();

    return (
        <div ref={ref}>
            <div className="text-center mb-12 sm:mb-16">
                <span className={`inline-block px-4 py-1.5 ${isDark ? 'bg-red-900/50' : 'bg-red-100'} rounded-full text-sm ${isDark ? 'text-red-300' : 'text-red-700'} font-medium mb-4`}>Contact Us</span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
                    Get Your <span className={isDark ? 'gradient-text-dark' : 'gradient-text'}>Free Quote</span>
                </h2>
                <p className={`${theme.textMuted} max-w-2xl mx-auto text-sm sm:text-base ${isInView ? 'animate-fade-up animate-delay-100' : 'opacity-0'}`}>
                    Ready to start your project? Contact us today for a free consultation and quote.
                </p>
            </div>

            <div className={`max-w-lg mx-auto ${isInView ? 'animate-fade-up animate-delay-200' : 'opacity-0'}`}>
                {/* Large Call Button */}
                <a
                    href="tel:+6591234567"
                    className={`block p-6 sm:p-8 ${theme.bgCard} rounded-3xl border ${theme.borderLight} shadow-xl hover:shadow-2xl transition-all duration-300 card-hover`}
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 btn-gradient rounded-2xl flex items-center justify-center mb-6 shadow-lg glow-red">
                            <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                        </div>
                        <h3 className={`text-2xl sm:text-3xl font-bold ${theme.text} mb-2`}>Call Us Now</h3>
                        <p className="text-3xl sm:text-4xl font-bold text-red-500 mb-3">+65 9123 4567</p>
                        <p className={`text-sm ${theme.textMuted}`}>24/7 Emergency Line Available</p>

                        <div className={`mt-6 w-full p-4 ${isDark ? 'bg-red-900/30' : 'bg-red-50'} rounded-xl border ${isDark ? 'border-red-800/50' : 'border-red-200'}`}>
                            <div className="flex items-center justify-center gap-2">
                                <Clock className="w-5 h-5 text-red-500" />
                                <span className={`text-sm font-medium ${isDark ? 'text-red-300' : 'text-red-700'}`}>
                                    Available 24 hours, 7 days a week
                                </span>
                            </div>
                        </div>
                    </div>
                </a>

                {/* WhatsApp Alternative */}
                <a
                    href="https://wa.me/6591234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 mt-6 p-4 ${theme.bgCard} rounded-xl border ${theme.borderLight} hover:border-green-500/50 transition-all group`}
                >
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </div>
                    <span className={`font-medium ${theme.text}`}>Or message us on WhatsApp</span>
                </a>
            </div>
        </div>
    );
};

// Main App with Theme Provider
const App: React.FC = () => (
    <ThemeProvider>
        <ElectricianWebsite />
    </ThemeProvider>
);

export default App;