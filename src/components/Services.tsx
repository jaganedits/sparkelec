import { CheckCircle2 } from 'lucide-react';
import { useTheme, getThemeColors } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';
import { services } from '../data/constants';

const Services: React.FC = () => {
    const { isDark } = useTheme();
    const theme = getThemeColors(isDark);
    const [ref, isInView] = useInView();

    return (
        <section id="services" className={`py-16 sm:py-24 ${theme.bg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                                key={service.title}
                                className={`group p-4 sm:p-6 ${theme.bgCard} rounded-2xl border ${theme.borderLight} hover:border-red-500/30 transition-all duration-300 card-hover cursor-pointer ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${(i + 2) * 0.05}s` }}
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 btn-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg text-white">
                                    <service.icon />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold mb-2">{service.title}</h3>
                                <p className={`${theme.textMuted} text-xs sm:text-sm mb-4`}>{service.desc}</p>
                                <ul className="space-y-1.5 sm:space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className={`flex items-center gap-2 text-xs sm:text-sm ${theme.textMuted}`}>
                                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />{feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
