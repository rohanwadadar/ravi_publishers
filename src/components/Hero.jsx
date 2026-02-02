import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
    {
        tag: "Joyway e-Learning Series",
        title: "Interactive",
        highlight: "Joyway Learning",
        desc: "Engaging and interactive learning materials designed for early childhood education. Complete ECCE solution from Pre-KG to 5th Standard.",
        bg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80",
        accent: "#FFF200",
        series: "Joyway"
    },
    {
        tag: "Enlight e-Learning Series",
        title: "Digital Ready",
        highlight: "Enlight Education",
        desc: "Next generation digital-ready curriculum solutions. Blending premium print books with advanced learning software for comprehensive education.",
        bg: "https://images.unsplash.com/photo-1491843351663-8c4362820a4b?auto=format&fit=crop&w=1920&q=80",
        accent: "#01A651",
        series: "Enlight"
    },
    {
        tag: "RAVI Publishers - Govt & Regional",
        title: "Authorized",
        highlight: "State Board Solutions",
        desc: "Specialized government publications for AP & Telangana State Boards. Complete Telugu, Kannada, and Tamil language solutions.",
        bg: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1920&q=80",
        accent: "#EC1C24",
        series: "RAVI"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const handleAccess = (series) => {
        const path = series.toLowerCase() === 'ravi' ? '/series/ravi' : `/series/${series.toLowerCase()}`;
        navigate(path);
    };

    return (
        <section className="relative h-[85vh] md:h-[95vh] min-h-[600px] md:min-h-[750px] flex items-center justify-center text-center overflow-hidden bg-[#231F20] mt-20 md:mt-40">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23, 1, 0.32, 1)] transform ${index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                >
                    <div className="absolute inset-0 z-0">
                        <img
                            src={slide.bg}
                            alt="Hero Backdrop"
                            className="w-full h-full object-cover opacity-25 grayscale hover:grayscale-0 transition-all duration-[3000ms]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-[#231F20]"></div>
                    </div>

                    <div className="relative z-10 max-w-5xl px-6 flex flex-col items-center justify-center h-full">
                        <div
                            style={{ backgroundColor: slide.accent }}
                            className="inline-block text-white text-[8px] md:text-[9px] font-black px-4 md:px-6 py-2 rounded-lg uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6 md:mb-8 shadow-2xl animate-in slide-in-from-top-4 duration-700"
                        >
                            {slide.tag}
                        </div>
                        <h1 className="text-4xl md:text-8xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-[0.9] uppercase">
                            {slide.title} <br />
                            <span style={{ color: slide.accent }} className="transition-colors duration-500 italic block mt-2">
                                {slide.highlight}
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto font-medium opacity-90 leading-relaxed uppercase tracking-tighter shadow-black drop-shadow-lg px-4">
                            {slide.desc}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full sm:w-auto px-10 sm:px-0">
                            <button
                                onClick={() => handleAccess(slide.series)}
                                style={{ backgroundColor: slide.accent }}
                                className="w-full sm:w-auto hover:scale-105 hover:brightness-110 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-2xl shadow-black/40 active:scale-95"
                            >
                                Access Store
                            </button>
                            <button
                                onClick={() => navigate('/price-list')}
                                className="w-full sm:w-auto bg-white/5 backdrop-blur-3xl hover:bg-white text-white hover:text-black px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all border border-white/10 active:scale-95"
                            >
                                Official Catalog
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Mobile-Friendly Trust Badges */}
            <div className="absolute bottom-0 w-full left-0 bg-black/40 backdrop-blur-md border-t border-white/5 py-4 px-6 md:px-20 grid grid-cols-2 md:flex justify-between items-center z-20 gap-4 md:gap-0">
                {[
                    { icon: 'fa-truck-bolt', text: 'Rapid Dispatch', color: '#FFF200' },
                    { icon: 'fa-box-check', text: 'Estd. 1988', color: '#01A651' },
                    { icon: 'fa-award-simple', text: 'Enlight Quality', color: '#2E3092', hideMobile: true },
                    { icon: 'fa-user-headset', text: 'Govt. Approved', color: '#EC1C24' }
                ].map((badge, i) => (
                    <div key={i} className={`flex items-center gap-2 md:gap-3 text-white/50 text-[8px] md:text-[10px] font-black uppercase tracking-widest ${badge.hideMobile ? 'hidden md:flex' : 'flex'}`}>
                        <i className={`fas ${badge.icon} text-base md:text-lg`} style={{ color: badge.color }}></i>
                        {badge.text}
                    </div>
                ))}
            </div>

            {/* Progress Indicators - Hidden on narrow mobile */}
            <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 hidden sm:flex flex-col gap-4 z-30">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-1 transition-all rounded-full ${i === current ? 'h-12 bg-white' : 'h-1.5 bg-white/20 hover:bg-white/40'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
