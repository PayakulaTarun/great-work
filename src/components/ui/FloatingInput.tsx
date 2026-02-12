import React, { useState } from 'react';
import { User, Mail, Smartphone, Briefcase, Layout, ChevronDown, DollarSign, MessageSquare, Send, Loader2 } from 'lucide-react';

interface FloatingInputProps {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    icon: any;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const FloatingInput = ({ label, name, type = 'text', required = false, icon: Icon, value, onChange }: FloatingInputProps) => {
    const [focused, setFocused] = useState(false);
    const hasValue = value !== '';

    return (
        <div className="relative group">
            <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focused || hasValue ? 'text-[#1E5EFF]' : 'text-slate-400'}`}>
                <Icon size={18} />
            </div>
            <input
                type={type}
                name={name}
                required={required}
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={`w-full bg-slate-50 border-2 rounded-2xl pl-12 pr-6 py-5 outline-none transition-all duration-300 text-base md:text-lg text-slate-800 font-medium 
          ${focused ? 'border-[#1E5EFF] bg-white ring-4 ring-[#1E5EFF]/5' : 'border-slate-100 hover:border-slate-200'}`}
            />
            <label className={`absolute left-12 transition-all duration-300 pointer-events-none 
        ${focused || hasValue ? 'top-[-10px] text-[10px] bg-white px-2 left-10 font-black uppercase tracking-widest text-[#1E5EFF]' : 'top-1/2 -translate-y-1/2 text-slate-400 font-medium'}`}>
                {label}{required && '*'}
            </label>
        </div>
    );
};

export default FloatingInput;
