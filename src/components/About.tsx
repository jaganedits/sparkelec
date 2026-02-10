import { Shield, Award, Clock } from 'lucide-react';
import { useTheme, getThemeColors } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';
import { stats } from '../data/constants';
import AnimatedCounter from './AnimatedCounter';

const About: React.FC = () => {
    const { isDark } = useTheme();
    const theme = getThemeColors(isDark);
    const [ref, isInView] = useInView();

    return (
        <section id="about" className={`py-16 sm:py-24 ${theme.bgAlt}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div ref={ref}>
                    <div className="text-center mb-12 sm:mb-16">
                        <span className={`inline-block px-4 py-1.5 ${isDark ? 'bg-red-900/50' : 'bg-red-100'} rounded-full text-sm ${isDark ? 'text-red-300' : 'text-red-700'} font-medium mb-4`}>About Us</span>
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
                            Singapore's <span className={isDark ? 'gradient-text-dark' : 'gradient-text'}>Trusted</span> Electricians
                        </h2>
                        <p className={`${theme.textMuted} max-w-2xl mx-auto text-sm sm:text-base ${isInView ? 'animate-fade-up animate-delay-100' : 'opacity-0'}`}>
                            For over 25 years, we've been delivering excellence in electrical services across Singapore. From HDB flats to commercial buildings, we handle it all.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className={`space-y-4 sm:space-y-6 ${isInView ? 'animate-fade-right animate-delay-200' : 'opacity-0'}`}>
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

                        <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${isInView ? 'animate-fade-left animate-delay-300' : 'opacity-0'}`}>
                            {stats.map((stat) => (
                                <div key={stat.label} className={`p-4 sm:p-6 ${theme.bgCard} rounded-2xl border ${theme.borderLight} text-center card-hover transition-all duration-300 shadow-sm`}>
                                    <p className={`text-3xl sm:text-4xl font-bold ${isDark ? 'gradient-text-dark' : 'gradient-text'} mb-2`}>
                                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className={`text-xs sm:text-sm ${theme.textMuted}`}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
