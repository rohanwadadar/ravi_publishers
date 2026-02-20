import React from 'react';

const AboutPage = () => {
    return (
        <div className="pt-32 md:pt-52 min-h-screen bg-white pb-20 md:pb-32 animate-in fade-in duration-1000">
            {/* Decorative Background Elements */}
            <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-[#01A651]/5 rounded-full blur-[140px] -z-10 pointer-events-none"></div>
            <div className="fixed bottom-0 left-0 w-[40vw] h-[40vw] bg-[#EC1C24]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-20">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16 md:mb-32">
                    <div className="w-full lg:w-1/2 text-left order-2 lg:order-1">
                        <span className="text-[#EC1C24] text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 md:mb-6 block">Established 1988</span>
                        <h1 className="text-4xl md:text-8xl font-black text-[#231F20] leading-[0.9] tracking-tighter uppercase mb-6 md:mb-8">
                            Decades of <br /> <span className="text-[#01A651]">Educational</span> <br /> Excellence
                        </h1>
                        <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                            We, Ravi Publishers, are one of the leading children’s school book publishers in South India, dedicated to empowering future generations with reliable resources.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 relative order-1 lg:order-2 px-8 lg:px-0">
                        <div className="relative transform lg:rotate-3 border-[10px] md:border-[16px] border-white shadow-2xl rounded-[40px] md:rounded-[60px] overflow-hidden bg-gray-50 aspect-square flex items-center justify-center p-12 md:p-20">
                            <div className="absolute inset-0 bg-[#EC1C24]/5"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <span className="text-[#EC1C24] font-black italic text-6xl md:text-8xl tracking-tighter">Ravi</span>
                                <span className="text-[#01A651] font-bold text-sm md:text-xl uppercase tracking-[0.4em] mt-2">Publishers</span>
                                <div className="w-16 md:w-24 h-1 md:h-2 bg-[#FFF200] mt-4 md:mt-6 rounded-full"></div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-10 bg-[#231F20] text-white p-6 md:p-10 rounded-[24px] md:rounded-[32px] shadow-2xl animate-bounce">
                            <span className="text-2xl md:text-4xl font-black block leading-none">38+</span>
                            <span className="text-[7px] md:text-[10px] font-bold uppercase tracking-widest block mt-1">Years of Trust</span>
                        </div>
                    </div>
                </div>

                {/* History & expansion */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-32 bg-gray-50/50 p-8 md:p-16 rounded-[40px] md:rounded-[60px] border border-gray-100">
                    <div className="text-left">
                        <h2 className="text-2xl md:text-3xl font-black text-[#231F20] uppercase tracking-tighter mb-6 md:mb-8 border-l-4 md:border-l-8 border-[#EC1C24] pl-6 md:pl-8">Our Journey</h2>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 font-medium">
                            Our company was established in the year 1988 in Vijayawada, United Andhra Pradesh, initially publishing Telugu medium books only.
                        </p>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                            Over the years, we expanded our presence to other states such as Tamil Nadu, Karnataka, and Kerala, supported by over 100 dealers and branches. In 1993, we began publishing English medium books.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:gap-8">
                        <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[40px] shadow-lg border border-gray-50">
                            <span className="text-2xl md:text-3xl font-black text-[#2E3092] block mb-1 md:mb-2">600+</span>
                            <span className="text-[7px] md:text-[10px] font-black uppercase text-gray-400 tracking-widest leading-none">Titles Published</span>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[40px] shadow-lg border border-gray-50">
                            <span className="text-2xl md:text-3xl font-black text-[#01A651] block mb-1 md:mb-2">4</span>
                            <span className="text-[7px] md:text-[10px] font-black uppercase text-gray-400 tracking-widest leading-none">Languages</span>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[40px] shadow-lg border border-gray-50">
                            <span className="text-2xl md:text-3xl font-black text-[#EC1C24] block mb-1 md:mb-2">100+</span>
                            <span className="text-[7px] md:text-[10px] font-black uppercase text-gray-400 tracking-widest leading-none">Auth. Dealers</span>
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[40px] shadow-lg border border-gray-50">
                            <span className="text-2xl md:text-3xl font-black text-[#FFF200] drop-shadow-sm block mb-1 md:mb-2">1988</span>
                            <span className="text-[7px] md:text-[10px] font-black uppercase text-gray-400 tracking-widest leading-none">Founding Year</span>
                        </div>
                    </div>
                </div>

                {/* Major Series */}
                <div className="mb-16 md:mb-32 px-2">
                    <h2 className="text-3xl md:text-4xl font-black text-center text-[#231F20] uppercase tracking-tighter mb-12 md:mb-20">Major Book Series</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[50px] shadow-xl border border-gray-100 group hover:border-[#2E3092]/30 transition-all">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#2E3092]/10 rounded-[20px] md:rounded-3xl flex items-center justify-center text-[#2E3092] mb-8 md:mb-10 group-hover:bg-[#2E3092] group-hover:text-white transition-all">
                                <i className="fas fa-lightbulb text-2xl md:text-3xl"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-[#231F20] uppercase tracking-tighter mb-6">Enlight e-Learning</h3>
                            <ul className="text-left space-y-4 text-gray-500 font-medium text-sm md:text-base">
                                <li className="flex items-center gap-3"><i className="fas fa-check text-[#01A651]"></i> Based on NCERT & CBSE guidelines</li>
                                <li className="flex items-center gap-3"><i className="fas fa-check text-[#01A651]"></i> Pre-KG to 5th Course & Work Books</li>
                                <li className="flex items-center gap-3"><i className="fas fa-check text-[#01A651]"></i> Full Semester Kits with Flash Cards</li>
                                <li className="flex items-center gap-3"><i className="fas fa-check text-[#01A651]"></i> Completion Certificates included</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[50px] shadow-xl border border-gray-100 group hover:border-[#01A651]/30 transition-all">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#01A651]/10 rounded-[20px] md:rounded-3xl flex items-center justify-center text-[#01A651] mb-8 md:mb-10 group-hover:bg-[#01A651] group-hover:text-white transition-all">
                                <i className="fas fa-child-reaching text-2xl md:text-3xl"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-[#231F20] uppercase tracking-tighter mb-6">Joyway e-Learning</h3>
                            <ul className="text-left space-y-4 text-gray-500 font-medium text-sm md:text-base">
                                <li className="flex items-center gap-3"><i className="fas fa-check text-[#01A651]"></i> State Board & Common Syllabus</li>
                                <li className="flex items-center gap-3"><i className="fas fa-check text-[#01A651]"></i> Nursery to 5th Course Books</li>
                                <li className="flex items-center gap-3"><i className="fas fa-check text-[#01A651]"></i> Comprehensive Work Books</li>
                                <li className="flex items-center gap-3"><i className="fas fa-check text-[#01A651]"></i> Interactive Learning Material</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Management & Office */}
                <div className="bg-[#231F20] rounded-[40px] md:rounded-[60px] p-10 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#EC1C24]/10 rounded-full blur-3xl"></div>
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-12 md:gap-16 relative z-10">
                        <div className="text-left">
                            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 md:mb-8 border-l-4 border-[#FFF200] pl-6 md:pl-8 leading-none">Leadership <br /> Perspective</h3>
                            <div className="space-y-6 max-w-xl">
                                <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
                                    "Built on trust and quality for nearly four decades, we remain dedicated to providing future generations with reliable and valuable educational resources."
                                </p>
                                <div className="pt-4 md:pt-6">
                                    <span className="text-[#FFF200] font-black uppercase text-lg md:text-xl block tracking-tighter">Makkena Anjaneya Rao</span>
                                    <span className="text-white/40 font-bold uppercase text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em]">Founder & Managing Director</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[350px] bg-white/5 border border-white/10 rounded-[32px] md:rounded-[40px] p-8 md:p-10 backdrop-blur-xl">
                            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-10 text-white/40">Head Office</h4>
                            <div className="space-y-6 md:space-y-8">
                                <div className="flex items-start gap-4 md:gap-5 text-left">
                                    <i className="fas fa-location-dot text-[#EC1C24] text-lg md:text-xl mt-1"></i>
                                    <p className="text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed">Ranigari Thota, <br /> Vijayawada - 13</p>
                                </div>
                                <div className="flex items-start gap-4 md:gap-5 text-left">
                                    <i className="fas fa-phone text-[#01A651] text-lg md:text-xl mt-1"></i>
                                    <div>
                                        <p className="text-xs md:text-sm font-bold uppercase tracking-widest">+91 98491 00063</p>
                                        <p className="text-xs md:text-sm font-bold uppercase tracking-widest">+91 99668 10000</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 md:gap-5 text-left">
                                    <i className="fas fa-envelope text-[#2E3092] text-lg md:text-xl mt-1"></i>
                                    <p className="text-xs md:text-sm font-bold uppercase tracking-widest">info@ravipublishers.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
