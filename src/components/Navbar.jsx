// // // import React, { useState, useEffect } from 'react';
// // // import { Link, useLocation } from 'react-router-dom';
// // // import { navCategories, booksData } from '../data';

// // // const Logo = () => (
// // //     <div className="flex flex-col items-center">
// // //         <div className="bg-[#01A651] px-4 py-1 rounded-full flex flex-col items-center shadow-lg border-2 border-white/20">
// // //             <div className="bg-[#FFF200] px-3 py-0.5 rounded-full flex items-center gap-2 border border-[#01A651]/20">
// // //                 <span className="text-[#EC1C24] font-black italic text-xl md:text-2xl tracking-tighter drop-shadow-sm leading-none">Ravi</span>
// // //                 <div className="w-3 h-3 text-[#2E3092]">
// // //                     <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.39 8.26L21 9.27L16.27 13.87L17.38 20.46L12 17.38L6.62 20.46L7.73 13.87L3 9.27L9.61 8.26L12 2Z" /></svg>
// // //                 </div>
// // //             </div>
// // //             <span className="text-white font-black text-[7px] md:text-[9px] uppercase tracking-[0.2em] mt-0.5">Since 1988</span>
// // //         </div>
// // //     </div>
// // // );

// // // const Navbar = ({ cartCount, onOpenCart, onSearch }) => {
// // //     const [activeDropdown, setActiveDropdown] = useState(null);
// // //     const [profile, setProfile] = useState({ name: 'Principal / Admin', location: 'India' });
// // //     const [showProfileEdit, setShowProfileEdit] = useState(false);
// // //     const [isScrolled, setIsScrolled] = useState(false);
// // //     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// // //     const [searchStr, setSearchStr] = useState('');
// // //     const [searchCategory, setSearchCategory] = useState('Catalogue Library');
// // //     const [liveResults, setLiveResults] = useState({ books: [], categories: [] });
// // //     const location = useLocation();

// // //     const handleSearchInput = (val) => {
// // //         setSearchStr(val);
// // //         if (val.trim().length > 1) {
// // //             const v = val.toLowerCase();
// // //             const filteredBooks = booksData.filter(b =>
// // //                 b.name.toLowerCase().includes(v) ||
// // //                 b.category.toLowerCase().includes(v)
// // //             ).slice(0, 4);

// // //             const filteredCats = Object.keys(navCategories).filter(key =>
// // //                 key.replace('_', ' ').toLowerCase().includes(v)
// // //             ).map(key => ({
// // //                 label: key.replace('_', ' '),
// // //                 id: key
// // //             })).slice(0, 3);

// // //             setLiveResults({ books: filteredBooks, categories: filteredCats });
// // //         } else {
// // //             setLiveResults({ books: [], categories: [] });
// // //         }
// // //     };

// // //     const handleSearchSubmit = (e) => {
// // //         if (e) e.preventDefault();
// // //         const query = searchStr.trim();
// // //         const cat = searchCategory === 'Catalogue Library' ? '' : searchCategory;
// // //         onSearch(query, cat);
// // //         setMobileMenuOpen(false);
// // //         setLiveResults({ books: [], categories: [] });
// // //     };

// // //     const isHomePage = location.pathname === '/';

// // //     useEffect(() => {
// // //         const handleScroll = () => {
// // //             setIsScrolled(window.scrollY > 50);
// // //         };
// // //         window.addEventListener('scroll', handleScroll);

// // //         const savedProfile = localStorage.getItem('ravibooks_profile');
// // //         if (savedProfile) {
// // //             try {
// // //                 setProfile(JSON.parse(savedProfile));
// // //             } catch (e) {
// // //                 console.error("Error parsing profile", e);
// // //             }
// // //         }

// // //         return () => window.removeEventListener('scroll', handleScroll);
// // //     }, []);

// // //     const saveProfile = (e) => {
// // //         e.preventDefault();
// // //         const formData = new FormData(e.target);
// // //         const newProfile = {
// // //             name: formData.get('name') || 'Guest User',
// // //             location: formData.get('location') || 'India'
// // //         };
// // //         setProfile(newProfile);
// // //         localStorage.setItem('ravibooks_profile', JSON.stringify(newProfile));
// // //         setShowProfileEdit(false);
// // //     };

// // //     const useSolidStyle = isScrolled || !isHomePage;

// // //     const navItems = [
// // //         { label: 'Official Home', id: '' },
// // //         { label: 'About', id: 'about_nav' },
// // //         { label: 'Price List', id: 'price_list_nav' },
// // //         { label: 'Enlight Core', id: 'enlight_course' },
// // //         { label: 'Semester Series', id: 'enlight_semester' },
// // //         { label: 'Term Series', id: 'enlight_term' },
// // //         { label: 'Kits & Flash', id: 'kits_flash' },
// // //         { label: 'Workbooks', id: 'workbooks' },
// // //         { label: 'Regional', id: 'languages' }
// // //     ];

// // //     return (
// // //         <div className={`w-full fixed top-0 z-50 transition-all duration-500 ${useSolidStyle ? 'shadow-2xl' : ''}`} onMouseLeave={() => setActiveDropdown(null)}>
// // //             {/* Announcement Bar - Hidden on Mobile */}
// // //             <div className="bg-[#231F20] text-white py-2 px-4 md:px-20 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] border-b border-white/10 relative z-50 hidden md:flex">
// // //                 <div className="flex-1 text-center flex items-center justify-center gap-10">
// // //                     <span className="flex items-center gap-2"><i className="fas fa-truck-fast text-[#FFF200]"></i> 48-Hour Institution Dispatch</span>
// // //                     <span className="flex items-center gap-2 hidden lg:flex"><i className="fas fa-phone text-[#01A651]"></i> +91 98491 00063</span>
// // //                     <span className="flex items-center gap-2 text-[#FFF200] animate-pulse"><i className="fas fa-file-invoice"></i> ORDER FORM 2026 ACTIVE</span>
// // //                 </div>
// // //             </div>

// // //             {/* Main Branding Bar */}
// // //             <nav className={`py-3 px-4 md:px-20 flex items-center justify-between gap-4 md:gap-10 transition-all duration-500 ${useSolidStyle ? 'bg-white border-b border-gray-100' : 'bg-[#01A651] text-white shadow-lg'}`}>
// // //                 <div className="flex items-center gap-4 text-left">
// // //                     <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-xl focus:outline-none">
// // //                         <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
// // //                     </button>
// // //                     <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105" onClick={() => setMobileMenuOpen(false)}>
// // //                         <Logo />
// // //                     </Link>
// // //                 </div>

// // //                 <form onSubmit={handleSearchSubmit} className={`flex-1 hidden sm:flex max-w-2xl rounded-[16px] overflow-hidden border transition-all items-center shadow-sm ${useSolidStyle ? 'bg-gray-100 border-gray-200 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#EC1C24]/5' : 'bg-white/20 border-white/20 backdrop-blur-md'}`}>
// // //                     <div className="relative h-full group hidden lg:block">
// // //                         <select
// // //                             value={searchCategory}
// // //                             onChange={(e) => setSearchCategory(e.target.value)}
// // //                             className={`h-full text-[9px] font-black uppercase py-4 px-6 outline-none border-r transition-colors cursor-pointer appearance-none pr-10 ${useSolidStyle ? 'bg-gray-200/50 text-gray-400 group-hover:bg-gray-200 border-gray-200' : 'bg-transparent text-white border-white/20'}`}
// // //                         >
// // //                             <option className="text-black">Catalogue Library</option>
// // //                             <option className="text-black">Enlight Core</option>
// // //                             <option className="text-black">Semester Series</option>
// // //                             <option className="text-black">Term Series</option>
// // //                             <option className="text-black">Kits / Flash</option>
// // //                         </select>
// // //                         <i className={`fas fa-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-[10px] pointer-events-none ${useSolidStyle ? 'text-gray-400' : 'text-white'}`}></i>
// // //                     </div>
// // //                     <div className="flex-1 relative">
// // //                         <input
// // //                             type="text"
// // //                             placeholder="Search Series, Class, Subject..."
// // //                             value={searchStr}
// // //                             onChange={(e) => handleSearchInput(e.target.value)}
// // //                             className={`w-full px-4 md:px-6 py-3 bg-transparent outline-none text-xs md:text-sm font-bold placeholder:opacity-50 ${useSolidStyle ? 'text-[#231F20]' : 'text-white placeholder:text-white'}`}
// // //                         />

// // //                         {(liveResults.books.length > 0 || liveResults.categories.length > 0) && (
// // //                             <div className="absolute top-[120%] left-0 w-full bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 z-[100]">
// // //                                 <div className="p-4 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center">
// // //                                     <span className="text-[8px] font-black uppercase text-gray-400 tracking-widest">Instant Results</span>
// // //                                     <i className="fas fa-bolt text-[#FFF200] text-[10px] animate-pulse"></i>
// // //                                 </div>
// // //                                 <div className="max-h-[450px] overflow-y-auto">
// // //                                     {liveResults.categories.length > 0 && (
// // //                                         <div className="p-2 border-b border-gray-50">
// // //                                             <div className="px-4 py-2 text-[7px] font-black uppercase text-gray-300 tracking-[0.2em] text-left">Sectors & Categories</div>
// // //                                             {liveResults.categories.map(cat => (
// // //                                                 <Link
// // //                                                     key={cat.id}
// // //                                                     to={`/category/${cat.id}`}
// // //                                                     onClick={() => setLiveResults({ books: [], categories: [] })}
// // //                                                     className="block px-4 py-3 hover:bg-gray-50 text-left rounded-xl transition-all group/cat"
// // //                                                 >
// // //                                                     <span className="text-[10px] font-black uppercase tracking-tighter text-[#231F20] group-hover/cat:text-[#EC1C24]">{cat.label}</span>
// // //                                                 </Link>
// // //                                             ))}
// // //                                         </div>
// // //                                     )}
// // //                                     {liveResults.books.map((book) => (
// // //                                         <Link
// // //                                             key={book.id}
// // //                                             to={`/book/${book.id}`}
// // //                                             onClick={() => setLiveResults({ books: [], categories: [] })}
// // //                                             className="flex items-center gap-5 p-5 hover:bg-gray-50 transition-colors border-b border-gray-50 group/res text-left"
// // //                                         >
// // //                                             <div className="w-10 h-14 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center p-2 group-hover/res:bg-white shadow-sm transition-colors">
// // //                                                 <img src={book.image} alt="" className="max-h-full object-contain" />
// // //                                             </div>
// // //                                             <div className="flex-1">
// // //                                                 <h4 className="text-[11px] font-black uppercase text-[#231F20] leading-tight mb-1 group-hover/res:text-[#EC1C24] transition-colors">{book.name}</h4>
// // //                                                 <span className="text-[8px] font-black text-[#01A651] uppercase tracking-widest opacity-60">{book.category}</span>
// // //                                             </div>
// // //                                             <i className="fas fa-arrow-right text-[10px] text-gray-200 group-hover/res:text-[#EC1C24] group-hover/res:translate-x-1 transition-all"></i>
// // //                                         </Link>
// // //                                     ))}
// // //                                     <button
// // //                                         onClick={handleSearchSubmit}
// // //                                         className="w-full py-4 bg-gray-50 text-center text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
// // //                                     >
// // //                                         Expore Full Catalogue Results
// // //                                     </button>
// // //                                 </div>
// // //                             </div>
// // //                         )}
// // //                     </div>
// // //                     <button type="submit" className={`px-6 md:px-10 py-4 flex items-center justify-center transition-all font-black text-[10px] uppercase tracking-widest ${useSolidStyle ? 'bg-[#EC1C24] text-white hover:bg-[#231F20]' : 'bg-white text-[#EC1C24] hover:bg-[#231F20] hover:text-white'}`}>
// // //                         FIND
// // //                     </button>
// // //                 </form>

// // //                 <div className="flex items-center gap-2 md:gap-8 text-left">
// // //                     <div className="relative">
// // //                         <button
// // //                             onClick={() => setShowProfileEdit(!showProfileEdit)}
// // //                             className={`flex items-center gap-3 transition-colors ${useSolidStyle ? 'text-[#231F20]' : 'text-white'}`}
// // //                         >
// // //                             <div className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all border-4 overflow-hidden ${useSolidStyle ? 'bg-gray-50 border-white' : 'bg-white/10 border-white/20'}`}>
// // //                                 <img src="https://ui-avatars.com/api/?name=Ravi+Admin&background=EC1C24&color=fff&size=128" alt="Profile" className="w-full h-full object-cover" />
// // //                             </div>
// // //                             <div className="hidden lg:block text-left leading-tight">
// // //                                 <div className={`text-[8px] font-black uppercase tracking-widest opacity-60 mb-0.5`}>Identity</div>
// // //                                 <div className="text-xs truncate max-w-[100px] font-black uppercase tracking-tighter">{profile.name.split(' ')[0]}</div>
// // //                             </div>
// // //                         </button>

// // //                         {showProfileEdit && (
// // //                             <div className="absolute top-[130%] right-0 w-80 bg-white rounded-[32px] shadow-2xl p-8 text-gray-800 border border-gray-50 animate-in slide-in-from-top-2 duration-300 z-50">
// // //                                 <div className="flex items-center gap-4 mb-8">
// // //                                     <div className="w-12 h-12 bg-[#FFF200] rounded-2xl flex items-center justify-center text-[#231F20]"><i className="fas fa-id-card text-xl"></i></div>
// // //                                     <h4 className="text-sm font-black uppercase tracking-widest text-[#231F20]">User Settings</h4>
// // //                                 </div>
// // //                                 <form onSubmit={saveProfile} className="space-y-5">
// // //                                     <div className="space-y-2">
// // //                                         <label className="text-[9px] font-black text-gray-300 uppercase tracking-widest ml-1 text-left block">Entity Name</label>
// // //                                         <input name="name" defaultValue={profile.name} className="w-full bg-gray-50 border-none rounded-xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#EC1C24] font-bold text-xs" />
// // //                                     </div>
// // //                                     <div className="space-y-2">
// // //                                         <label className="text-[9px] font-black text-gray-300 uppercase tracking-widest ml-1 text-left block">Location / Branch</label>
// // //                                         <input name="location" defaultValue={profile.location} className="w-full bg-gray-50 border-none rounded-xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#EC1C24] font-bold text-xs" />
// // //                                     </div>
// // //                                     <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all hover:bg-[#EC1C24] shadow-xl shadow-black/10 mt-4">
// // //                                         CONFIRM IDENTITY
// // //                                     </button>
// // //                                 </form>
// // //                             </div>
// // //                         )}
// // //                     </div>

// // //                     <button onClick={onOpenCart} className={`relative group transition-all active:scale-95 ${useSolidStyle ? 'text-[#231F20]' : 'text-white'}`}>
// // //                         <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-all bg-opacity-10 ${useSolidStyle ? 'bg-black' : 'bg-white'}`}>
// // //                             <i className="fas fa-file-invoice-dollar text-lg md:text-xl group-hover:scale-110 transition-transform"></i>
// // //                         </div>
// // //                         <span className={`absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-black border-2 md:border-4 ${useSolidStyle ? 'bg-[#EC1C24] text-white border-white' : 'bg-[#FFF200] text-[#231F20] border-[#01A651]'}`}>
// // //                             {cartCount}
// // //                         </span>
// // //                     </button>
// // //                 </div>
// // //             </nav>

// // //             <div className={`transition-all duration-500 hidden md:block ${useSolidStyle ? 'bg-white border-b border-gray-100 py-1' : 'bg-[#2E3092] text-white'}`}>
// // //                 <ul className="max-w-7xl mx-auto px-10 lg:px-20 flex gap-6 lg:gap-12 text-[10px] font-black uppercase tracking-[0.1em] lg:tracking-[0.25em] py-4 relative scrollbar-hide overflow-x-auto whitespace-nowrap">
// // //                     {navItems.map((cat) => (
// // //                         <li
// // //                             key={cat.label}
// // //                             className={`hover:text-[#FFF200] cursor-pointer transition-all border-b-2 border-transparent pb-1 flex-shrink-0 ${!isScrolled && isHomePage ? 'text-white' : 'text-gray-600'}`}
// // //                             onMouseEnter={() => cat.id && !['about_nav', 'price_list_nav'].includes(cat.id) ? setActiveDropdown(cat.id) : setActiveDropdown(null)}
// // //                             onClick={() => setActiveDropdown(null)}
// // //                         >
// // //                             <Link to={cat.label === 'Official Home' ? '/' : (cat.label === 'About' ? '/about' : (cat.label === 'Price List' ? '/price-list' : `/category/${cat.id}`))}>{cat.label}</Link>
// // //                         </li>
// // //                     ))}
// // //                 </ul>
// // //             </div>

// // //             <div className={`fixed inset-0 bg-[#231F20] z-[60] transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden overflow-y-auto`}>
// // //                 <div className="p-8">
// // //                     <div className="flex justify-between items-center mb-16">
// // //                         <Logo />
// // //                         <button onClick={() => setMobileMenuOpen(false)} className="text-white text-3xl">
// // //                             <i className="fas fa-times"></i>
// // //                         </button>
// // //                     </div>

// // //                     <ul className="space-y-8">
// // //                         {navItems.map((cat) => (
// // //                             <li key={cat.label} onClick={() => setMobileMenuOpen(false)}>
// // //                                 <Link
// // //                                     to={cat.label === 'Official Home' ? '/' : (cat.label === 'About' ? '/about' : (cat.label === 'Price List' ? '/price-list' : `/category/${cat.id}`))}
// // //                                     className="text-white text-2xl font-black uppercase tracking-tighter flex items-center justify-between group"
// // //                                 >
// // //                                     {cat.label}
// // //                                     <i className="fas fa-arrow-right text-[#01A651] opacity-0 group-hover:opacity-100 transition-opacity"></i>
// // //                                 </Link>
// // //                             </li>
// // //                         ))}
// // //                     </ul>
// // //                 </div>
// // //             </div>

// // //             {activeDropdown && !mobileMenuOpen && (
// // //                 <div className="absolute top-[100%] left-0 w-full bg-white shadow-[0_40px_100px_rgba(0,0,0,0.2)] border-t border-gray-100 p-12 hidden md:flex gap-20 animate-in slide-in-from-top-4 duration-500 z-40 rounded-b-[60px]">
// // //                     <div className="w-1/4">
// // //                         <h4 className="text-[#EC1C24] text-xs font-black mb-8 border-b pb-4 uppercase tracking-[0.3em] text-left">{activeDropdown.replace('_', ' ')} Directory</h4>
// // //                         <ul className="grid grid-cols-1 gap-4">
// // //                             {navCategories[activeDropdown]?.map((item, i) => (
// // //                                 <li key={i} className="text-gray-400 hover:text-black hover:translate-x-3 transition-all cursor-pointer font-bold text-[11px] uppercase flex items-center gap-3 group/nav">
// // //                                     <div className="w-1.5 h-1.5 bg-gray-100 rounded-full group-hover/nav:bg-[#EC1C24] transition-colors"></div>
// // //                                     <Link to={`/category/${activeDropdown}`} onClick={() => setActiveDropdown(null)}>{item}</Link>
// // //                                 </li>
// // //                             ))}
// // //                         </ul>
// // //                     </div>
// // //                     <div className="flex-1 bg-gray-50 rounded-[48px] p-16 flex items-center justify-between border border-gray-100 relative overflow-hidden group/mega shadow-inner text-left">
// // //                         <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#EC1C24]/5 rounded-full blur-3xl"></div>
// // //                         <div className="max-w-sm text-left relative z-10">
// // //                             <span className="bg-[#01A651] text-white px-5 py-2 rounded-full text-[9px] font-black uppercase mb-8 inline-block tracking-widest shadow-lg">Authorized Publication</span>
// // //                             <h3 className="text-5xl font-black text-[#231F20] mt-2 leading-[1] uppercase tracking-tighter">Catalogue <br />Sector 2026</h3>
// // //                             <p className="text-gray-400 text-xs mt-8 font-bold uppercase leading-relaxed tracking-widest opacity-80">Full curriculum mapping for NCERT, CBSE and State boards.</p>
// // //                             <Link to={`/category/${activeDropdown}`} onClick={() => setActiveDropdown(null)} className="inline-block mt-12 bg-[#231F20] text-white px-12 py-5 rounded-[20px] font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#EC1C24] transition-all transform hover:-translate-y-1 shadow-2xl shadow-black/20">Explorer Collection</Link>
// // //                         </div>
// // //                         <div className="w-64 h-80 bg-white rounded-[32px] shadow-2xl flex items-center justify-center p-12 transform group-hover/mega:rotate-0 transition-all duration-1000 rotate-12 border-8 border-gray-50 relative overflow-hidden">
// // //                             <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white opacity-50"></div>
// // //                             <img src="https://placehold.co/200x280/EC1C24/FFFFFF?text=2026+Catalogue" alt="Feature" className="h-full shadow-2xl relative z-10 rounded-sm" />
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default Navbar;


// // import React, { useState, useEffect } from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import { navCategories, booksData } from '../data';

// // const Logo = () => (
// //     <div className="flex flex-col items-center group cursor-pointer">
// //         <div className="bg-[#01A651] px-4 py-1.5 rounded-full flex flex-col items-center shadow-lg border-2 border-white/20 transition-transform group-hover:scale-105">
// //             <div className="bg-[#FFF200] px-3 py-0.5 rounded-full flex items-center gap-2 border border-[#01A651]/20">
// //                 <span className="text-[#EC1C24] font-black italic text-xl md:text-2xl tracking-tighter drop-shadow-sm leading-none">Ravi</span>
// //                 <div className="w-3 h-3 text-[#2E3092]">
// //                     <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.39 8.26L21 9.27L16.27 13.87L17.38 20.46L12 17.38L6.62 20.46L7.73 13.87L3 9.27L9.61 8.26L12 2Z" /></svg>
// //                 </div>
// //             </div>
// //             <span className="text-white font-black text-[7px] md:text-[9px] uppercase tracking-[0.2em] mt-0.5">Since 1988</span>
// //         </div>
// //     </div>
// // );

// // const Navbar = ({ cartCount, onOpenCart, onSearch }) => {
// //     const [activeDropdown, setActiveDropdown] = useState(null);
// //     const [profile, setProfile] = useState({ name: 'Principal / Admin', location: 'India' });
// //     const [showProfileEdit, setShowProfileEdit] = useState(false);
// //     const [isScrolled, setIsScrolled] = useState(false);
// //     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //     const [searchStr, setSearchStr] = useState('');
// //     const [searchCategory, setSearchCategory] = useState('Catalogue Library');
// //     const [liveResults, setLiveResults] = useState({ books: [], categories: [] });
// //     const location = useLocation();

// //     // CSS to hide scrollbar but keep functionality
// //     const hideScrollbarStyle = {
// //         msOverflowStyle: 'none',
// //         scrollbarWidth: 'none',
// //         WebkitOverflowScrolling: 'touch',
// //     };

// //     const handleSearchInput = (val) => {
// //         setSearchStr(val);
// //         if (val.trim().length > 1) {
// //             const v = val.toLowerCase();
// //             const filteredBooks = booksData.filter(b =>
// //                 b.name.toLowerCase().includes(v) ||
// //                 b.category.toLowerCase().includes(v)
// //             ).slice(0, 4);

// //             const filteredCats = Object.keys(navCategories).filter(key =>
// //                 key.replace('_', ' ').toLowerCase().includes(v)
// //             ).map(key => ({
// //                 label: key.replace('_', ' '),
// //                 id: key
// //             })).slice(0, 3);

// //             setLiveResults({ books: filteredBooks, categories: filteredCats });
// //         } else {
// //             setLiveResults({ books: [], categories: [] });
// //         }
// //     };

// //     const handleSearchSubmit = (e) => {
// //         if (e) e.preventDefault();
// //         onSearch(searchStr.trim(), searchCategory === 'Catalogue Library' ? '' : searchCategory);
// //         setLiveResults({ books: [], categories: [] });
// //     };

// //     const isHomePage = location.pathname === '/';

// //     useEffect(() => {
// //         const handleScroll = () => setIsScrolled(window.scrollY > 50);
// //         window.addEventListener('scroll', handleScroll);
// //         return () => window.removeEventListener('scroll', handleScroll);
// //     }, []);

// //     const navItems = [
// //         { label: 'Official Home', id: '' },
// //         { label: 'About', id: 'about' },
// //         { label: 'Price List', id: 'price-list' },
// //         { label: 'Enlight Core', id: 'enlight_course' },
// //         { label: 'Semester Series', id: 'enlight_semester' },
// //         { label: 'Term Series', id: 'enlight_term' },
// //         { label: 'Kits & Flash', id: 'kits_flash' },
// //         { label: 'Workbooks', id: 'workbooks' },
// //         { label: 'Regional', id: 'languages' }
// //     ];

// //     return (
// //         <div className="w-full fixed top-0 z-50 transition-all duration-300" onMouseLeave={() => setActiveDropdown(null)}>
// //             {/* 1. Top Mini Bar */}
// //             <div className="hidden md:flex bg-[#1a1a1a] text-white py-1.5 px-20 justify-between items-center text-[10px] font-bold uppercase tracking-widest border-b border-white/5">
// //                 <div className="flex gap-8">
// //                     <span className="flex items-center gap-2"><i className="fas fa-truck text-[#FFF200]"></i> Express Institution Dispatch</span>
// //                     <span className="flex items-center gap-2"><i className="fas fa-headset text-[#01A651]"></i> Support: +91 98491 00063</span>
// //                 </div>
// //                 <div className="text-[#FFF200] animate-pulse">● 2026 Academic Season Live</div>
// //             </div>

// //             {/* 2. Main Navigation */}
// //             <nav className={`py-4 px-4 md:px-20 flex items-center justify-between gap-6 transition-all duration-500 ${isScrolled || !isHomePage ? 'bg-white shadow-md' : 'bg-[#01A651] text-white'}`}>
// //                 <div className="flex items-center gap-4">
// //                     <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-2xl"><i className="fas fa-bars"></i></button>
// //                     <Link to="/"><Logo /></Link>
// //                 </div>

// //                 {/* Desktop Search */}
// //                 <form onSubmit={handleSearchSubmit} className={`hidden md:flex flex-1 max-w-xl relative rounded-xl overflow-hidden border transition-all ${isScrolled || !isHomePage ? 'bg-gray-100 border-gray-200 focus-within:ring-2 focus-within:ring-[#EC1C24]' : 'bg-white/10 border-white/20 backdrop-blur-md'}`}>
// //                     <input
// //                         type="text"
// //                         placeholder="Search for books, series or subjects..."
// //                         className="w-full px-5 py-3 bg-transparent outline-none font-medium text-sm"
// //                         value={searchStr}
// //                         onChange={(e) => handleSearchInput(e.target.value)}
// //                     />
// //                     <button className="bg-[#EC1C24] text-white px-6 font-black text-xs uppercase hover:bg-black transition-colors">Search</button>

// //                     {/* Instant Search Results Dropdown */}
// //                     {(liveResults.books.length > 0 || liveResults.categories.length > 0) && (
// //                         <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden text-black">
// //                             {liveResults.books.map(book => (
// //                                 <Link key={book.id} to={`/book/${book.id}`} className="flex items-center gap-4 p-4 hover:bg-gray-50 border-b border-gray-50">
// //                                     <img src={book.image} className="w-8 h-10 object-contain bg-gray-50 p-1" alt="" />
// //                                     <div>
// //                                         <div className="text-xs font-bold uppercase">{book.name}</div>
// //                                         <div className="text-[10px] text-[#01A651] font-bold uppercase">{book.category}</div>
// //                                     </div>
// //                                 </Link>
// //                             ))}
// //                         </div>
// //                     )}
// //                 </form>

// //                 <div className="flex items-center gap-6">
// //                     {/* Profile */}
// //                     <div className="hidden lg:flex items-center gap-3 cursor-pointer" onClick={() => setShowProfileEdit(!showProfileEdit)}>
// //                         <div className="text-right">
// //                             <div className={`text-[9px] font-black uppercase opacity-60 tracking-tighter`}>School Portal</div>
// //                             <div className={`text-xs font-black uppercase tracking-tighter ${isScrolled || !isHomePage ? 'text-black' : 'text-white'}`}>{profile.name.split(' ')[0]}</div>
// //                         </div>
// //                         <div className="w-10 h-10 rounded-full border-2 border-[#EC1C24] overflow-hidden bg-white">
// //                             <img src={`https://ui-avatars.com/api/?name=${profile.name}&background=EC1C24&color=fff`} alt="" />
// //                         </div>
// //                     </div>

// //                     {/* Cart Button */}
// //                     <button onClick={onOpenCart} className="relative group">
// //                         <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isScrolled || !isHomePage ? 'bg-black text-white' : 'bg-white text-[#EC1C24]'}`}>
// //                             <i className="fas fa-shopping-cart text-lg"></i>
// //                         </div>
// //                         <span className="absolute -top-2 -right-2 bg-[#FFF200] text-black text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
// //                             {cartCount}
// //                         </span>
// //                     </button>
// //                 </div>
// //             </nav>

// //             {/* 3. Secondary Category Bar (The White & Red Bottom Nav) */}
// //             <div className={`w-full border-b-4 border-[#EC1C24] transition-colors duration-500 ${isScrolled || !isHomePage ? 'bg-white' : 'bg-[#2E3092]'}`}>
// //                 <div
// //                     className="max-w-7xl mx-auto overflow-x-auto whitespace-nowrap scroll-smooth flex items-center no-scrollbar px-4 md:px-10"
// //                     style={hideScrollbarStyle}
// //                 >
// //                     {navItems.map((item) => (
// //                         <Link
// //                             key={item.label}
// //                             to={item.id === '' ? '/' : (item.id === 'about' || item.id === 'price-list' ? `/${item.id}` : `/category/${item.id}`)}
// //                             onMouseEnter={() => !['', 'about', 'price-list'].includes(item.id) && setActiveDropdown(item.id)}
// //                             className={`inline-block py-4 px-6 text-[11px] font-black uppercase tracking-[0.15em] transition-all hover:text-[#EC1C24] active:scale-95 touch-pan-x
// //                                 ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'}`}
// //                         >
// //                             {item.label}
// //                         </Link>
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* Mega Menu Dropdown */}
// //             {activeDropdown && (
// //                 <div
// //                     className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 p-10 flex gap-16 animate-in fade-in slide-in-from-top-2 duration-300"
// //                     onMouseLeave={() => setActiveDropdown(null)}
// //                 >
// //                     <div className="w-1/4">
// //                         <h4 className="text-[#EC1C24] text-[10px] font-black uppercase tracking-widest mb-6 pb-2 border-b-2 border-[#EC1C24]/10">Browse {activeDropdown.replace('_', ' ')}</h4>
// //                         <div className="flex flex-col gap-3">
// //                             {navCategories[activeDropdown]?.map((sub, i) => (
// //                                 <Link
// //                                     key={i}
// //                                     to={`/category/${activeDropdown}`}
// //                                     className="text-gray-500 hover:text-black font-bold text-xs uppercase transition-all hover:translate-x-1"
// //                                 >
// //                                     • {sub}
// //                                 </Link>
// //                             ))}
// //                         </div>
// //                     </div>
// //                     <div className="flex-1 bg-gray-50 rounded-3xl p-8 flex items-center justify-between border border-gray-100">
// //                         <div className="max-w-xs">
// //                             <h3 className="text-3xl font-black text-gray-900 leading-none mb-4 uppercase tracking-tighter">2026 Academic Collection</h3>
// //                             <p className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-6 leading-relaxed">Specially curated series for modern curriculum requirements.</p>
// //                             <Link to={`/category/${activeDropdown}`} className="bg-black text-white px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-[#EC1C24] transition-colors">Explore All</Link>
// //                         </div>
// //                         <div className="w-48 h-64 bg-white rounded-xl shadow-xl flex items-center justify-center p-4 rotate-3">
// //                             <img src="https://placehold.co/150x200/EC1C24/FFFFFF?text=2026+Series" className="rounded shadow-lg" alt="" />
// //                         </div>
// //                     </div>
// //                 </div>
// //             )}

// //             {/* Mobile Menu Overlay */}
// //             <div className={`fixed inset-0 bg-black/95 z-[100] transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
// //                 <div className="p-8">
// //                     <div className="flex justify-between items-center mb-12">
// //                         <Logo />
// //                         <button onClick={() => setMobileMenuOpen(false)} className="text-white text-3xl">&times;</button>
// //                     </div>
// //                     <div className="flex flex-col gap-6">
// //                         {navItems.map(item => (
// //                             <Link
// //                                 key={item.label}
// //                                 to={item.id === '' ? '/' : (item.id === 'about' || item.id === 'price-list' ? `/${item.id}` : `/category/${item.id}`)}
// //                                 onClick={() => setMobileMenuOpen(false)}
// //                                 className="text-white text-2xl font-black uppercase tracking-tighter border-b border-white/10 pb-4"
// //                             >
// //                                 {item.label}
// //                             </Link>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* CSS Injection for hiding scrollbar */}
// //             <style dangerouslySetInnerHTML={{
// //                 __html: `
// //                 .no-scrollbar::-webkit-scrollbar {
// //                     display: none;
// //                 }
// //                 .no-scrollbar {
// //                     -ms-overflow-style: none;
// //                     scrollbar-width: none;
// //                 }
// //             `}} />
// //         </div>
// //     );
// // };

// // export default Navbar;
// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { navCategories, booksData } from '../data';

// // --- LOGO COMPONENT (Fixed: Defined inside file) ---
// const Logo = () => (
//     <div className="flex flex-col items-center">
//         <div className="bg-[#01A651] px-4 py-1 rounded-full flex flex-col items-center shadow-lg border-2 border-white/20">
//             <div className="bg-[#FFF200] px-3 py-0.5 rounded-full flex items-center gap-2 border border-[#01A651]/20">
//                 <span className="text-[#EC1C24] font-black italic text-xl md:text-2xl tracking-tighter drop-shadow-sm leading-none">Ravi</span>
//                 <div className="w-3 h-3 text-[#2E3092]">
//                     <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.39 8.26L21 9.27L16.27 13.87L17.38 20.46L12 17.38L6.62 20.46L7.73 13.87L3 9.27L9.61 8.26L12 2Z" /></svg>
//                 </div>
//             </div>
//             <span className="text-white font-black text-[7px] md:text-[9px] uppercase tracking-[0.2em] mt-0.5">Since 1988</span>
//         </div>
//     </div>
// );

// const Navbar = ({ cartCount, onOpenCart, onSearch }) => {
//     const [activeDropdown, setActiveDropdown] = useState(null);
//     const [profile, setProfile] = useState({ name: 'Principal / Admin', location: 'India' });
//     const [showProfileEdit, setShowProfileEdit] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [searchStr, setSearchStr] = useState('');
//     const [searchCategory, setSearchCategory] = useState('Catalogue Library');
//     const [liveResults, setLiveResults] = useState({ books: [], categories: [] });

//     const location = useLocation();
//     const searchRef = useRef(null);

//     // --- ORIGINAL SEARCH LOGIC UPDATED FOR PARALLEL VIEW ---
//     const handleSearchInput = (val) => {
//         setSearchStr(val);
//         if (val.trim().length > 1) {
//             const v = val.toLowerCase();
//             const filteredBooks = booksData.filter(b =>
//                 b.name.toLowerCase().includes(v) ||
//                 b.category.toLowerCase().includes(v)
//             ).slice(0, 6);

//             const filteredCats = Object.keys(navCategories).filter(key =>
//                 key.replace('_', ' ').toLowerCase().includes(v)
//             ).map(key => ({
//                 label: key.replace('_', ' '),
//                 id: key
//             })).slice(0, 4);

//             setLiveResults({ books: filteredBooks, categories: filteredCats });
//         } else {
//             setLiveResults({ books: [], categories: [] });
//         }
//     };

//     const handleSearchSubmit = (e) => {
//         if (e) e.preventDefault();
//         const query = searchStr.trim();
//         const cat = searchCategory === 'Catalogue Library' ? '' : searchCategory;
//         onSearch(query, cat);
//         setMobileMenuOpen(false);
//         setLiveResults({ books: [], categories: [] });
//     };

//     const isHomePage = location.pathname === '/';

//     useEffect(() => {
//         const handleScroll = () => setIsScrolled(window.scrollY > 50);
//         window.addEventListener('scroll', handleScroll);

//         const savedProfile = localStorage.getItem('ravibooks_profile');
//         if (savedProfile) {
//             try { setProfile(JSON.parse(savedProfile)); } catch (e) { console.error(e); }
//         }
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const saveProfile = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const newProfile = {
//             name: formData.get('name') || 'Guest User',
//             location: formData.get('location') || 'India'
//         };
//         setProfile(newProfile);
//         localStorage.setItem('ravibooks_profile', JSON.stringify(newProfile));
//         setShowProfileEdit(false);
//     };

//     const useSolidStyle = isScrolled || !isHomePage;

//     const navItems = [
//         { label: 'Official Home', id: '' },
//         { label: 'About', id: 'about_nav' },
//         { label: 'Price List', id: 'price_list_nav' },
//         { label: 'Enlight Core', id: 'enlight_course' },
//         { label: 'Semester Series', id: 'enlight_semester' },
//         { label: 'Term Series', id: 'enlight_term' },
//         { label: 'Kits & Flash', id: 'kits_flash' },
//         { label: 'Workbooks', id: 'workbooks' },
//         { label: 'Regional', id: 'languages' }
//     ];

//     return (
//         <div className={`w-full fixed top-0 z-50 transition-all duration-500 ${useSolidStyle ? 'shadow-2xl' : ''}`} onMouseLeave={() => setActiveDropdown(null)}>

//             {/* ORIGINAL ANNOUNCEMENT BAR */}
//             <div className="bg-[#231F20] text-white py-2 px-4 md:px-20 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] border-b border-white/10 relative z-50 hidden md:flex">
//                 <div className="flex-1 text-center flex items-center justify-center gap-10">
//                     <span className="flex items-center gap-2"><i className="fas fa-truck-fast text-[#FFF200]"></i> 48-Hour Institution Dispatch</span>
//                     <span className="flex items-center gap-2 hidden lg:flex"><i className="fas fa-phone text-[#01A651]"></i> +91 98491 00063</span>
//                     <span className="flex items-center gap-2 text-[#FFF200] animate-pulse"><i className="fas fa-file-invoice"></i> ORDER FORM 2026 ACTIVE</span>
//                 </div>
//             </div>

//             {/* MAIN BRANDING BAR */}
//             <nav className={`py-3 px-4 md:px-20 flex items-center justify-between gap-4 md:gap-10 transition-all duration-500 ${useSolidStyle ? 'bg-white border-b border-gray-100' : 'bg-[#01A651] text-white shadow-lg'}`}>
//                 <div className="flex items-center gap-4">
//                     <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-xl focus:outline-none">
//                         <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//                     </button>
//                     <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105" onClick={() => setMobileMenuOpen(false)}>
//                         <Logo />
//                     </Link>
//                 </div>

//                 {/* --- UPDATED SEARCH PORTION (PARALLEL VIEW) --- */}
//                 <form onSubmit={handleSearchSubmit} ref={searchRef} className={`flex-1 hidden sm:flex max-w-2xl rounded-[16px] overflow-visible border transition-all items-center shadow-sm relative ${useSolidStyle ? 'bg-gray-100 border-gray-200 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#EC1C24]/5' : 'bg-white/20 border-white/20 backdrop-blur-md'}`}>
//                     <div className="relative h-full group hidden lg:block">
//                         <select
//                             value={searchCategory}
//                             onChange={(e) => setSearchCategory(e.target.value)}
//                             className={`h-full text-[9px] font-black uppercase py-4 px-6 outline-none border-r transition-colors cursor-pointer appearance-none pr-10 ${useSolidStyle ? 'bg-gray-200/50 text-gray-400 group-hover:bg-gray-200 border-gray-200' : 'bg-transparent text-white border-white/20'}`}
//                         >
//                             <option className="text-black">Catalogue Library</option>
//                             <option className="text-black">Enlight Core</option>
//                             <option className="text-black">Semester Series</option>
//                             <option className="text-black">Term Series</option>
//                         </select>
//                         <i className={`fas fa-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-[10px] pointer-events-none ${useSolidStyle ? 'text-gray-400' : 'text-white'}`}></i>
//                     </div>

//                     <div className="flex-1 relative">
//                         <input
//                             type="text"
//                             placeholder="Search Series, Class, Subject..."
//                             value={searchStr}
//                             onChange={(e) => handleSearchInput(e.target.value)}
//                             className={`w-full px-6 py-3 bg-transparent outline-none text-xs font-bold placeholder:opacity-50 ${useSolidStyle ? 'text-[#231F20]' : 'text-white placeholder:text-white'}`}
//                         />

//                         {/* --- PARALLEL RESULTS DESIGN --- */}
//                         {(liveResults.books.length > 0 || liveResults.categories.length > 0) && (
//                             <div className="absolute top-[120%] left-0 w-[140%] -left-[20%] md:w-full md:left-0 bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden z-[100] flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">

//                                 {/* Col 1: Categories/Sectors */}
//                                 <div className="md:w-1/3 bg-gray-50/50 p-4">
//                                     <div className="px-3 py-2 text-[8px] font-black uppercase text-gray-400 tracking-widest border-b border-gray-200 mb-2">Sectors</div>
//                                     {liveResults.categories.map(cat => (
//                                         <Link key={cat.id} to={`/category/${cat.id}`} onClick={() => setLiveResults({ books: [], categories: [] })} className="block px-3 py-3 hover:bg-white rounded-xl transition-all group">
//                                             <span className="text-[10px] font-black uppercase text-gray-600 group-hover:text-[#EC1C24]">{cat.label}</span>
//                                         </Link>
//                                     ))}
//                                 </div>

//                                 {/* Col 2: Books/Series */}
//                                 <div className="flex-1 p-4 bg-white">
//                                     <div className="px-3 py-2 text-[8px] font-black uppercase text-gray-400 tracking-widest border-b border-gray-200 mb-2">Series Results</div>
//                                     <div className="grid grid-cols-1 gap-1">
//                                         {liveResults.books.map((book) => (
//                                             <Link key={book.id} to={`/book/${book.id}`} onClick={() => setLiveResults({ books: [], categories: [] })} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-all group">
//                                                 <div className="w-8 h-10 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center p-1 group-hover:bg-white shadow-sm">
//                                                     <img src={book.image} alt="" className="max-h-full object-contain" />
//                                                 </div>
//                                                 <div className="flex-1 overflow-hidden text-left">
//                                                     <h4 className="text-[10px] font-black uppercase text-[#231F20] truncate group-hover:text-[#EC1C24]">{book.name}</h4>
//                                                     <span className="text-[8px] font-bold text-[#01A651] uppercase">{book.category}</span>
//                                                 </div>
//                                             </Link>
//                                         ))}
//                                     </div>
//                                     <button onClick={handleSearchSubmit} className="w-full mt-4 py-3 bg-gray-50 rounded-xl text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">View All Matchings</button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                     <button type="submit" className={`px-10 py-4 flex items-center justify-center transition-all font-black text-[10px] uppercase tracking-widest ${useSolidStyle ? 'bg-[#EC1C24] text-white hover:bg-[#231F20]' : 'bg-white text-[#EC1C24] hover:bg-[#231F20] hover:text-white'}`}>
//                         FIND
//                     </button>
//                 </form>

//                 {/* ORIGINAL PROFILE & CART PORTION */}
//                 <div className="flex items-center gap-2 md:gap-8">
//                     <div className="relative">
//                         <button onClick={() => setShowProfileEdit(!showProfileEdit)} className={`flex items-center gap-3 ${useSolidStyle ? 'text-[#231F20]' : 'text-white'}`}>
//                             <div className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border-4 overflow-hidden ${useSolidStyle ? 'bg-gray-50 border-white' : 'bg-white/10 border-white/20'}`}>
//                                 <img src={`https://ui-avatars.com/api/?name=${profile.name}&background=EC1C24&color=fff`} alt="P" className="w-full h-full object-cover" />
//                             </div>
//                             <div className="hidden lg:block text-left leading-tight">
//                                 <div className="text-[8px] font-black uppercase tracking-widest opacity-60">Identity</div>
//                                 <div className="text-xs font-black uppercase">{profile.name.split(' ')[0]}</div>
//                             </div>
//                         </button>

//                         {showProfileEdit && (
//                             <div className="absolute top-[130%] right-0 w-80 bg-white rounded-[32px] shadow-2xl p-8 text-gray-800 z-50 animate-in slide-in-from-top-2">
//                                 <form onSubmit={saveProfile} className="space-y-4">
//                                     <h4 className="text-sm font-black uppercase text-[#231F20] mb-4">User Settings</h4>
//                                     <input name="name" defaultValue={profile.name} placeholder="Entity Name" className="w-full bg-gray-50 rounded-xl px-5 py-3 font-bold text-xs outline-none focus:ring-2 focus:ring-[#EC1C24]" />
//                                     <input name="location" defaultValue={profile.location} placeholder="Location" className="w-full bg-gray-50 rounded-xl px-5 py-3 font-bold text-xs outline-none focus:ring-2 focus:ring-[#EC1C24]" />
//                                     <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#EC1C24]">Confirm Identity</button>
//                                 </form>
//                             </div>
//                         )}
//                     </div>

//                     <button onClick={onOpenCart} className={`relative group active:scale-95 ${useSolidStyle ? 'text-[#231F20]' : 'text-white'}`}>
//                         <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center bg-opacity-10 ${useSolidStyle ? 'bg-black' : 'bg-white'}`}>
//                             <i className="fas fa-file-invoice-dollar text-xl"></i>
//                         </div>
//                         <span className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black border-2 ${useSolidStyle ? 'bg-[#EC1C24] text-white border-white' : 'bg-[#FFF200] text-[#231F20] border-[#01A651]'}`}>
//                             {cartCount}
//                         </span>
//                     </button>
//                 </div>
//             </nav>

//             {/* --- IMPROVED BOTTOM CATEGORY NAV (WHITE/RED + NO SCROLLBAR) --- */}
//             <div className={`transition-all duration-500 hidden md:block border-b-4 border-[#EC1C24] ${useSolidStyle ? 'bg-white' : 'bg-[#2E3092]'}`}>
//                 <ul
//                     className="max-w-7xl mx-auto px-10 lg:px-20 flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] py-4 overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap"
//                     style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//                 >
//                     {navItems.map((cat) => (
//                         <li
//                             key={cat.label}
//                             className={`hover:text-[#EC1C24] cursor-pointer transition-all ${!isScrolled && isHomePage ? 'text-white' : 'text-gray-600'}`}
//                             onMouseEnter={() => cat.id && !['about_nav', 'price_list_nav'].includes(cat.id) ? setActiveDropdown(cat.id) : setActiveDropdown(null)}
//                         >
//                             <Link to={cat.label === 'Official Home' ? '/' : (cat.label === 'About' ? '/about' : (cat.label === 'Price List' ? '/price-list' : `/category/${cat.id}`))}>{cat.label}</Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* MEGA MENU (Same as original) */}
//             {activeDropdown && !mobileMenuOpen && (
//                 <div className="absolute top-[100%] left-0 w-full bg-white shadow-2xl border-t p-12 hidden md:flex gap-20 animate-in slide-in-from-top-4 z-40 rounded-b-[60px]">
//                     <div className="w-1/4 text-left">
//                         <h4 className="text-[#EC1C24] text-xs font-black mb-8 border-b pb-4 uppercase tracking-[0.3em]">{activeDropdown.replace('_', ' ')} Directory</h4>
//                         <ul className="grid grid-cols-1 gap-4">
//                             {navCategories[activeDropdown]?.map((item, i) => (
//                                 <li key={i} className="text-gray-400 hover:text-black hover:translate-x-3 transition-all cursor-pointer font-bold text-[11px] uppercase flex items-center gap-3 group/nav">
//                                     <div className="w-1.5 h-1.5 bg-gray-100 rounded-full group-hover/nav:bg-[#EC1C24]"></div>
//                                     <Link to={`/category/${activeDropdown}`} onClick={() => setActiveDropdown(null)}>{item}</Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="flex-1 bg-gray-50 rounded-[48px] p-16 flex items-center justify-between border border-gray-100 relative overflow-hidden group/mega text-left">
//                         <div className="max-w-sm relative z-10">
//                             <span className="bg-[#01A651] text-white px-5 py-2 rounded-full text-[9px] font-black uppercase mb-8 inline-block tracking-widest">Authorized Publication</span>
//                             <h3 className="text-5xl font-black text-[#231F20] leading-[1] uppercase tracking-tighter">Catalogue <br />Sector 2026</h3>
//                             <Link to={`/category/${activeDropdown}`} onClick={() => setActiveDropdown(null)} className="inline-block mt-12 bg-[#231F20] text-white px-12 py-5 rounded-[20px] font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#EC1C24]">Explorer Collection</Link>
//                         </div>
//                         <div className="w-64 h-80 bg-white rounded-[32px] shadow-2xl flex items-center justify-center p-12 rotate-12 group-hover/mega:rotate-0 transition-all duration-1000 border-8 border-gray-50">
//                             <img src="https://placehold.co/200x280/EC1C24/FFFFFF?text=2026+Catalogue" alt="Feature" className="h-full shadow-2xl rounded-sm" />
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* MOBILE MENU (Same as original) */}
//             <div className={`fixed inset-0 bg-[#231F20] z-[60] transform transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden overflow-y-auto`}>
//                 <div className="p-8">
//                     <div className="flex justify-between items-center mb-16">
//                         <Logo />
//                         <button onClick={() => setMobileMenuOpen(false)} className="text-white text-3xl"><i className="fas fa-times"></i></button>
//                     </div>
//                     <ul className="space-y-8 text-left">
//                         {navItems.map((cat) => (
//                             <li key={cat.label} onClick={() => setMobileMenuOpen(false)}>
//                                 <Link to={cat.label === 'Official Home' ? '/' : (cat.label === 'About' ? '/about' : (cat.label === 'Price List' ? '/price-list' : `/category/${cat.id}`))} className="text-white text-2xl font-black uppercase tracking-tighter flex items-center justify-between group">
//                                     {cat.label}
//                                     <i className="fas fa-arrow-right text-[#01A651]"></i>
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             <style dangerouslySetInnerHTML={{
//                 __html: `
//                 .no-scrollbar::-webkit-scrollbar { display: none; }
//                 .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//             `}} />
//         </div>
//     );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navCategories, booksData } from '../data';

const Logo = () => (
    <div className="flex flex-col items-center">
        <div className="bg-[#01A651] px-4 py-1 rounded-full flex flex-col items-center shadow-lg border-2 border-white/20">
            <div className="bg-[#FFF200] px-3 py-0.5 rounded-full flex items-center gap-2 border border-[#01A651]/20">
                <span className="text-[#EC1C24] font-black italic text-xl md:text-2xl tracking-tighter drop-shadow-sm leading-none">Ravi</span>
                <div className="w-3 h-3 text-[#2E3092]">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.39 8.26L21 9.27L16.27 13.87L17.38 20.46L12 17.38L6.62 20.46L7.73 13.87L3 9.27L9.61 8.26L12 2Z" /></svg>
                </div>
            </div>
            <span className="text-white font-black text-[7px] md:text-[9px] uppercase tracking-[0.2em] mt-0.5">Since 1988</span>
        </div>
    </div>
);

const Navbar = ({ cartCount, onOpenCart, onSearch }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [profile, setProfile] = useState({ name: 'Principal / Admin', location: 'India' });
    const [showProfileEdit, setShowProfileEdit] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchStr, setSearchStr] = useState('');
    const [searchCategory, setSearchCategory] = useState('Catalogue Library');
    const [liveResults, setLiveResults] = useState({ books: [], categories: [] });
    const location = useLocation();

    const handleSearchInput = (val) => {
        setSearchStr(val);
        if (val.trim().length > 1) {
            const v = val.toLowerCase();
            const filteredBooks = booksData.filter(b =>
                b.name.toLowerCase().includes(v) ||
                b.category.toLowerCase().includes(v)
            ).slice(0, 4);

            const filteredCats = Object.keys(navCategories).filter(key =>
                key.replace('_', ' ').toLowerCase().includes(v)
            ).map(key => ({
                label: key.replace('_', ' '),
                id: key
            })).slice(0, 3);

            setLiveResults({ books: filteredBooks, categories: filteredCats });
        } else {
            setLiveResults({ books: [], categories: [] });
        }
    };

    const handleSearchSubmit = (e) => {
        if (e) e.preventDefault();
        const query = searchStr.trim();
        const cat = searchCategory === 'Catalogue Library' ? '' : searchCategory;
        onSearch(query, cat);
        setMobileMenuOpen(false);
        setLiveResults({ books: [], categories: [] });
    };

    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        const savedProfile = localStorage.getItem('ravibooks_profile');
        if (savedProfile) {
            try {
                setProfile(JSON.parse(savedProfile));
            } catch (e) {
                console.error("Error parsing profile", e);
            }
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const saveProfile = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newProfile = {
            name: formData.get('name') || 'Guest User',
            location: formData.get('location') || 'India'
        };
        setProfile(newProfile);
        localStorage.setItem('ravibooks_profile', JSON.stringify(newProfile));
        setShowProfileEdit(false);
    };

    const useSolidStyle = isScrolled || !isHomePage;

    const navItems = [
        { label: 'Official Home', id: '' },
        { label: 'About', id: 'about_nav' },
        { label: 'Price List', id: 'price_list_nav' },
        { label: 'Enlight Core', id: 'enlight_course' },
        { label: 'Semester Series', id: 'enlight_semester' },
        { label: 'Term Series', id: 'enlight_term' },
        { label: 'Kits & Flash', id: 'kits_flash' },
        { label: 'Workbooks', id: 'workbooks' },
        { label: 'Regional', id: 'languages' }
    ];

    return (
        <div className={`w-full fixed top-0 z-50 transition-all duration-500 ${useSolidStyle ? 'shadow-2xl' : ''}`} onMouseLeave={() => setActiveDropdown(null)}>
            {/* Announcement Bar */}
            <div className="bg-[#231F20] text-white py-2 px-4 md:px-20 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] border-b border-white/10 relative z-50 hidden md:flex">
                <div className="flex-1 text-center flex items-center justify-center gap-10">
                    <span className="flex items-center gap-2"><i className="fas fa-truck-fast text-[#FFF200]"></i> 48-Hour Institution Dispatch</span>
                    <span className="flex items-center gap-2 hidden lg:flex"><i className="fas fa-phone text-[#01A651]"></i> +91 98491 00063</span>
                    <span className="flex items-center gap-2 text-[#FFF200] animate-pulse"><i className="fas fa-file-invoice"></i> ORDER FORM 2026 ACTIVE</span>
                </div>
            </div>

            {/* Main Branding Bar */}
            <nav className={`py-3 px-4 md:px-20 flex items-center justify-between gap-4 md:gap-10 transition-all duration-500 ${useSolidStyle ? 'bg-white border-b border-gray-100' : 'bg-[#01A651] text-white shadow-lg'}`}>
                <div className="flex items-center gap-4 text-left">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-xl focus:outline-none">
                        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                    <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105" onClick={() => setMobileMenuOpen(false)}>
                        <Logo />
                    </Link>
                </div>

                <form onSubmit={handleSearchSubmit} className={`flex-1 hidden sm:flex max-w-2xl rounded-[16px] overflow-visible border transition-all items-center shadow-sm relative ${useSolidStyle ? 'bg-gray-100 border-gray-200 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#EC1C24]/5' : 'bg-white/20 border-white/20 backdrop-blur-md'}`}>
                    <div className="relative h-full group hidden lg:block">
                        <select
                            value={searchCategory}
                            onChange={(e) => setSearchCategory(e.target.value)}
                            className={`h-full text-[9px] font-black uppercase py-4 px-6 outline-none border-r transition-colors cursor-pointer appearance-none pr-10 ${useSolidStyle ? 'bg-gray-200/50 text-gray-400 group-hover:bg-gray-200 border-gray-200' : 'bg-transparent text-white border-white/20'}`}
                        >
                            <option className="text-black">Catalogue Library</option>
                            <option className="text-black">Enlight Core</option>
                            <option className="text-black">Semester Series</option>
                            <option className="text-black">Term Series</option>
                        </select>
                        <i className={`fas fa-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-[10px] pointer-events-none ${useSolidStyle ? 'text-gray-400' : 'text-white'}`}></i>
                    </div>
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Search Series, Class, Subject..."
                            value={searchStr}
                            onChange={(e) => handleSearchInput(e.target.value)}
                            className={`w-full px-4 md:px-6 py-3 bg-transparent outline-none text-xs md:text-sm font-bold placeholder:opacity-50 ${useSolidStyle ? 'text-[#231F20]' : 'text-white placeholder:text-white'}`}
                        />

                        {/* PARALLEL SEARCH RESULTS DROPDOWN */}
                        {(liveResults.books.length > 0 || liveResults.categories.length > 0) && (
                            <div className="absolute top-[120%] left-0 w-full bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 z-[100] flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">

                                {/* Left Side: Sectors & Categories (Parallel Section 1) */}
                                <div className="md:w-1/3 bg-gray-50/50 p-2">
                                    <div className="px-4 py-3 text-[7px] font-black uppercase text-gray-400 tracking-[0.2em] border-b border-gray-100 mb-1">Sectors</div>
                                    {liveResults.categories.length > 0 ? (
                                        liveResults.categories.map(cat => (
                                            <Link
                                                key={cat.id}
                                                to={`/category/${cat.id}`}
                                                onClick={() => setLiveResults({ books: [], categories: [] })}
                                                className="block px-4 py-3 hover:bg-white text-left rounded-xl transition-all group/cat"
                                            >
                                                <span className="text-[10px] font-black uppercase tracking-tighter text-[#231F20] group-hover/cat:text-[#EC1C24]">{cat.label}</span>
                                            </Link>
                                        ))
                                    ) : (
                                        <div className="px-4 py-4 text-[9px] text-gray-300 italic">No sectors match</div>
                                    )}
                                </div>

                                {/* Right Side: Books (Parallel Section 2) */}
                                <div className="flex-1 bg-white p-2">
                                    <div className="px-4 py-3 text-[7px] font-black uppercase text-gray-400 tracking-[0.2em] border-b border-gray-100 mb-1">Publications & Series</div>
                                    {liveResults.books.map((book) => (
                                        <Link
                                            key={book.id}
                                            to={`/book/${book.id}`}
                                            onClick={() => setLiveResults({ books: [], categories: [] })}
                                            className="flex items-center gap-4 p-3 hover:bg-gray-50 transition-colors rounded-xl group/res text-left"
                                        >
                                            <div className="w-9 h-12 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center p-1.5 group-hover/res:bg-white shadow-sm transition-colors">
                                                <img src={book.image} alt="" className="max-h-full object-contain" />
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <h4 className="text-[10px] font-black uppercase text-[#231F20] leading-tight mb-0.5 group-hover/res:text-[#EC1C24] truncate">{book.name}</h4>
                                                <span className="text-[8px] font-bold text-[#01A651] uppercase tracking-widest opacity-60">{book.category}</span>
                                            </div>
                                            <i className="fas fa-chevron-right text-[10px] text-gray-200 group-hover/res:text-[#EC1C24]"></i>
                                        </Link>
                                    ))}
                                    <button
                                        onClick={handleSearchSubmit}
                                        className="w-full mt-2 py-3 bg-gray-50 rounded-xl text-center text-[8px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                                    >
                                        Explore Full Catalogue
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <button type="submit" className={`px-6 md:px-10 py-4 flex items-center justify-center transition-all font-black text-[10px] uppercase tracking-widest ${useSolidStyle ? 'bg-[#EC1C24] text-white hover:bg-[#231F20]' : 'bg-white text-[#EC1C24] hover:bg-[#231F20] hover:text-white'}`}>
                        FIND
                    </button>
                </form>

                <div className="flex items-center gap-2 md:gap-8 text-left">
                    <div className="relative">
                        <button
                            onClick={() => setShowProfileEdit(!showProfileEdit)}
                            className={`flex items-center gap-3 transition-colors ${useSolidStyle ? 'text-[#231F20]' : 'text-white'}`}
                        >
                            <div className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all border-4 overflow-hidden ${useSolidStyle ? 'bg-gray-50 border-white' : 'bg-white/10 border-white/20'}`}>
                                <img src={`https://ui-avatars.com/api/?name=${profile.name}&background=EC1C24&color=fff`} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <div className="hidden lg:block text-left leading-tight">
                                <div className={`text-[8px] font-black uppercase tracking-widest opacity-60 mb-0.5`}>Identity</div>
                                <div className="text-xs truncate max-w-[100px] font-black uppercase tracking-tighter">{profile.name.split(' ')[0]}</div>
                            </div>
                        </button>

                        {showProfileEdit && (
                            <div className="absolute top-[130%] right-0 w-80 bg-white rounded-[32px] shadow-2xl p-8 text-gray-800 border border-gray-50 animate-in slide-in-from-top-2 duration-300 z-50">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-[#FFF200] rounded-2xl flex items-center justify-center text-[#231F20]"><i className="fas fa-id-card text-xl"></i></div>
                                    <h4 className="text-sm font-black uppercase tracking-widest text-[#231F20]">User Settings</h4>
                                </div>
                                <form onSubmit={saveProfile} className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-gray-300 uppercase tracking-widest ml-1 text-left block">Entity Name</label>
                                        <input name="name" defaultValue={profile.name} className="w-full bg-gray-50 border-none rounded-xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#EC1C24] font-bold text-xs" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-gray-300 uppercase tracking-widest ml-1 text-left block">Location / Branch</label>
                                        <input name="location" defaultValue={profile.location} className="w-full bg-gray-50 border-none rounded-xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#EC1C24] font-bold text-xs" />
                                    </div>
                                    <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all hover:bg-[#EC1C24] shadow-xl shadow-black/10 mt-4">
                                        CONFIRM IDENTITY
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>

                    <button onClick={onOpenCart} className={`relative group transition-all active:scale-95 ${useSolidStyle ? 'text-[#231F20]' : 'text-white'}`}>
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-all bg-opacity-10 ${useSolidStyle ? 'bg-black' : 'bg-white'}`}>
                            <i className="fas fa-file-invoice-dollar text-lg md:text-xl group-hover:scale-110 transition-transform"></i>
                        </div>
                        <span className={`absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-black border-2 md:border-4 ${useSolidStyle ? 'bg-[#EC1C24] text-white border-white' : 'bg-[#FFF200] text-[#231F20] border-[#01A651]'}`}>
                            {cartCount}
                        </span>
                    </button>
                </div>
            </nav>

            {/* Bottom Category Bar with Red Border Accent */}
            <div className={`transition-all duration-500 hidden md:block border-b-4 border-[#EC1C24] ${useSolidStyle ? 'bg-white' : 'bg-[#2E3092] text-white'}`}>
                <ul className="max-w-7xl mx-auto px-10 lg:px-20 flex gap-6 lg:gap-12 text-[10px] font-black uppercase tracking-[0.1em] lg:tracking-[0.25em] py-4 relative scrollbar-hide overflow-x-auto whitespace-nowrap no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {navItems.map((cat) => (
                        <li
                            key={cat.label}
                            className={`hover:text-[#EC1C24] cursor-pointer transition-all border-b-2 border-transparent pb-1 flex-shrink-0 ${!isScrolled && isHomePage ? 'text-white' : 'text-gray-600'}`}
                            onMouseEnter={() => cat.id && !['about_nav', 'price_list_nav'].includes(cat.id) ? setActiveDropdown(cat.id) : setActiveDropdown(null)}
                            onClick={() => setActiveDropdown(null)}
                        >
                            <Link to={cat.label === 'Official Home' ? '/' : (cat.label === 'About' ? '/about' : (cat.label === 'Price List' ? '/price-list' : `/category/${cat.id}`))}>{cat.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-[#231F20] z-[60] transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden overflow-y-auto`}>
                <div className="p-8 text-left">
                    <div className="flex justify-between items-center mb-16">
                        <Logo />
                        <button onClick={() => setMobileMenuOpen(false)} className="text-white text-3xl">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <ul className="space-y-8">
                        {navItems.map((cat) => (
                            <li key={cat.label} onClick={() => setMobileMenuOpen(false)}>
                                <Link
                                    to={cat.label === 'Official Home' ? '/' : (cat.label === 'About' ? '/about' : (cat.label === 'Price List' ? '/price-list' : `/category/${cat.id}`))}
                                    className="text-white text-2xl font-black uppercase tracking-tighter flex items-center justify-between group"
                                >
                                    {cat.label}
                                    <i className="fas fa-arrow-right text-[#01A651] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mega Menu Dropdown */}
            {activeDropdown && !mobileMenuOpen && (
                <div className="absolute top-[100%] left-0 w-full bg-white shadow-[0_40px_100px_rgba(0,0,0,0.2)] border-t border-gray-100 p-12 hidden md:flex gap-20 animate-in slide-in-from-top-4 duration-500 z-40 rounded-b-[60px]">
                    <div className="w-1/4">
                        <h4 className="text-[#EC1C24] text-xs font-black mb-8 border-b pb-4 uppercase tracking-[0.3em] text-left">{activeDropdown.replace('_', ' ')} Directory</h4>
                        <ul className="grid grid-cols-1 gap-4">
                            {navCategories[activeDropdown]?.map((item, i) => (
                                <li key={i} className="text-gray-400 hover:text-black hover:translate-x-3 transition-all cursor-pointer font-bold text-[11px] uppercase flex items-center gap-3 group/nav">
                                    <div className="w-1.5 h-1.5 bg-gray-100 rounded-full group-hover/nav:bg-[#EC1C24] transition-colors"></div>
                                    <Link to={`/category/${activeDropdown}`} onClick={() => setActiveDropdown(null)}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-[48px] p-16 flex items-center justify-between border border-gray-100 relative overflow-hidden group/mega shadow-inner text-left">
                        <div className="max-w-sm text-left relative z-10">
                            <span className="bg-[#01A651] text-white px-5 py-2 rounded-full text-[9px] font-black uppercase mb-8 inline-block tracking-widest shadow-lg">Authorized Publication</span>
                            <h3 className="text-5xl font-black text-[#231F20] mt-2 leading-[1] uppercase tracking-tighter">Catalogue <br />Sector 2026</h3>
                            <Link to={`/category/${activeDropdown}`} onClick={() => setActiveDropdown(null)} className="inline-block mt-12 bg-[#231F20] text-white px-12 py-5 rounded-[20px] font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#EC1C24] transition-all transform hover:-translate-y-1 shadow-2xl shadow-black/20">Explorer Collection</Link>
                        </div>
                        <div className="w-64 h-80 bg-white rounded-[32px] shadow-2xl flex items-center justify-center p-12 transform group-hover/mega:rotate-0 transition-all duration-1000 rotate-12 border-8 border-gray-50 relative overflow-hidden">
                            <img src="https://placehold.co/200x280/EC1C24/FFFFFF?text=2026+Catalogue" alt="Feature" className="h-full shadow-2xl relative z-10 rounded-sm" />
                        </div>
                    </div>
                </div>
            )}
            <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
            `}} />
        </div>
    );
};

export default Navbar;