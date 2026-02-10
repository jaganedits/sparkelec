import type React from 'react';

export const CableIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" />
        <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" />
        <path d="M21 21v-2h-4" />
        <path d="M3 5h4V3" />
        <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" />
    </svg>
);

export const FanIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

export const PlugIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-5" />
        <path d="M9 8V2" />
        <path d="M15 8V2" />
        <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
);

export const DropletsIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
);

export const LightningIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
        <path d="m13 12-3 5h4l-3 5" />
    </svg>
);

export const EarthIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
    </svg>
);

export const ScissorsIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="6" cy="6" r="3" />
        <path d="M8.12 8.12 12 12" />
        <path d="M20 4 8.12 15.88" />
        <circle cx="6" cy="18" r="3" />
        <path d="M14.8 14.8 20 20" />
    </svg>
);

export const SingaporeFlag: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 100 100" className={className} aria-label="Singapore flag">
        <circle cx="50" cy="50" r="50" fill="#FFFFFF" />
        <path d="M50 0 A50 50 0 0 1 100 50 L0 50 A50 50 0 0 1 50 0Z" fill="#ED2939" />
        <g fill="#FFFFFF" transform="translate(16, 6)">
            <path d="M14 2a12 12 0 0 0 0 24 12 12 0 1 1 0-24z" />
            <g transform="translate(14, 3)">
                <polygon points="4,0 5,2.8 8,2.8 5.5,4.6 6.4,7.4 4,5.6 1.6,7.4 2.5,4.6 0,2.8 3,2.8" transform="translate(0,-1.5) scale(0.65)" />
                <polygon points="4,0 5,2.8 8,2.8 5.5,4.6 6.4,7.4 4,5.6 1.6,7.4 2.5,4.6 0,2.8 3,2.8" transform="translate(7,-1.5) scale(0.65)" />
                <polygon points="4,0 5,2.8 8,2.8 5.5,4.6 6.4,7.4 4,5.6 1.6,7.4 2.5,4.6 0,2.8 3,2.8" transform="translate(10,4.5) scale(0.65)" />
                <polygon points="4,0 5,2.8 8,2.8 5.5,4.6 6.4,7.4 4,5.6 1.6,7.4 2.5,4.6 0,2.8 3,2.8" transform="translate(3.5,7) scale(0.65)" />
                <polygon points="4,0 5,2.8 8,2.8 5.5,4.6 6.4,7.4 4,5.6 1.6,7.4 2.5,4.6 0,2.8 3,2.8" transform="translate(-3,4.5) scale(0.65)" />
            </g>
        </g>
        <circle cx="50" cy="50" r="48" fill="none" stroke="#D1D5DB" strokeWidth="1.5" />
    </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 sm:w-7 sm:h-7' }) => (
    <svg viewBox="0 0 24 24" className={`${className} text-white fill-current`}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);
