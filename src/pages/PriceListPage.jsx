import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { booksData } from '../data';

const PriceListPage = () => {
    // Select basic featured books from Enlight to display in the catalog
    const featuredBooks = useMemo(() => {
        // Find books that are explicitly marked as Enlight series 
        // OR have it in their category/name for consistency with branding
        return booksData.filter(b =>
            b.series === 'Enlight' ||
            b.category?.toLowerCase().includes('enlight')
        ).slice(0, 12);
    }, []);

    return (
        <div className="pt-24 md:pt-48 min-h-screen bg-[#f8f9fb] pb-16 md:pb-32 animate-in fade-in duration-700">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* Header Block */}
                <div className="text-center mb-16 md:mb-24 relative">
                    <div className="inline-block bg-[#231F20] text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6 md:mb-8 shadow-xl">Catalogue 2026</div>
                    <h1 className="text-4xl md:text-8xl font-black text-[#231F20] leading-[0.9] tracking-tighter uppercase mb-4 md:mb-6">
                        Product <br /> <span className="text-[#EC1C24]">Showcase</span>
                    </h1>
                    <p className="text-gray-400 font-bold uppercase text-[10px] md:text-[11px] tracking-widest max-w-xs md:max-w-none mx-auto">Explore our high-quality educational resources for the 2026 academic year</p>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#01A651]/10 rounded-full blur-3xl -z-10"></div>
                </div>

                {/* Download PDF Section - Promoted to Top */}
                <div className="bg-[#231F20] rounded-[32px] md:rounded-[50px] p-8 md:p-16 text-white overflow-hidden relative mb-16 md:mb-24 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#EC1C24]/10 rounded-full blur-3xl"></div>
                    <div className="text-center md:text-left relative z-10">
                        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white">Full Price Catalogue</h3>
                        <p className="text-white/40 mt-2 font-bold uppercase text-[9px] md:text-[10px] tracking-[0.4em]">Official 2026 pricing and product details in PDF format</p>
                    </div>
                    <a
                        href="https://ik.imagekit.io/rohanwadadar/assets/Catalogue-2026%20Final%20(3)_compressed%20(1).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto bg-[#EC1C24] hover:bg-white hover:text-black text-white px-8 md:px-14 py-4 md:py-6 rounded-2xl md:rounded-[24px] font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 md:gap-6 shadow-2xl active:scale-95 group relative z-10"
                    >
                        Download Catalog <i className="fas fa-file-pdf text-lg group-hover:scale-110 transition-transform"></i>
                    </a>
                </div>

                {/* Series Sections */}
                <div className="space-y-24">
                    {/* Enlight Showcase (Primary Focus) */}
                    <section>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-1 w-12 bg-[#01A651]"></div>
                            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#231F20]">Enlight <span className="text-[#01A651]">Series</span></h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
                            {featuredBooks.filter(b => b.series === 'Enlight' || b.category?.toLowerCase().includes('enlight')).map((book) => (
                                <Link key={book.id} to={`/book/${book.id}`} className="group block focus:outline-none">
                                    <div className="aspect-[3/4] bg-white rounded-3xl p-4 shadow-lg border border-gray-100 mb-4 transition-transform duration-500 group-hover:-translate-y-2 flex items-center justify-center overflow-hidden">
                                        <img src={book.image} alt={book.name} className="max-h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                    </div>
                                    <h4 className="text-[9px] font-black uppercase text-gray-400 group-hover:text-[#EC1C24] tracking-widest transition-colors text-center px-4">{book.name}</h4>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Footer Message */}
                <div className="mt-24 text-center">
                    <p className="text-gray-300 font-black uppercase text-[10px] tracking-[0.5em]">Academic Year 2026-27 Authorized Catalogue</p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(PriceListPage);
