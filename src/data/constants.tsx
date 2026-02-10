import { Zap, Lightbulb } from 'lucide-react';
import { CableIcon, FanIcon, PlugIcon, DropletsIcon, LightningIcon, EarthIcon } from '../icons/CustomIcons';
import type { Stat, Service } from '../types';

export const BUSINESS = {
    name: 'SparkElec Pte Ltd',
    phone: '+65 9123 4567',
    phoneRaw: '+6591234567',
    whatsapp: '6591234567',
    uen: '200912345A',
    foundedYear: 2009,
    tagline: 'Licensed Electricians',
    canonical: 'https://sgelectrician.sg/',
} as const;

export const NAV_ITEMS = ['Home', 'About', 'Services', 'Contact'] as const;

export const SECTIONS = ['home', 'about', 'services', 'contact'] as const;

export const stats: Stat[] = [
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 2500, suffix: '+', label: 'Projects Completed' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 50, suffix: '+', label: 'Team Members' },
];

export const services: Service[] = [
    { icon: CableIcon, title: 'Electrical Re-wiring', desc: 'Complete electrical re-wiring services for HDB, condos, and landed properties.', features: ['Full House Re-wiring', 'Partial Re-wiring', 'Cable Upgrades', 'Safety Compliance'] },
    { icon: () => <Zap className="w-7 h-7" />, title: 'Distribution Board (DB)', desc: 'Professional DB box installation and component replacement including MCB, RCCB, ELR, and EFR.', features: ['DB Box Installation', 'MCB Replacement', 'RCCB Installation', 'ELR/EFR Upgrade'] },
    { icon: () => <Lightbulb className="w-7 h-7" />, title: 'Light Fittings', desc: 'Modern lighting solutions including LED lights, downlights, and track lights.', features: ['LED Lights', 'Downlights', 'Track Lights', 'Feature Lighting'] },
    { icon: FanIcon, title: 'Ceiling Fans', desc: 'Expert ceiling fan installation and replacement services for all brands.', features: ['New Installation', 'Fan Replacement', 'All Brands', 'Speed Control Setup'] },
    { icon: PlugIcon, title: 'Power Sockets & Switches', desc: 'Installation of electrical power sockets, switches, and isolators.', features: ['Power Sockets', 'Light Switches', 'Isolator Installation', 'USB Outlets'] },
    { icon: DropletsIcon, title: 'Water Heater', desc: 'Professional installation of instant and storage water heaters.', features: ['Instant Heaters', 'Storage Heaters', 'Replacement', 'Safety Check'] },
    { icon: LightningIcon, title: 'Lightning Protection', desc: 'Comprehensive lightning protection system installation.', features: ['Risk Assessment', 'System Design', 'Installation', 'Maintenance'] },
    { icon: EarthIcon, title: 'Earthing System', desc: 'Professional earthing system installation and testing.', features: ['Earth Rod Installation', 'Earth Testing', 'System Upgrade', 'Compliance Check'] },
];
