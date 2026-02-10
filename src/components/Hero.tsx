import { Shield, Award, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { useTheme, getThemeColors } from '../context/ThemeContext';
import { BUSINESS } from '../data/constants';
import AnimatedCounter from './AnimatedCounter';
import electricianImage from '../assets/images/heropagewall.png';

interface HeroProps {
    onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    const { isDark } = useTheme();
    const theme = getThemeColors(isDark);

    return (
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
                            <button onClick={() => onNavigate('contact')} className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 btn-gradient text-white font-semibold rounded-xl shadow-lg glow-red">
                                Get Free Quote<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => onNavigate('services')}
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
                                <img src={electricianImage} alt={`${BUSINESS.name} - Professional electrician at work in Singapore`} className="w-full h-[500px] object-cover" />
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
    );
};

export default Hero;
