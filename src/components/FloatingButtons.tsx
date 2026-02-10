import { Phone } from 'lucide-react';
import { BUSINESS } from '../data/constants';
import { WhatsAppIcon } from '../icons/CustomIcons';

const FloatingButtons: React.FC = () => (
    <>
        {/* WhatsApp Button */}
        <a
            href={`https://wa.me/${BUSINESS.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        >
            <WhatsAppIcon />
        </a>

        {/* Mobile Call Button */}
        <a
            href={`tel:${BUSINESS.phoneRaw}`}
            aria-label="Call us"
            className="sm:hidden fixed bottom-4 left-4 w-12 h-12 btn-gradient rounded-full flex items-center justify-center shadow-lg z-50 glow-red"
        >
            <Phone className="w-6 h-6 text-white" />
        </a>
    </>
);

export default FloatingButtons;
