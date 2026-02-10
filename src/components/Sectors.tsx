import { CheckCircle2 } from 'lucide-react';
import { useTheme, getThemeColors } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';
import { sectors, customerTypes } from '../data/constants';

const Sectors: React.FC = () => {
    const { isDark } = useTheme();
    const theme = getThemeColors(isDark);
    const [ref, isInView] = useInView();

    return (
        <section id="sectors" className={`py-16 sm:py-24 ${isDark ? theme.bgAlt : theme.bgAlt}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div ref={ref}>
                    <div className="text-center mb-12 sm:mb-16">
                        <span className={`inline-block px-4 py-1.5 ${isDark ? 'bg-red-900/50' : 'bg-red-100'} rounded-full text-sm ${isDark ? 'text-red-300' : 'text-red-700'} font-medium mb-4`}>Sectors We Serve</span>
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
                            Trusted Across <span className={isDark ? 'gradient-text-dark' : 'gradient-text'}>All Sectors</span>
                        </h2>
                        <p className={`${theme.textMuted} max-w-2xl mx-auto text-sm sm:text-base ${isInView ? 'animate-fade-up animate-delay-100' : 'opacity-0'}`}>
                            From residential homes to commercial spaces, we deliver reliable electrical solutions for every need.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
                        {sectors.map((sector, i) => (
                            <div
                                key={sector.title}
                                className={`group p-6 sm:p-8 ${theme.bgCard} rounded-2xl border ${theme.borderLight} hover:border-red-500/30 transition-all duration-300 card-hover text-center ${isInView ? (i % 2 === 0 ? 'animate-fade-left' : 'animate-fade-right') : 'opacity-0'}`}
                                style={{ animationDelay: `${(i + 2) * 0.1}s` }}
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 btn-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                    <sector.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">{sector.title}</h3>
                                <p className={`${theme.textMuted} text-sm`}>{sector.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className={`${theme.bgCard} rounded-3xl border ${theme.borderLight} p-6 sm:p-10 ${isInView ? 'animate-scale-up animate-delay-200' : 'opacity-0'}`}>
                        <div className="text-center mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">Our Repeated Customers</h3>
                            <p className={`${theme.textMuted} text-sm`}>Trusted by businesses across Singapore</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                            {customerTypes.map((customer) => (
                                <div
                                    key={customer.name}
                                    className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl ${isDark ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-gray-50 hover:bg-gray-100'} transition-colors`}
                                >
                                    <customer.icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm font-medium">{customer.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 pt-6 border-t border-dashed border-gray-300 dark:border-gray-700">
                            {['Licensed & Insured', 'EMA Registered', 'BCA Approved'].map((badge) => (
                                <div key={badge} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                                    <span className={`text-xs sm:text-sm font-medium ${theme.textMuted}`}>{badge}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sectors;
