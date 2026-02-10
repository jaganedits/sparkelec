import { Phone, Clock } from 'lucide-react';
import { useTheme, getThemeColors } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';
import { BUSINESS } from '../data/constants';
import { WhatsAppIcon } from '../icons/CustomIcons';

const Contact: React.FC = () => {
    const { isDark } = useTheme();
    const theme = getThemeColors(isDark);
    const [ref, isInView] = useInView();

    return (
        <section id="contact" className={`py-16 sm:py-24 ${theme.bg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                        <a
                            href={`tel:${BUSINESS.phoneRaw}`}
                            className={`block p-6 sm:p-8 ${theme.bgCard} rounded-3xl border ${theme.borderLight} shadow-xl hover:shadow-2xl transition-all duration-300 card-hover`}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 btn-gradient rounded-2xl flex items-center justify-center mb-6 shadow-lg glow-red">
                                    <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                </div>
                                <h3 className={`text-2xl sm:text-3xl font-bold ${theme.text} mb-2`}>Call Us Now</h3>
                                <p className="text-3xl sm:text-4xl font-bold text-red-500 mb-3">{BUSINESS.phone}</p>
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

                        <a
                            href={`https://wa.me/${BUSINESS.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-3 mt-6 p-4 ${theme.bgCard} rounded-xl border ${theme.borderLight} hover:border-green-500/50 transition-all group`}
                        >
                            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <WhatsAppIcon className="w-6 h-6" />
                            </div>
                            <span className={`font-medium ${theme.text}`}>Or message us on WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
