import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookCard = React.memo(({ book, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="group bg-white rounded-[24px] md:rounded-[32px] border border-gray-100 hover:border-[#EC1C24]/20 transition-all duration-700 flex flex-col h-full overflow-hidden hover:shadow-[0_30px_60px_rgba(236,28,36,0.12)]">
            {/* Dynamic Image Container */}
            <div className="bg-gray-50/50 p-4 md:p-8 relative aspect-[4/5] md:aspect-[4/5] flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:bg-white">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#EC1C24_1px,transparent_1px)] [background-size:15px_15px] md:[background-size:20px_20px]"></div>

                <img
                    src={book.image}
                    alt={book.name}
                    loading="lazy"
                    className="max-h-full max-w-[85%] md:max-w-full object-contain transform group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-700 shadow-[0_15px_30px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm"
                />

                {/* Floating Actions - Simplified for mobile touch */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4">
                    <Link
                        to={`/book/${book.id}`}
                        className="w-12 h-12 md:w-14 md:h-14 bg-white text-[#231F20] rounded-xl md:rounded-2xl shadow-2xl flex items-center justify-center hover:bg-[#EC1C24] hover:text-white transition-all transform translate-y-8 group-hover:translate-y-0 duration-500"
                    >
                        <i className="fas fa-expand-arrows-alt text-base md:text-lg"></i>
                    </Link>
                </div>

                {/* Dynamic Badge */}
                {book.price < book.oldPrice && (
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#EC1C24] text-white text-[7px] md:text-[9px] font-black px-3 md:px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                        -{Math.round((1 - book.price / book.oldPrice) * 100)}%
                    </div>
                )}
            </div>

            {/* Luxury Info Section */}
            <div className="p-5 md:p-8 flex flex-col flex-1 text-left bg-white relative z-10">
                <div className="flex justify-between items-center mb-3 md:mb-4">
                    <span className="text-[8px] md:text-[9px] font-black text-[#01A651] uppercase tracking-[0.15em] lg:tracking-[0.2em]">{book.category}</span>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className={`fas fa-star text-[6px] md:text-[7px] ${i < book.rating ? 'text-[#FFF200]' : 'text-gray-100'}`}></i>
                        ))}
                    </div>
                </div>

                <Link to={`/book/${book.id}`} className="block mb-3 md:mb-4 group-hover:no-underline">
                    <h3 className="font-black text-[#231F20] text-sm md:text-lg leading-[1.2] line-clamp-2 min-h-[2.4rem] md:min-h-[3rem] group-hover:text-[#EC1C24] transition-colors tracking-tighter uppercase">
                        {book.name}
                    </h3>
                </Link>

                <p className="text-gray-400 text-[10px] md:text-[11px] font-medium leading-relaxed line-clamp-2 mb-4 md:mb-6 opacity-80">
                    {book.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-[#01A651]/5 text-[#01A651] text-[7px] font-black uppercase tracking-[0.15em] rounded-md border border-[#01A651]/10">
                        <i className="fas fa-check-circle mr-1"></i> In Stock
                    </span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 md:pt-6 border-t border-gray-50">
                    <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-black text-[#231F20] tracking-tighter">₹{book.price}</span>
                        <span className="text-[8px] md:text-[10px] text-gray-300 line-through font-bold uppercase">MRP ₹{book.oldPrice}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center bg-gray-50 rounded-xl md:rounded-2xl px-3 py-1 border border-gray-100 group/qty hover:bg-white hover:border-[#EC1C24]/20 transition-all">
                            <span className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-widest mr-1">QTY</span>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-8 md:w-10 text-center font-black text-[10px] md:text-xs bg-transparent border-none outline-none"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onAddToCart(book, quantity);
                            }}
                            className="group/btn relative w-10 h-10 md:w-12 md:h-12 bg-[#231F20] rounded-xl md:rounded-2xl flex items-center justify-center transition-all hover:bg-[#EC1C24] overflow-hidden active:scale-90"
                        >
                            <i className="fas fa-cart-plus text-white transition-all duration-500"></i>
                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default BookCard;
