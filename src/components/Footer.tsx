import { Zap, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { BUSINESS } from '../data/constants';
import { SingaporeFlag } from '../icons/CustomIcons';

const Footer: React.FC = () => {
    const { isDark } = useTheme();
    const currentYear = new Date().getFullYear();

    return (
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
                        <p className="text-gray-400 text-sm">Your trusted electrical partner in Singapore since {BUSINESS.foundedYear}. Licensed, insured, and committed to quality.</p>
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
                                <div className="flex items-center gap-2">
                                    <SingaporeFlag className="w-5 h-5 flex-shrink-0" />
                                    <p className="text-white font-semibold">{BUSINESS.phone}</p>
                                </div>
                                <p className="text-xs text-red-300 mt-0.5">24/7 Emergency Line</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col sm:flex-row justify-between items-center pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-700'} gap-4`}>
                    <p className="text-sm text-gray-400 text-center sm:text-left">&copy; {currentYear} {BUSINESS.name}. All rights reserved. UEN: {BUSINESS.uen}</p>
                    <p className="text-sm text-gray-500 text-center sm:text-right">Powered by <a href="https://github.com/jaganedits" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">Jaganedits</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
