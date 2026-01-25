import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#231F20] text-white pt-16 md:pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
                <div className="text-left">
                    <div className="flex flex-col mb-8">
                        <span className="text-[#EC1C24] font-black italic text-4xl tracking-tighter leading-none">Ravi</span>
                        <span className="text-[#01A651] font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mt-1 pr-2">Publishers</span>
                        <div className="w-12 h-1 bg-[#FFF200] mt-3 rounded-full"></div>
                    </div>
                    <p className="text-gray-400 text-xs md:text-[13px] leading-relaxed mb-8 md:mb-10 font-medium">
                        Authorized publishers of high-quality educational materials since 1988. Delivering Govt. prescribed workbooks and Enlight series textbooks across AP & Telangana.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#EC1C24] transition-all border border-white/5 shadow-inner"><i className="fab fa-facebook-f text-sm"></i></a>
                        <a href="#" className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#2E3092] transition-all border border-white/5 shadow-inner"><i className="fab fa-twitter text-sm"></i></a>
                        <a href="#" className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#01A651] transition-all border border-white/5 shadow-inner"><i className="fab fa-whatsapp text-sm"></i></a>
                    </div>
                </div>

                <div className="text-left">
                    <h4 className="font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-6 md:mb-10 text-white/40">Product Catalog</h4>
                    <ul className="space-y-3 md:space-y-4 text-gray-400 text-[10px] md:text-xs font-black uppercase tracking-widest">
                        <li><a href="#" className="hover:text-[#EC1C24] transition-colors">AP Workbooks</a></li>
                        <li><a href="#" className="hover:text-[#01A651] transition-colors">TG Workbooks</a></li>
                        <li><a href="#" className="hover:text-[#2E3092] transition-colors">Enlight Series</a></li>
                        <li><a href="#" className="hover:text-[#FFF200] transition-colors">Language Books</a></li>
                    </ul>
                </div>

                <div className="text-left">
                    <h4 className="font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-6 md:mb-10 text-white/40">Student Support</h4>
                    <ul className="space-y-3 md:space-y-4 text-gray-400 text-[10px] md:text-xs font-black uppercase tracking-widest">
                        <li><Link to="/about" className="hover:text-[#EC1C24] transition-colors">Our History / About</Link></li>
                        <li><Link to="/price-list" className="hover:text-[#EC1C24] transition-colors">Price List 2026</Link></li>
                        <li><a href="#" className="hover:text-[#EC1C24] transition-colors">Check Order Status</a></li>
                        <li><a href="#" className="hover:text-[#EC1C24] transition-colors">Bulk Order Enquiry</a></li>
                    </ul>
                </div>

                <div className="text-left">
                    <h4 className="font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-6 md:mb-10 text-white/40">Stay Updated</h4>
                    <p className="text-gray-400 text-[10px] md:text-xs mb-6 md:mb-8 uppercase font-bold tracking-tighter">Get the latest Syllabus updates for 2026 academic year.</p>
                    <div className="flex flex-col gap-3 md:gap-4">
                        <input type="email" placeholder="YOUR EMAIL ADDRESS" className="bg-white/5 border border-white/10 px-5 py-3 md:py-4 rounded-xl text-[9px] md:text-[10px] font-black tracking-widest focus:outline-none focus:border-[#EC1C24] text-white" />
                        <button className="bg-[#EC1C24] hover:bg-[#bd0021] text-white font-black py-3 md:py-4 rounded-xl text-[9px] md:text-[10px] transition-all uppercase tracking-[0.2em] shadow-xl shadow-[#EC1C24]/10">Subscribe Now</button>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                        <div className="flex items-center gap-3 text-gray-400 text-[9px] md:text-[10px] font-black uppercase">
                            <i className="fas fa-envelope text-[#EC1C24] w-4"></i>
                            info@ravipublishers.com
                        </div>
                        <div className="flex items-center gap-3 text-gray-400 text-[9px] md:text-[10px] font-black uppercase">
                            <i className="fas fa-phone text-[#EC1C24] w-4"></i>
                            +91 98491 00063
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-20 border-t border-white/5 pt-10 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                <div className="text-gray-500 text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-center md:text-left">
                    &copy; 2026 RAVI PUBLISHERS. ESTD 1988. <br className="md:hidden" /> ALL RIGHTS RESERVED.
                </div>
                <div className="flex gap-4 md:gap-6 opacity-30 grayscale hover:grayscale-0 transition-all">
                    <i className="fab fa-cc-visa text-2xl md:text-3xl"></i>
                    <i className="fab fa-cc-mastercard text-2xl md:text-3xl"></i>
                    <i className="fab fa-cc-paypal text-2xl md:text-3xl"></i>
                    <i className="fab fa-cc-stripe text-2xl md:text-3xl"></i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
