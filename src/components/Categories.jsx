import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    { name: "Enlight Series", id: "enlight course books", icon: "fa-book-open-reader", desc: "NCERT/CBSE Based", color: "bg-[#2E3092]" },
    { name: "Joyway Series", id: "joyway", icon: "fa-child-reaching", desc: "State Board Based", color: "bg-[#01A651]" },
    { name: "Semester Kits", id: "enlight kits", icon: "fa-box-archive", desc: "All-in-One Packs", color: "bg-[#FFF200]", darkIcon: true },
    { name: "Work Books", id: "enlight semester books", icon: "fa-pen-clip", desc: "Guided Practice", color: "bg-[#EC1C24]" },
    { name: "Languages", id: "language books", icon: "fa-language", desc: "Region Specific", color: "bg-[#f06d06]" },
    { name: "Flash Cards", id: "flash cards", icon: "fa-palette", desc: "Visual Learning", color: "bg-[#231F20]" },
];

const Categories = () => {
    return (
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-20 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
                <div className="border-l-4 md:border-l-8 border-[#EC1C24] pl-6 md:pl-10 text-left">
                    <span className="text-[#EC1C24] text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Catalogue 2026</span>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-[#231F20]">Library <br /> <span className="text-gray-200">Sectors</span></h2>
                    <p className="text-gray-400 mt-4 md:mt-6 font-bold uppercase text-[9px] md:text-[11px] tracking-widest max-w-xs leading-relaxed">Authorized educational paths curated for success.</p>
                </div>
                <Link to="/category/all" className="bg-[#231F20] text-white px-8 md:px-12 py-4 md:py-5 rounded-[16px] md:rounded-[24px] font-black text-[9px] md:text-[10px] tracking-[0.3em] uppercase hover:bg-[#EC1C24] transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95">
                    Browse Library <i className="fas fa-chevron-right"></i>
                </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-10">
                {categories.map((cat, idx) => (
                    <Link to={`/category/${cat.id}`} key={idx} className="group flex flex-col items-center">
                        <div className={`w-full aspect-[4/5] sm:w-32 sm:h-40 ${cat.color} rounded-[32px] md:rounded-[48px] flex items-center justify-center mb-4 md:mb-8 transform group-hover:scale-105 transition-all duration-500 shadow-xl border-2 md:border-4 border-white overflow-hidden relative`}>
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:8px_8px] md:bg-[size:10px_10px]"></div>
                            <i className={`fas ${cat.icon} text-3xl md:text-4xl ${cat.darkIcon ? 'text-[#231F20]' : 'text-white'} relative z-10`}></i>
                        </div>
                        <div className="text-center px-2">
                            <h3 className="font-black text-[11px] md:text-[13px] uppercase tracking-widest group-hover:text-[#EC1C24] transition-colors line-clamp-1">{cat.name}</h3>
                            <p className="text-[8px] md:text-[9px] text-gray-400 mt-1 md:mt-2 uppercase font-black opacity-60 tracking-wider">[{cat.desc}]</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Categories;
