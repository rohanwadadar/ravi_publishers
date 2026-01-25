import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { booksData } from '../data';
import BookCard from '../components/BookCard';

const CategoryPage = ({ onAddToCart }) => {
    const { categoryId } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q');
    const searchCat = searchParams.get('cat');

    const normalizedId = categoryId?.replace(/_/g, ' ');

    let filteredBooks = [];
    let pageTitle = normalizedId;

    if (categoryId === 'search' && (searchQuery || searchCat)) {
        pageTitle = searchQuery ? `Results for "${searchQuery}"` : "Search Results";
        const q = searchQuery?.toLowerCase() || '';
        const c = searchCat?.toLowerCase() || '';

        filteredBooks = booksData.filter(book => {
            const matchesQuery = !q || (
                book.name.toLowerCase().includes(q) ||
                book.category.toLowerCase().includes(q) ||
                (book.subCategory && book.subCategory.toLowerCase().includes(q)) ||
                book.description.toLowerCase().includes(q)
            );
            const matchesCategory = !c || (
                book.category.toLowerCase().includes(c) ||
                (book.subCategory && book.subCategory.toLowerCase().includes(c))
            );
            return matchesQuery && matchesCategory;
        });
    } else if (categoryId === 'all') {
        pageTitle = 'Complete';
        filteredBooks = booksData;
    } else {
        filteredBooks = booksData.filter(book => {
            const searchStr = normalizedId?.toLowerCase() || '';
            const catMatch = book.category.toLowerCase() === searchStr ||
                book.category.toLowerCase().includes(searchStr) ||
                (searchStr && "enlight semester".includes(searchStr) && book.category.toLowerCase().includes("semester")) ||
                (searchStr && "enlight term".includes(searchStr) && book.category.toLowerCase().includes("term")) ||
                (searchStr && "enlight core".includes(searchStr) && book.category.toLowerCase().includes("course"));

            const subMatch = book.subCategory && book.subCategory.toLowerCase() === searchStr;

            return catMatch || subMatch;
        });
    }

    return (
        <div className="pt-32 md:pt-52 min-h-screen bg-[#f8f9fb] pb-20 md:pb-32 animate-in fade-in duration-700">
            {/* Structural Accents */}
            <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-[#EC1C24]/5 rounded-full blur-[140px] -z-10 pointer-events-none"></div>
            <div className="fixed bottom-0 left-0 w-[40vw] h-[40vw] bg-[#01A651]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-20">

                {/* Boutique Header Block */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 md:gap-12 mb-12 md:mb-20 p-8 md:p-16 bg-white rounded-[32px] md:rounded-[60px] shadow-sm border border-gray-100 relative overflow-visible">
                    <div className="absolute top-0 left-0 w-1.5 md:w-3 h-full bg-[#EC1C24] rounded-l-[32px] md:rounded-l-[60px]"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-[#EC1C24]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                    <div className="max-w-3xl text-left relative z-10">
                        <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-[14px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mb-4 md:mb-8">
                            <Link to="/" className="text-[#EC1C24] hover:text-black transition-all border-b-2 border-[#EC1C24]/20 hover:border-[#EC1C24] pb-1">Digital Home</Link>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                            <span className="text-gray-400 truncate">Catalogue Search</span>
                        </div>
                        <h1 className="text-4xl md:text-8xl font-black text-[#231F20] leading-[0.9] tracking-tighter uppercase mb-4 md:mb-6">
                            {pageTitle} <br />
                            <span className="text-[#01A651] italic mt-2 block">Shelf</span>
                        </h1>
                        <p className="text-gray-400 font-black uppercase text-[10px] md:text-[12px] tracking-[0.3em] md:tracking-[0.4em] mt-6 md:mt-10 flex items-center gap-4">
                            <i className="fas fa-file-invoice text-[#EC1C24] text-xl"></i>
                            Official 2026 Academic Edition
                        </p>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6 bg-gray-50 p-3 md:p-4 rounded-[24px] md:rounded-[32px] border border-gray-100 pr-8 md:pr-12 shadow-inner group w-full lg:w-auto">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-[24px] flex items-center justify-center text-[#EC1C24] shadow-md transform group-hover:rotate-12 transition-transform shrink-0">
                            <i className="fas fa-filter-list text-xl md:text-2xl"></i>
                        </div>
                        <div className="flex flex-col flex-1 text-left">
                            <span className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-2 text-left">Catalogue Sector</span>
                            <select className="text-[11px] md:text-sm font-black bg-transparent outline-none cursor-pointer uppercase tracking-tighter text-[#231F20] w-full">
                                <option>Sort: Latest 2026 Ready</option>
                                <option>Sort: Price Low to High</option>
                                <option>Sort: Subject A-Z</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Dynamic Display Grid */}
                {filteredBooks.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-24">
                        {filteredBooks.map((book, idx) => (
                            <div
                                key={book.id}
                                className="animate-in fade-in slide-in-from-bottom-5"
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                <BookCard book={book} onAddToCart={onAddToCart} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 md:py-48 bg-white rounded-[40px] md:rounded-[80px] shadow-xl border border-gray-100 relative overflow-hidden px-8">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#EC1C24] via-[#01A651] to-[#2E3092]"></div>
                        <div className="relative z-10">
                            <div className="w-24 h-24 md:w-36 md:h-36 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-10 md:mb-16 text-gray-100 animate-pulse">
                                <i className="fas fa-search text-5xl md:text-7xl text-gray-200"></i>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-[#231F20] uppercase tracking-tighter mb-6 md:mb-8">No matching records</h2>
                            <p className="text-gray-400 max-w-xs md:max-w-lg mx-auto font-bold text-[11px] md:text-sm leading-relaxed uppercase tracking-[0.2em] md:tracking-[0.3em]">
                                We currently don't have any titles cataloged under "{normalizedId}" for the 2026 academic cycle.
                            </p>
                            <Link to="/" className="inline-block mt-10 md:mt-16 bg-[#231F20] text-white px-12 md:px-16 py-5 md:py-7 rounded-[20px] md:rounded-[24px] font-black text-[10px] md:text-[12px] uppercase tracking-[0.4em] hover:bg-[#EC1C24] transition-all transform hover:scale-105 shadow-2xl shadow-black/20">
                                Reset Search Parameters
                            </Link>
                        </div>
                    </div>
                )}

                {/* Global Support Callout */}
                <div className="mt-20 md:mt-40 bg-[#231F20] rounded-[40px] md:rounded-[60px] p-10 md:p-24 flex flex-col xl:flex-row items-center justify-between gap-12 md:gap-16 overflow-hidden relative group border border-white/5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(1,166,81,0.1)_0%,_transparent_60%)]"></div>
                    <div className="text-center xl:text-left relative z-10 w-full xl:w-auto">
                        <div className="w-16 h-1.5 bg-[#EC1C24] rounded-full mb-8 md:mb-10 mx-auto xl:mx-0"></div>
                        <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[1.1] md:leading-[1] mb-6">Board Guidance <br className="hidden md:block" /> <span className="text-[#01A651]">Support</span></h3>
                        <p className="text-white/40 font-bold uppercase text-[10px] md:text-[12px] tracking-[0.4em]">Expert procurement advice for authorized entities.</p>
                    </div>
                    <div className="flex flex-col items-center gap-8 relative z-10 w-full xl:w-auto">
                        <button className="w-full xl:w-auto bg-white text-[#231F20] px-12 md:px-16 py-6 rounded-[20px] md:rounded-[24px] font-black text-[10px] md:text-[12px] uppercase tracking-[0.4em] hover:bg-[#01A651] hover:text-white transition-all shadow-2xl active:scale-95">
                            Institutional Chat
                        </button>
                        <div className="flex items-center gap-6 text-white/50 text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em]">
                            <i className="fas fa-phone text-[#EC1C24] text-xl"></i> +91 98491 00063
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
