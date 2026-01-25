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
        filteredBooks = booksData.filter(book =>
            book.category.toLowerCase() === normalizedId?.toLowerCase() ||
            book.category.toLowerCase().includes(normalizedId?.toLowerCase()) ||
            (book.subCategory && book.subCategory.toLowerCase() === normalizedId?.toLowerCase())
        );
    }

    return (
        <div className="pt-32 md:pt-52 min-h-screen bg-[#f8f9fb] pb-20 md:pb-32 animate-in fade-in duration-700">
            {/* Structural Accents */}
            <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-[#EC1C24]/5 rounded-full blur-[140px] -z-10 pointer-events-none"></div>
            <div className="fixed bottom-0 left-0 w-[40vw] h-[40vw] bg-[#01A651]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-20">

                {/* Boutique Header Block */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 md:gap-12 mb-12 md:mb-20 p-8 md:p-16 bg-white rounded-[32px] md:rounded-[60px] shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 md:w-3 h-full bg-[#EC1C24]"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-[#EC1C24]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                    <div className="max-w-3xl text-left relative z-10">
                        <div className="flex items-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-black text-[#EC1C24] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4 md:mb-6">
                            <Link to="/" className="hover:text-black transition-colors shrink-0">Digital Home</Link>
                            <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                            <span className="text-gray-300 truncate">Catalog Search</span>
                        </div>
                        <h1 className="text-4xl md:text-8xl font-black text-[#231F20] leading-[0.9] tracking-tighter uppercase mb-4 md:mb-6">
                            {pageTitle} <br />
                            <span className="text-[#01A651] italic">Shelf</span>
                        </h1>
                        <p className="text-gray-400 font-black uppercase text-[9px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] mt-4 md:mt-8 flex items-center gap-3">
                            <i className="fas fa-file-invoice text-[#EC1C24]"></i>
                            Jan 01, 2026 Price Edition
                        </p>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6 bg-gray-50 p-2.5 md:p-3 rounded-[20px] md:rounded-[24px] border border-gray-100 pr-6 md:pr-10 shadow-inner group w-full lg:w-auto">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-[#EC1C24] shadow-md transform group-hover:rotate-12 transition-transform shrink-0">
                            <i className="fas fa-filter-list text-lg md:text-xl"></i>
                        </div>
                        <div className="flex flex-col flex-1 text-left">
                            <span className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1 md:mb-2 text-left">Refine Directory</span>
                            <select className="text-[10px] md:text-xs font-black bg-transparent outline-none cursor-pointer uppercase tracking-tighter text-[#231F20] w-full">
                                <option>Latest 2026 Ready</option>
                                <option>Price: Value to Premium</option>
                                <option>Subject Hierarchy</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Dynamic Display Grid */}
                {filteredBooks.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-20">
                        {filteredBooks.map((book, idx) => (
                            <div
                                key={book.id}
                                className="animate-in fade-in slide-in-from-bottom-5"
                                style={{ animationDelay: `${idx * 40}ms` }}
                            >
                                <BookCard book={book} onAddToCart={onAddToCart} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 md:py-40 bg-white rounded-[40px] md:rounded-[80px] shadow-xl border border-gray-100 relative overflow-hidden px-6">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#EC1C24] via-[#01A651] to-[#2E3092]"></div>
                        <div className="relative z-10">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 md:mb-12 text-gray-100 animate-pulse">
                                <i className="fas fa-search text-4xl md:text-6xl text-gray-200"></i>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-[#231F20] uppercase tracking-tighter mb-4 md:mb-6">No Records Found</h2>
                            <p className="text-gray-400 max-w-xs md:max-w-md mx-auto font-bold text-[10px] md:text-xs leading-relaxed uppercase tracking-widest leading-relaxed">
                                We couldn't find any titles matching your query in our 2026 archive. Try searching for specific levels (e.g., "Pre-KG") or subjects.
                            </p>
                            <Link to="/" className="inline-block mt-8 md:mt-12 bg-[#231F20] text-white px-10 md:px-14 py-4 md:py-6 rounded-2xl md:rounded-[20px] font-black text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-[#EC1C24] transition-all transform hover:scale-105 shadow-2xl shadow-black/20">
                                Reset Directory
                            </Link>
                        </div>
                    </div>
                )}

                {/* Global Support Callout */}
                <div className="mt-20 md:mt-40 bg-[#231F20] rounded-[40px] md:rounded-[60px] p-10 md:p-24 flex flex-col xl:flex-row items-center justify-between gap-12 md:gap-16 overflow-hidden relative group border border-white/5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(1,166,81,0.1)_0%,_transparent_60%)]"></div>
                    <div className="text-center xl:text-left relative z-10 w-full xl:w-auto">
                        <div className="w-16 h-1.5 bg-[#EC1C24] rounded-full mb-8 md:mb-10 mx-auto xl:mx-0"></div>
                        <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] md:leading-[1] mb-4">Board Guidance <br className="hidden md:block" /> <span className="text-[#01A651]">Support</span></h3>
                        <p className="text-white/40 font-bold uppercase text-[9px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em]">Expert procurement advice for entities.</p>
                    </div>
                    <div className="flex flex-col items-center gap-6 relative z-10 w-full xl:w-auto">
                        <button className="w-full xl:w-auto bg-white text-[#231F20] px-10 md:px-14 py-5 md:py-6 rounded-2xl md:rounded-[24px] font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-[#01A651] hover:text-white transition-all shadow-2xl">
                            Start Expert Chat
                        </button>
                        <div className="flex items-center gap-4 text-white/50 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                            <i className="fas fa-phone text-[#EC1C24]"></i> +91 98491 00063
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
