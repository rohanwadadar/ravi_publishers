import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
        name: "Enlight Core",
        path: "/series/enlight",
        icon: "fa-book-open-reader",
        desc: "NCERT/CBSE Based",
        color: "from-[#EC1C24] to-[#c1121d]",
        shadow: "shadow-red-500/20",
        badge: "Updated"
    },
    {
        name: "Semester Series",
        path: "/series/enlight",
        icon: "fa-calendar-days",
        desc: "Full Semester",
        color: "from-[#9C27B0] to-[#7B1FA2]",
        shadow: "shadow-purple-500/20"
    },
    {
        name: "Term Series",
        path: "/series/enlight",
        icon: "fa-calendar-week",
        desc: "Term Based",
        color: "from-[#00BCD4] to-[#0097A7]",
        shadow: "shadow-cyan-500/20"
    },
    {
        name: "Work Books",
        path: "/workbooks",
        icon: "fa-pen-clip",
        desc: "Practice Books",
        color: "from-[#2E3092] to-[#1a1c6a]",
        shadow: "shadow-blue-500/20",
        badge: "Popular"
    },
    {
        name: "Kits",
        path: "/kits-flash",
        icon: "fa-box-archive",
        desc: "Complete Kits",
        color: "from-[#FFA500] to-[#FF8C00]",
        shadow: "shadow-orange-500/20"
    },
    {
        name: "Languages",
        path: "/languages",
        icon: "fa-language",
        desc: "Regional Books",
        color: "from-[#01A651] to-[#008c44]",
        shadow: "shadow-green-500/20"
    },
];

const CategoryCard = ({ cat, idx }) => (
    <Link
        to={cat.path}
        className="group flex flex-col items-center animate-in slide-in-up"
        style={{ animationDelay: `${idx * 150}ms` }}
    >
        <div className={`w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] bg-gradient-to-br ${cat.color} rounded-[32px] md:rounded-[40px] flex items-center justify-center mb-6 transform group-hover:scale-[1.03] group-hover:-translate-y-2 transition-all duration-500 shadow-2xl ${cat.shadow} border-4 border-white overflow-hidden relative`}>
            {/* Decorative Patterns */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:10px_10px]"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-white/20 transition-colors"></div>

            {/* Dynamic Badge */}
            {cat.badge && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-lg z-20">
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#231F20]">{cat.badge}</span>
                </div>
            )}

            <i className={`fas ${cat.icon} text-4xl md:text-5xl text-white relative z-10 drop-shadow-xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}></i>

            {/* Glass Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.2s] ease-in-out opacity-40"></div>
        </div>

        <div className="text-center px-2">
            <h3 className="font-outfit font-black text-[12px] md:text-[14px] uppercase tracking-wider text-[#231F20] group-hover:text-[#EC1C24] transition-colors duration-300">
                {cat.name}
            </h3>
            <p className="text-[9px] md:text-[10px] text-gray-400 mt-2 uppercase font-bold tracking-[0.2em] opacity-80 group-hover:text-gray-600 transition-colors">
                {cat.desc}
            </p>
        </div>
    </Link>
);

const Categories = () => {
    return (
        <section className="relative py-20 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 overflow-hidden bg-white">
            {/* Decorative background text */}
            <div className="absolute top-10 right-0 select-none pointer-events-none opacity-[0.02] font-black text-[15vw] md:text-[12vw] leading-none text-[#231F20] translate-x-1/4">
                LIBRARY
            </div>
            <div className="absolute bottom-10 left-0 select-none pointer-events-none opacity-[0.02] font-black text-[15vw] md:text-[12vw] leading-none text-[#231F20] -translate-x-1/4">
                CATALOGUE
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-10 relative z-10">
                <div className="border-l-[6px] md:border-l-[12px] border-[#EC1C24] pl-8 md:pl-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-1 bg-[#EC1C24]"></div>
                        <span className="text-[#EC1C24] text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em]">Catalogue 2026</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-[#231F20]">
                        Library <br />
                        <span className="text-gray-200/80">Sectors</span>
                    </h2>
                    <p className="text-gray-500 mt-8 md:mt-10 font-medium text-[12px] md:text-[14px] tracking-widest max-w-sm leading-relaxed uppercase border-l border-gray-100 pl-6">
                        Discover our comprehensive range of educational materials designed for modern learning excellence.
                    </p>
                </div>

                <Link
                    to="/category/all"
                    className="group bg-[#231F20] text-white pl-10 pr-8 md:pl-14 md:pr-10 py-5 md:py-6 rounded-full font-black text-[10px] md:text-[11px] tracking-[0.3em] uppercase hover:bg-[#EC1C24] transition-all duration-500 flex items-center justify-center gap-6 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 active:scale-95 whitespace-nowrap"
                >
                    Browse Library
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                        <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 md:gap-12 relative z-10">
                {categories.map((cat, idx) => (
                    <CategoryCard key={idx} cat={cat} idx={idx} />
                ))}
            </div>

            {/* Subtle bottom accent line */}
            <div className="mt-24 md:mt-32 w-full h-[6px] rounded-full bg-gradient-to-r from-transparent via-[#EC1C24]/10 to-transparent"></div>
        </section>
    );
};

export default Categories;
