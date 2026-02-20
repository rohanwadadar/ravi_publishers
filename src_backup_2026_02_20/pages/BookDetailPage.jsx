import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { booksData } from '../data';

const BookDetailPage = ({ onAddToCart }) => {
    const { bookId } = useParams();
    const book = booksData.find(b => b.id === parseInt(bookId));
    const [activeTab, setActiveTab] = useState('description');
    const [quantity, setQuantity] = useState(1);

    if (!book) return <div className="pt-60 text-center font-black h-screen uppercase tracking-widest text-[#EC1C24]">Archive Not Found</div>;

    return (
        <div className="pt-32 md:pt-52 min-h-screen bg-[#f9fafc] pb-20 md:pb-32 animate-in fade-in duration-700">
            {/* Visual Accents */}
            <div className="fixed top-0 left-0 w-[50vw] h-[50vw] bg-[#EC1C24]/5 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-20">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

                    {/* Detailed Visual Side */}
                    <div className="w-full lg:w-[45%]">
                        <div className="relative group p-6 md:p-10 bg-white rounded-[32px] md:rounded-[40px] border border-gray-100 shadow-xl overflow-hidden h-full flex items-center justify-center min-h-[400px]">
                            <div className="absolute top-0 right-0 p-6 md:p-8">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 hover:text-[#EC1C24] cursor-pointer transition-colors shadow-sm">
                                    <i className="far fa-heart text-lg md:text-xl"></i>
                                </div>
                            </div>
                            <img
                                src={book.image}
                                alt={book.name}
                                className="max-w-full h-auto max-h-[500px] object-contain shadow-2xl rounded-sm transform group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white px-5 md:px-6 py-2 md:py-3 rounded-full text-[7px] md:text-[8px] font-black uppercase tracking-widest opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
                                Roll over image to zoom
                            </div>
                        </div>
                    </div>

                    {/* Core Content Side */}
                    <div className="w-full lg:w-[55%] flex flex-col pt-4 text-left">
                        <div className="bg-[#EC1C24]/10 text-[#EC1C24] text-[9px] font-black px-4 py-2 rounded-lg uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8 w-fit flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EC1C24] animate-ping"></span>
                            {book.category} Official Series
                        </div>

                        <h1 className="text-4xl md:text-7xl font-black text-[#231F20] leading-[0.9] tracking-tighter mb-8 uppercase">
                            {book.name.split(' (').map((part, i) => (
                                <span key={i} className={i % 2 !== 0 ? 'text-[#01A651] block mt-2 md:mt-4' : 'block'}>{part.replace(')', '')}</span>
                            ))}
                        </h1>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mb-10 bg-white p-6 md:p-8 rounded-[24px] md:rounded-[30px] border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFF200]/10 rounded-full -translate-y-10 translate-x-10"></div>
                            <div className="flex flex-col relative z-10">
                                <span className="text-3xl md:text-4xl font-black text-black tracking-tighter">₹{book.price}.00</span>
                                <span className="text-[10px] text-gray-300 line-through font-bold tracking-widest uppercase italic mt-1">Order Form: ₹{book.oldPrice}.00</span>
                            </div>
                            <div className="h-px sm:h-12 w-full sm:w-[1px] bg-gray-100"></div>
                            <div className="flex flex-col gap-2 relative z-10 text-left">
                                <div className="flex gap-1 justify-start">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className={`fas fa-star text-[9px] ${i < book.rating ? 'text-[#FFF200]' : 'text-gray-100'}`}></i>
                                    ))}
                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-[0.15em] lg:tracking-[0.2em]">Authorized Publication Since 1988</span>
                                    <span className="px-2 py-1 bg-[#01A651]/10 text-[#01A651] text-[7px] font-black uppercase tracking-widest rounded-md border border-[#01A651]/10 flex items-center gap-1">
                                        <i className="fas fa-check-circle"></i> In Stock
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content Tabs */}
                        <div className="flex gap-6 md:gap-10 border-b-2 border-gray-100 mb-8 md:mb-10 scrolling-touch overflow-x-auto no-scrollbar">
                            {['description', 'features', 'specifications'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all relative whitespace-nowrap ${activeTab === tab ? 'text-[#EC1C24]' : 'text-gray-300 hover:text-gray-500'}`}
                                >
                                    {tab}
                                    {activeTab === tab && <div className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-[#EC1C24] rounded-full"></div>}
                                </button>
                            ))}
                        </div>

                        <div className="min-h-[160px] mb-8 md:mb-12">
                            {activeTab === 'description' && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-top-1 duration-500">
                                    <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                                        {book.description} This publication is strictly as per the latest 2026 EM academic guidelines prescribed by the respective education boards.
                                    </p>
                                    <div className="flex items-center gap-4 text-[9px] font-black text-[#01A651] uppercase tracking-widest border border-[#01A651]/10 w-fit px-4 py-2 rounded-lg bg-[#01A651]/5">
                                        <i className="fas fa-truck-fast"></i> Rapid Logistics Guaranteed
                                    </div>
                                </div>
                            )}
                            {activeTab === 'features' && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in slide-in-from-bottom-2 duration-500">
                                    {book.features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-white border border-gray-100 rounded-xl md:rounded-2xl shadow-sm group hover:border-[#EC1C24]/30 transition-all">
                                            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-[#EC1C24]/10 flex items-center justify-center text-[#EC1C24] group-hover:bg-[#EC1C24] group-hover:text-white transition-all"><i className="fas fa-check text-[10px] md:text-xs"></i></div>
                                            <span className="text-[10px] md:text-[11px] font-black text-gray-800 uppercase tracking-tighter">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {activeTab === 'specifications' && (
                                <div className="space-y-4 animate-in fade-in duration-500 bg-white p-6 md:p-8 rounded-[24px] md:rounded-3xl border border-gray-50 shadow-sm">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-50 text-sm"><span className="text-gray-300 font-bold uppercase tracking-widest text-[8px]">Curriculum</span><span className="font-black text-gray-800 uppercase text-[10px] md:text-xs">Standard EM Board</span></div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-50 text-sm"><span className="text-gray-300 font-bold uppercase tracking-widest text-[8px]">Edition</span><span className="font-black text-gray-800 uppercase text-[10px] md:text-xs">2026 Academic Year</span></div>
                                    <div className="flex justify-between items-center py-2 text-sm"><span className="text-gray-300 font-bold uppercase tracking-widest text-[8px]">Publication</span><span className="font-black text-[#EC1C24] uppercase text-[10px] md:text-xs text-right">Ravi Publishers</span></div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-3 mb-8">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Select Quantity</label>
                            <div className="flex items-center gap-4 bg-white border border-gray-100 p-2 rounded-2xl w-fit shadow-sm">
                                <button
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="w-12 h-12 flex items-center justify-center bg-gray-50 hover:bg-[#EC1C24] hover:text-white rounded-xl transition-all font-black"
                                >
                                    <i className="fas fa-minus text-xs"></i>
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-16 text-center font-black text-lg bg-transparent border-none outline-none"
                                />
                                <button
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="w-12 h-12 flex items-center justify-center bg-gray-50 hover:bg-[#01A651] hover:text-white rounded-xl transition-all font-black"
                                >
                                    <i className="fas fa-plus text-xs"></i>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <button
                                onClick={() => onAddToCart(book, quantity)}
                                className="flex-[2] bg-black hover:bg-[#EC1C24] text-white py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] transition-all shadow-2xl flex items-center justify-center gap-4 md:gap-6 group active:scale-95"
                            >
                                Add To Order Form
                                <i className="fas fa-file-invoice-dollar text-base md:text-lg transition-transform group-hover:scale-125"></i>
                            </button>
                            <button className="flex-1 bg-white hover:bg-gray-50 text-[#231F20] border-2 border-gray-100 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all">
                                Add To Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;
