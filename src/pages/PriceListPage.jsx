import React from 'react';

const PriceListPage = () => {
    const courseBooks = [
        { subject: 'English', pk: 120, jk: 180, sk: 225, c1: 250, c2: 300, c3: 275, c4: 300, c5: 330 },
        { subject: 'Hindi Reader', pk: '–', jk: 170, sk: 150, c1: 150, c2: 170, c3: 170, c4: 170, c5: '–' },
        { subject: 'Mathematics', pk: '–', jk: 180, sk: 180, c1: 250, c2: 300, c3: 300, c4: 350, c5: 410 },
        { subject: 'EVS', pk: '–', jk: 150, sk: 220, c1: 240, c2: 300, c3: 410, c4: 525, c5: 575 },
        { subject: 'English Grammar', pk: '–', jk: '–', sk: 180, c1: 210, c2: 250, c3: 250, c4: 250, c5: 250 },
        { subject: 'Pre-KG Rhymes', pk: 100, jk: '–', sk: '–', c1: '–', c2: '–', c3: '–', c4: '–', c5: '–' },
    ];

    const semesterBooks = [
        { class: 'Pre-KG', coursebook: 210, workbook: 150 },
        { class: 'Jr.KG', coursebook: 300, workbook: 150 },
        { class: 'Sr.KG', coursebook: 350, workbook: 160 },
        { class: '1st', coursebook: 525, workbook: 210 },
        { class: '2nd', coursebook: 575, workbook: 240 },
        { class: '3rd', coursebook: 625, workbook: 260 },
        { class: '4th', coursebook: 725, workbook: 280 },
        { class: '5th', coursebook: 750, workbook: 330 },
    ];

    const termBooks = [
        { class: 'Pre-KG', coursebook: 150, workbook: 150 },
        { class: 'Jr.KG', coursebook: 225, workbook: 150 },
        { class: 'Sr.KG', coursebook: 250, workbook: 160 },
        { class: '1st', coursebook: 375, workbook: 145 },
        { class: '2nd', coursebook: 425, workbook: 175 },
        { class: '3rd', coursebook: 450, workbook: 190 },
        { class: '4th', coursebook: 500, workbook: 220 },
        { class: '5th', coursebook: 550, workbook: 240 },
    ];

    const individualWorkbooks = [
        { subject: 'English', sk: 160, c1: 180, c2: 200, c3: 160, c4: 200, c5: 210 },
        { subject: 'EVS', sk: '–', c1: 140, c2: 140, c3: 120, c4: 290, c5: 260 },
        { subject: 'Hindi', sk: 160, c1: 90, c2: 90, c3: 110, c4: 110, c5: 120 },
    ];

    return (
        <div className="pt-32 md:pt-52 min-h-screen bg-[#f8f9fb] pb-20 md:pb-32 animate-in fade-in duration-1000">
            <div className="max-w-7xl mx-auto px-6 md:px-20">

                {/* Header Block */}
                <div className="text-center mb-16 md:mb-24 relative">
                    <div className="inline-block bg-[#231F20] text-white px-5 py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6 md:mb-8 shadow-xl">Catalogue 2026</div>
                    <h1 className="text-4xl md:text-8xl font-black text-[#231F20] leading-[0.9] tracking-tighter uppercase mb-4 md:mb-6">
                        Official <br /> <span className="text-[#EC1C24]">Price List</span>
                    </h1>
                    <p className="text-gray-400 font-bold uppercase text-[9px] md:text-[11px] tracking-widest max-w-xs md:max-w-none mx-auto">Effective and standard pricing for Enlight e-Learning Series</p>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#01A651]/10 rounded-full blur-3xl -z-10"></div>
                </div>

                {/* 1. Course Books Table */}
                <div className="bg-white rounded-[32px] md:rounded-[50px] shadow-2xl border border-gray-100 p-6 md:p-16 mb-16 md:mb-24 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-[#EC1C24]"></div>
                    <h2 className="text-xl md:text-3xl font-black text-[#231F20] uppercase tracking-tighter mb-8 md:mb-12 flex items-center gap-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#EC1C24]/10 rounded-lg md:rounded-xl flex items-center justify-center text-[#EC1C24]"><i className="fas fa-book text-sm"></i></div>
                        Enlight Course Books
                    </h2>
                    <div className="overflow-x-auto -mx-6 px-6 no-scrollbar">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="border-b-2 border-gray-100">
                                    <th className="py-4 md:py-6 pr-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">Subject</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#EC1C24]">Pre-KG</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#EC1C24]">Jr.KG</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#EC1C24]">Sr.KG</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#01A651]">1st</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#01A651]">2nd</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#01A651]">3rd</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#01A651]">4th</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#01A651]">5th</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {courseBooks.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 md:py-6 pr-4 text-[10px] md:text-xs font-black text-[#231F20] uppercase tracking-tighter whitespace-nowrap">{row.subject}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-bold text-gray-600">₹{row.pk}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-bold text-gray-600">₹{row.jk}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-bold text-gray-600">₹{row.sk}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-black text-[#231F20]">₹{row.c1}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-black text-[#231F20]">₹{row.c2}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-black text-[#231F20]">₹{row.c3}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-black text-[#231F20]">₹{row.c4}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-black text-[#231F20]">₹{row.c5}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 md:hidden text-[8px] font-black uppercase text-gray-300 text-center tracking-widest">
                        <i className="fas fa-arrow-right-long animate-bounce mr-2"></i> Swipe left for all classes
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
                    {/* 2. Semester Books */}
                    <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2E3092]/5 rounded-full -translate-y-10 translate-x-10"></div>
                        <h2 className="text-lg md:text-2xl font-black text-[#231F20] uppercase tracking-tighter mb-8 md:mb-10 flex items-center gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#2E3092]/10 rounded-lg md:rounded-xl flex items-center justify-center text-[#2E3092]"><i className="fas fa-layer-group text-sm"></i></div>
                            Semester Series
                        </h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="py-3 text-[8px] md:text-[9px] font-black uppercase text-gray-400">Class</th>
                                    <th className="py-3 text-[8px] md:text-[9px] font-black uppercase text-[#EC1C24]">Coursebook</th>
                                    <th className="py-3 text-[8px] md:text-[9px] font-black uppercase text-[#01A651]">Workbook</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {semesterBooks.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-3 text-[10px] md:text-[11px] font-black uppercase text-[#231F20]">{row.class}</td>
                                        <td className="py-3 text-xs md:text-sm font-bold text-gray-600">₹{row.coursebook}</td>
                                        <td className="py-3 text-xs md:text-sm font-bold text-gray-600">₹{row.workbook}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* 3. Term Books */}
                    <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFF200]/10 rounded-full -translate-y-10 translate-x-10"></div>
                        <h2 className="text-lg md:text-2xl font-black text-[#231F20] uppercase tracking-tighter mb-8 md:mb-10 flex items-center gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FFF200]/20 rounded-lg md:rounded-xl flex items-center justify-center text-[#231F20]"><i className="fas fa-calendar-days text-sm"></i></div>
                            Term Series (3 Terms)
                        </h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="py-3 text-[8px] md:text-[9px] font-black uppercase text-gray-400">Class</th>
                                    <th className="py-3 text-[8px] md:text-[9px] font-black uppercase text-[#EC1C24]">Coursebook</th>
                                    <th className="py-3 text-[8px] md:text-[9px] font-black uppercase text-[#01A651]">Workbook</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {termBooks.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-3 text-[10px] md:text-[11px] font-black uppercase text-[#231F20]">{row.class}</td>
                                        <td className="py-3 text-xs md:text-sm font-bold text-gray-600">₹{row.coursebook}</td>
                                        <td className="py-3 text-xs md:text-sm font-bold text-gray-600">₹{row.workbook}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 4. Individual Work Books */}
                <div className="bg-[#231F20] rounded-[32px] md:rounded-[50px] shadow-2xl p-8 md:p-16 text-white overflow-hidden relative mb-16 md:mb-24">
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#EC1C24]/10 rounded-full blur-3xl"></div>
                    <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-10 md:mb-12 flex items-center gap-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#EC1C24] rounded-lg md:rounded-xl flex items-center justify-center text-white"><i className="fas fa-pen-clip text-sm"></i></div>
                        Individual Work Books
                    </h2>
                    <div className="overflow-x-auto -mx-6 px-6 no-scrollbar">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-4 md:py-6 pr-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/40">Subject</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#FFF200]">Sr.KG</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#FFF200]">1st</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#FFF200]">2nd</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#FFF200]">3rd</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#FFF200]">4th</th>
                                    <th className="py-4 md:py-6 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#FFF200]">5th</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {individualWorkbooks.map((row, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors">
                                        <td className="py-4 md:py-6 pr-4 text-[10px] md:text-xs font-black uppercase tracking-widest text-white whitespace-nowrap">{row.subject}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-bold text-white/60">₹{row.sk}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-bold text-white/60">₹{row.c1}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-bold text-white/60">₹{row.c2}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-bold text-white/60">₹{row.c3}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-bold text-white/60">₹{row.c4}</td>
                                        <td className="py-4 md:py-6 px-4 text-xs md:text-sm font-bold text-white/60">₹{row.c5}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-white rounded-[40px] md:rounded-[60px] p-10 md:p-20 shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#231F20]">Download PDF List</h3>
                        <p className="text-gray-400 mt-2 font-bold uppercase text-[8px] md:text-[10px] tracking-[0.4em]">Print-ready catalogue for institutions</p>
                    </div>
                    <button className="w-full md:w-auto bg-[#EC1C24] hover:bg-black text-white px-10 md:px-14 py-4 md:py-6 rounded-2xl md:rounded-[24px] font-black text-[9px] md:text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 md:gap-6 shadow-2xl active:scale-95 group">
                        Secure Download <i className="fas fa-file-pdf text-lg group-hover:scale-110 transition-transform"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PriceListPage;
