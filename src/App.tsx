import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme, getThemeColors } from './context/ThemeContext';
import { SECTIONS } from './data/constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sectors from './components/Sectors';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

const ElectricianWebsite: React.FC = () => {
    const { isDark } = useTheme();
    const theme = getThemeColors(isDark);
    const [scrollY, setScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            for (const section of SECTIONS) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 100) setActiveSection(section);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string): void => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}>
            <Navbar scrollY={scrollY} activeSection={activeSection} onNavigate={scrollToSection} />
            <main>
                <Hero onNavigate={scrollToSection} />
                <About />
                <Sectors />
                <Services />
                <Contact />
            </main>
            <Footer />
            <FloatingButtons />
        </div>
    );
};

const App: React.FC = () => (
    <ThemeProvider>
        <ElectricianWebsite />
    </ThemeProvider>
);

export default App;
