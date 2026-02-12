export const PRIMARY_BLUE = "#1E5EFF";
export const LIGHT_BLUE = "#6EC1FF";
export const TEAL = "#22E6C3";
export const DARK_BG = "#020617";
export const LIGHT_BG = "#F8FAFC";

export const getServiceColors = (theme: string) => {
    switch (theme) {
        case 'teal': return {
            bg: 'bg-teal-50',
            text: 'text-teal-600',
            accent: 'bg-teal-600',
            gradient: 'from-teal-500/20 to-transparent',
            glow: 'shadow-[0_0_30px_rgba(34,230,195,0.2)]',
            border: 'hover:border-teal-200'
        };
        case 'indigo': return {
            bg: 'bg-indigo-50',
            text: 'text-indigo-600',
            accent: 'bg-indigo-600',
            gradient: 'from-indigo-500/20 to-transparent',
            glow: 'shadow-[0_0_30px_rgba(79,70,229,0.2)]',
            border: 'hover:border-indigo-200'
        };
        case 'rose': return {
            bg: 'bg-rose-50',
            text: 'text-rose-600',
            accent: 'bg-rose-600',
            gradient: 'from-rose-500/20 to-transparent',
            glow: 'shadow-[0_0_30px_rgba(225,29,72,0.2)]',
            border: 'hover:border-rose-200'
        };
        case 'amber': return {
            bg: 'bg-amber-50',
            text: 'text-amber-600',
            accent: 'bg-amber-600',
            gradient: 'from-amber-500/20 to-transparent',
            glow: 'shadow-[0_0_30px_rgba(217,119,6,0.2)]',
            border: 'hover:border-amber-200'
        };
        case 'emerald': return {
            bg: 'bg-emerald-50',
            text: 'text-emerald-600',
            accent: 'bg-emerald-600',
            gradient: 'from-emerald-500/20 to-transparent',
            glow: 'shadow-[0_0_30px_rgba(16,185,129,0.2)]',
            border: 'hover:border-emerald-200'
        };
        default: return {
            bg: 'bg-blue-50',
            text: 'text-blue-600',
            accent: 'bg-blue-600',
            gradient: 'from-blue-500/20 to-transparent',
            glow: 'shadow-[0_0_30px_rgba(30,94,255,0.2)]',
            border: 'hover:border-blue-200'
        };
    }
};
