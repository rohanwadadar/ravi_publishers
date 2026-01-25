import React from 'react';
import { Link } from 'react-router-dom';
import { booksData } from '../data';
import BookCard from './BookCard';

const FeaturedProducts = ({ onAddToCart }) => {
    // Curated segments for the home page from the new catalog data
    const coreEnlight = booksData.filter(b => b.category === "Enlight Course Books").slice(0, 4);
    const semesterPacks = booksData.filter(b => b.category === "Enlight Semester Books").slice(0, 4);
    const kits = booksData.filter(b => b.category === "Enlight Kits").slice(0, 4);

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Structural decoration */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#01A651]/5 rounded-full blur-[120px] -z-10 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-20">

                {/* Sector 1: Enlight Foundation */}
                <div className="mb-40">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div className="text-left border-l-8 border-[#EC1C24] pl-10">
                            <span className="text-[#EC1C24] text-[11px] font-black uppercase tracking-[0.6em] mb-4 block animate-pulse">Standard Series</span>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-[#231F20] leading-[0.8] uppercase mb-2">
                                Enlight <br /> <span className="text-[#2E3092]">Coursebooks</span>
                            </h2>
                            <p className="text-gray-400 font-bold text-[10px] tracking-widest mt-6 uppercase">NCERT & CBSE Based Curriculum 2026</p>
                        </div>
                        <Link to="/category/enlight_course" className="group flex items-center gap-5 bg-[#231F20] text-white px-10 py-5 rounded-[20px] font-black text-[11px] uppercase tracking-[0.3em] hover:bg-[#EC1C24] transition-all transform hover:-translate-y-2 shadow-2xl">
                            Complete Shelf <i className="fas fa-arrow-right group-hover:translate-x-3 transition-transform"></i>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {coreEnlight.map((book) => (
                            <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
                        ))}
                    </div>
                </div>

                {/* Global Impact Banner - Institutional Ordering */}
                <div className="my-48 bg-[#231F20] rounded-[80px] p-16 md:p-32 relative overflow-hidden group shadow-[0_50px_100px_rgba(35,31,32,0.3)]">
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_#EC1C24_0%,_transparent_50%)] opacity-20"></div>
                    <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-20">
                        <div className="text-left max-w-3xl">
                            <div className="bg-[#FFF200] w-20 h-2 rounded-full mb-12"></div>
                            <h3 className="text-white text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-8">Management <br /> <span className="text-[#01A651]">Selection</span></h3>
                            <p className="text-white/60 text-xl font-medium leading-relaxed uppercase tracking-tighter mb-12">"Blending quality print materials with advanced digital content. Providing a strong base for Early Childhood Care and Education."</p>
                            <div className="flex flex-wrap gap-8">
                                <button className="bg-[#EC1C24] text-white px-12 py-6 rounded-[24px] font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white hover:text-[#231F20] transition-all shadow-2xl">Download Price List</button>
                                <button className="bg-white/10 border border-white/20 text-white px-12 py-6 rounded-[24px] font-black text-[11px] uppercase tracking-[0.4em] hover:bg-[#FFF200] hover:text-[#231F20] transition-all">Bulk Enquiry</button>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3 hidden xl:block perspective-1000">
                            <div className="relative transform rotate-6 group-hover:rotate-0 transition-all duration-1000 ease-out border-[20px] border-white/5 rounded-[60px] p-12 bg-white/5 backdrop-blur-3xl shadow-2xl overflow-hidden">
                                <img src="https://placehold.co/400x560/231F20/EC1C24?text=RAVI+CATALOGUE" alt="Catalogue" className="rounded-3xl shadow-2xl relative z-10" />
                                <div className="absolute -top-10 -right-10 bg-[#EC1C24] text-white p-12 h-40 w-40 flex items-center justify-center rounded-full font-black text-xs uppercase tracking-widest shadow-2xl animate-pulse text-center rotate-12">ESTD 1988</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sector 2: Semester Kits */}
                <div className="mb-40">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div className="text-left border-l-8 border-[#01A651] pl-10">
                            <span className="text-[#01A651] text-[11px] font-black uppercase tracking-[0.6em] mb-4 block">Interactive Learning</span>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-[#231F20] leading-[0.8] uppercase mb-2">
                                Premier <br /> <span className="text-[#EC1C24]">Study Kits</span>
                            </h2>
                            <p className="text-gray-400 font-bold text-[10px] tracking-widest mt-6 uppercase">Includes Flash Cards & Certificates</p>
                        </div>
                        <Link to="/category/kits_flash" className="group flex items-center gap-5 border-4 border-[#231F20] text-[#231F20] px-10 py-5 rounded-[20px] font-black text-[11px] uppercase tracking-[0.3em] hover:bg-[#231F20] hover:text-white transition-all transform hover:-translate-y-2">
                            View All Kits <i className="fas fa-boxes-stacked group-hover:scale-125 transition-transform ml-2"></i>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {kits.slice(0, 3).map((book) => (
                            <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturedProducts;
