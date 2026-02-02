import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { booksData } from '../data';
import BookCard from './BookCard';

const FeaturedProducts = ({ onAddToCart }) => {
    // Memoize the filtering logic to prevent expensive re-calculates on every render
    const { coreEnlight, semesterPacks, kits } = useMemo(() => {
        return {
            coreEnlight: booksData.filter(b => b.category === "Enlight Course Books").slice(0, 4),
            semesterPacks: booksData.filter(b => b.category === "Enlight Semester Books").slice(0, 4),
            kits: booksData.filter(b => b.category === "Enlight Kits").slice(0, 4)
        };
    }, []);

    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Structural decoration */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#01A651]/5 rounded-full blur-[120px] -z-10 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-20">

                {/* Sector 1: Enlight Foundation */}
                <div className="mb-24 md:mb-40">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-8 text-left">
                        <div className="border-l-[6px] md:border-l-8 border-[#EC1C24] pl-6 md:pl-10">
                            <span className="text-[#EC1C24] text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-3 md:mb-4 block animate-pulse">Standard Series</span>
                            <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-[#231F20] leading-[0.9] uppercase mb-2">
                                Enlight <br /> <span className="text-[#2E3092]">Coursebooks</span>
                            </h2>
                            <p className="text-gray-400 font-bold text-[9px] md:text-[10px] tracking-widest mt-4 md:mt-6 uppercase">NCERT & CBSE Based Curriculum 2026</p>
                        </div>
                        <Link to="/series/enlight" className="group flex items-center gap-4 bg-[#231F20] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-[20px] font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-[#EC1C24] transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95">
                            Complete Shelf <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {coreEnlight.map((book) => (
                            <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
                        ))}
                    </div>
                </div>

                {/* Global Impact Banner - Institutional Ordering */}
                <div className="my-24 md:my-48 bg-[#231F20] rounded-[40px] md:rounded-[80px] p-8 md:p-32 relative overflow-hidden group shadow-[0_50px_100px_rgba(35,31,32,0.3)]">
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_#EC1C24_0%,_transparent_50%)] opacity-20"></div>
                    <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-12 md:gap-20">
                        <div className="text-left max-w-3xl">
                            <div className="bg-[#FFF200] w-16 md:w-20 h-1.5 md:h-2 rounded-full mb-8 md:mb-12"></div>
                            <h3 className="text-white text-4xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-6 md:mb-8">Management <br /> <span className="text-[#01A651]">Selection</span></h3>
                            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed uppercase tracking-tighter mb-8 md:mb-12">"Blending quality print materials with advanced digital content. Providing a strong base for Early Childhood Care and Education."</p>
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                                <a
                                    href="https://ik.imagekit.io/rohanwadadar/assets/Catalogue-2026%20Final%20(3)_compressed%20(1).pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#EC1C24] text-white px-10 md:px-12 py-5 md:py-6 rounded-xl md:rounded-[24px] font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-white hover:text-[#231F20] transition-all shadow-2xl active:scale-95 inline-block"
                                >
                                    Download Price List
                                </a>
                                <button className="bg-white/10 border border-white/20 text-white px-10 md:px-12 py-5 md:py-6 rounded-xl md:rounded-[24px] font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-[#FFF200] hover:text-[#231F20] transition-all active:scale-95">Bulk Enquiry</button>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3 hidden xl:block perspective-1000">
                            <div className="relative transform rotate-6 group-hover:rotate-0 transition-all duration-1000 ease-out border-[20px] border-white/5 rounded-[60px] p-12 bg-white/5 backdrop-blur-3xl shadow-2xl overflow-hidden">
                                <img src="https://placehold.co/400x560/231F20/EC1C24?text=RAVI+CATALOGUE" alt="Catalogue" className="rounded-3xl shadow-2xl relative z-10" loading="lazy" />
                                <div className="absolute -top-10 -right-10 bg-[#EC1C24] text-white p-12 h-40 w-40 flex items-center justify-center rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl animate-pulse text-center rotate-12">ESTD 1988</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sector 2: Semester Kits */}
                <div className="mb-24 md:mb-40">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-8 text-left">
                        <div className="border-l-[6px] md:border-l-8 border-[#01A651] pl-6 md:pl-10">
                            <span className="text-[#01A651] text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-3 md:mb-4 block">Interactive Learning</span>
                            <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-[#231F20] leading-[0.9] uppercase mb-2">
                                Premier <br /> <span className="text-[#EC1C24]">Study Kits</span>
                            </h2>
                            <p className="text-gray-400 font-bold text-[9px] md:text-[10px] tracking-widest mt-4 md:mt-6 uppercase">Includes Practice Books & Certificates</p>
                        </div>
                        <Link to="/kits-flash" className="group flex items-center gap-4 border-4 border-[#231F20] text-[#231F20] px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-[20px] font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-[#231F20] hover:text-white transition-all transform hover:-translate-y-1 active:scale-95">
                            View All Kits <i className="fas fa-boxes-stacked group-hover:scale-110 transition-transform ml-2"></i>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                        {kits.slice(0, 3).map((book) => (
                            <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default React.memo(FeaturedProducts);
