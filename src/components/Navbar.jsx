import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navCategories, booksData } from '../data';

// Memoized Logo for performance
const Logo = React.memo(() => (
    <div className="flex flex-col items-center">
        <div className="bg-[#01A651] px-4 py-1 rounded-full flex flex-col items-center shadow-lg border-2 border-white/20 transition-transform duration-300 hover:scale-105 active:scale-95">
            <div className="bg-[#FFF200] px-3 py-0.5 rounded-full flex items-center gap-2 border border-[#01A651]/20">
                <span className="text-[#EC1C24] font-black italic text-xl md:text-2xl tracking-tighter drop-shadow-sm leading-none">Ravi</span>
                <div className="w-3 h-3 text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.39 8.26L21 9.27L16.27 13.87L17.38 20.46L12 17.38L6.62 20.46L7.73 13.87L3 9.27L9.61 8.26L12 2Z" /></svg>
                </div>
            </div>
            <span className="text-white font-black text-[7px] md:text-[9px] uppercase tracking-[0.2em] mt-0.5">Since 1988</span>
        </div>
    </div>
));

const Navbar = ({ cartCount, onOpenCart, onSearch }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [profile, setProfile] = useState({ name: 'Principal / Admin', location: 'India' });
    const [showProfileEdit, setShowProfileEdit] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchStr, setSearchStr] = useState('');
    const [liveResults, setLiveResults] = useState({ books: [], categories: [] });
    const location = useLocation();
    const navigate = useNavigate();

    // Navigation structure defined as constant to avoid re-creation
    const navStructure = useMemo(() => [
        { label: 'HOME', id: 'home', type: 'link' },
        {
            label: 'JOYWAY',
            id: 'joyway',
            type: 'dropdown',
            items: [
                { label: 'Term Guide', path: '/series/joyway' },
                { label: 'Workbook', path: '/series/joyway' },
                { label: 'Coursebooks', path: '/series/joyway' }
            ]
        },
        {
            label: 'ENLIGHT',
            id: 'enlight',
            type: 'dropdown',
            items: [
                { label: 'Term Series', path: '/series/enlight' },
                { label: 'Semester', path: '/series/enlight' },
                { label: 'Workbook', path: '/series/enlight' },
                { label: 'Coursebooks', path: '/series/enlight' }
            ]
        },
        {
            label: 'RAVI',
            id: 'ravi',
            type: 'dropdown',
            items: [
                { label: 'Telugu', path: '/category/ravi-telugu' },
                {
                    label: 'GOVT',
                    id: 'ravi-govt',
                    type: 'sub-structure',
                    items: [
                        { label: 'A.P', path: '/category/ravi-govt-ap' },
                        { label: 'T.G', path: '/category/ravi-govt-tg' }
                    ]
                }
            ]
        },
        { label: 'KITS', id: 'kits-flash', type: 'link' },
        { label: 'PRICE LIST', id: 'price-list', type: 'link' },
        { label: 'ABOUT', id: 'about', type: 'link' }
    ], []);

    // Optimized search input with better performance
    const handleSearchInput = useCallback((val) => {
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
    }, []);

    const handleSearchSubmit = (e) => {
        if (e) e.preventDefault();
        const query = searchStr.trim();
        onSearch(query, '');
        setMobileMenuOpen(false);
        setLiveResults({ books: [], categories: [] });
    };

    const getPath = (id) => {
        if (!id || id === 'home') return '/';
        const pageMap = {
            'about': '/about',
            'price-list': '/price-list',
            'kits-flash': '/kits-flash',
            'joyway': '/series/joyway',
            'enlight': '/series/enlight',
            'ravi': '/series/ravi'
        };
        return pageMap[id] || `/category/${id}`;
    };

    const isHomePage = location.pathname === '/';

    // Scroll to Top and Navigate functionality for Logo
    const handleLogoClick = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        let timeoutId;
        const handleScroll = () => {
            // Passive scroll listener for better performance
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    setIsScrolled(window.scrollY > 50);
                    timeoutId = null;
                }, 100);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        const savedProfile = localStorage.getItem('ravibooks_profile');
        if (savedProfile) {
            try {
                setProfile(JSON.parse(savedProfile));
            } catch (e) {
                console.error("Error parsing profile", e);
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
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

    return (
        <div className={`w-full fixed top-0 z-50 transition-all duration-300 ${useSolidStyle ? 'shadow-2xl' : ''}`} onMouseLeave={() => setActiveDropdown(null)}>
            {/* Announcement Bar */}
            <div className="bg-[#231F20] text-white py-2 px-4 md:px-20 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] border-b border-white/10 relative z-50 hidden md:flex">
                <div className="flex-1 text-center flex items-center justify-center gap-10">
                    <span className="flex items-center gap-2 transition-colors hover:text-[#FFF200] cursor-default"><i className="fas fa-truck-fast text-[#FFF200]"></i> 48-Hour Institution Dispatch</span>
                    <span className="flex items-center gap-2 hidden lg:flex transition-colors hover:text-[#01A651] cursor-default"><i className="fas fa-phone text-[#01A651]"></i> +91 98491 00063</span>
                    <span className="flex items-center gap-2 text-[#FFF200] animate-pulse cursor-default"><i className="fas fa-file-invoice"></i> ORDER FORM 2026 ACTIVE</span>
                </div>
            </div>

            {/* Main Branding Bar */}
            <nav className={`py-3 px-4 md:px-20 flex items-center justify-between gap-4 md:gap-10 transition-all duration-500 ${useSolidStyle ? 'bg-white border-b border-gray-100' : 'bg-[#01A651] text-white shadow-lg'}`}>
                <div className="flex items-center gap-4 text-left">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-xl focus:outline-none" aria-label="Toggle Menu">
                        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                    <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105" onClick={handleLogoClick}>
                        <Logo />
                    </Link>
                </div>

                <form onSubmit={handleSearchSubmit} className={`flex-1 hidden sm:flex max-w-2xl rounded-[16px] overflow-visible border transition-all items-center shadow-sm relative ${useSolidStyle ? 'bg-gray-100 border-gray-200 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#EC1C24]/5' : 'bg-white/20 border-white/20 backdrop-blur-md'}`}>
                    <div className="flex-1 relative flex items-center gap-3 px-4 md:px-6">
                        <i className={`fas fa-search text-sm ${useSolidStyle ? 'text-gray-400' : 'text-white/60'}`}></i>
                        <input
                            type="text"
                            placeholder="Search all books, series, subjects..."
                            value={searchStr}
                            onChange={(e) => handleSearchInput(e.target.value)}
                            className={`w-full py-3 bg-transparent outline-none text-xs md:text-sm font-bold placeholder:opacity-50 ${useSolidStyle ? 'text-[#231F20]' : 'text-white placeholder:text-white'}`}
                        />

                        {/* SEARCH RESULTS DROPDOWN */}
                        {(liveResults.books.length > 0 || liveResults.categories.length > 0) && (
                            <div className="absolute top-[120%] left-0 w-full bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 z-[100]">
                                {liveResults.categories.length > 0 && (
                                    <div className="border-b border-gray-100 p-3">
                                        <div className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-2 px-2">Categories</div>
                                        <div className="flex flex-wrap gap-2">
                                            {liveResults.categories.map(cat => (
                                                <Link
                                                    key={cat.id}
                                                    to={getPath(cat.id)}
                                                    onClick={() => setLiveResults({ books: [], categories: [] })}
                                                    className="px-3 py-1.5 bg-gray-50 hover:bg-[#01A651] text-gray-700 hover:text-white rounded-lg text-[9px] font-bold uppercase transition-all"
                                                >
                                                    {cat.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {liveResults.books.length > 0 && (
                                    <div className="p-2">
                                        <div className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-2 px-2">Books & Series</div>
                                        {liveResults.books.map((book) => (
                                            <Link
                                                key={book.id}
                                                to={`/book/${book.id}`}
                                                onClick={() => setLiveResults({ books: [], categories: [] })}
                                                className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors rounded-xl group text-left"
                                            >
                                                <div className="w-8 h-10 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center p-1 group-hover:bg-white shadow-sm">
                                                    <img src={book.image} alt="" className="max-h-full object-contain" loading="lazy" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-[10px] font-black uppercase text-[#231F20] leading-tight truncate group-hover:text-[#EC1C24]">{book.name}</h4>
                                                    <span className="text-[8px] font-bold text-[#01A651] uppercase">{book.category}</span>
                                                </div>
                                                <i className="fas fa-arrow-right text-[10px] text-gray-300 group-hover:text-[#EC1C24] transition-colors"></i>
                                            </Link>
                                        ))}
                                        <button
                                            onClick={handleSearchSubmit}
                                            className="w-full mt-2 py-3 bg-[#EC1C24] hover:bg-black text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-colors active:scale-[0.98]"
                                        >
                                            View All Results
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <button type="submit" className={`px-6 md:px-10 py-4 flex items-center justify-center transition-all font-black text-[10px] uppercase tracking-widest ${useSolidStyle ? 'bg-[#EC1C24] text-white hover:bg-[#231F20]' : 'bg-white text-[#EC1C24] hover:bg-[#231F20] hover:text-white'} active:scale-95`}>
                        FIND
                    </button>
                </form>

                <div className="flex items-center gap-2 md:gap-8 text-left">
                    <div className="relative">
                        <button
                            onClick={() => setShowProfileEdit(!showProfileEdit)}
                            className={`flex items-center gap-3 transition-colors ${useSolidStyle ? 'text-[#231F20]' : 'text-white'} active:scale-95`}
                        >
                            <div className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all border-4 overflow-hidden ${useSolidStyle ? 'bg-gray-50 border-white shadow-sm' : 'bg-white/10 border-white/20'}`}>
                                <img src={`https://ui-avatars.com/api/?name=${profile.name}&background=EC1C24&color=fff`} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <div className="hidden lg:block text-left leading-tight">
                                <div className="text-[8px] font-black uppercase tracking-widest opacity-60 mb-0.5">Identity</div>
                                <div className="text-xs truncate max-w-[100px] font-black uppercase tracking-tighter">{profile.name.split(' ')[0]}</div>
                            </div>
                        </button>

                        {showProfileEdit && (
                            <div className="absolute top-[130%] right-0 w-80 bg-white rounded-[32px] shadow-2xl p-8 text-gray-800 border border-gray-50 animate-in slide-in-from-top-2 duration-300 z-50">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-[#FFF200] rounded-2xl flex items-center justify-center text-[#231F20] shadow-inner"><i className="fas fa-id-card text-xl"></i></div>
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
                                    <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all hover:bg-[#EC1C24] shadow-xl shadow-black/10 mt-4 active:scale-95">
                                        CONFIRM IDENTITY
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>

                    <button onClick={onOpenCart} className={`relative group transition-all active:scale-95 ${useSolidStyle ? 'text-[#231F20]' : 'text-white'}`}>
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-all ${useSolidStyle ? 'bg-black text-white hover:bg-[#EC1C24]' : 'bg-white/10 hover:bg-white/20'}`}>
                            <i className="fas fa-file-invoice-dollar text-lg md:text-xl group-hover:scale-110 transition-transform"></i>
                        </div>
                        <span className={`absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-black border-2 md:border-4 ${useSolidStyle ? 'bg-[#EC1C24] text-white border-white' : 'bg-[#FFF200] text-[#231F20] border-[#01A651]'}`}>
                            {cartCount}
                        </span>
                    </button>
                </div>
            </nav>

            {/* Bottom Category Bar - Slim & Professional */}
            <div className={`transition-all duration-500 hidden md:block border-b-4 border-[#EC1C24] ${useSolidStyle ? 'bg-white' : 'bg-white/95 backdrop-blur-md text-[#231F20] shadow-lg'}`}>
                <ul className="max-w-[1400px] mx-auto px-10 lg:px-24 flex gap-12 lg:gap-24 text-[11px] font-black uppercase tracking-[0.25em] lg:tracking-[0.4em] py-2 md:py-3 relative scrollbar-hide overflow-x-auto whitespace-nowrap no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {navStructure.map((cat) => (
                        <li
                            key={cat.id}
                            className={`hover:text-[#EC1C24] cursor-pointer transition-all border-b-2 border-transparent pb-1 flex-shrink-0 ${useSolidStyle ? 'text-gray-600' : 'text-[#231F20] opacity-90 hover:opacity-100'}`}
                            onMouseEnter={() => cat.type === 'dropdown' ? setActiveDropdown(cat.id) : setActiveDropdown(null)}
                        >
                            <Link to={getPath(cat.id)} className="block py-1 hover:scale-110 transition-transform transform-gpu">{cat.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-[#231F20] z-[60] transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden overflow-y-auto`}>
                <div className="p-8 text-left">
                    <div className="flex justify-between items-center mb-16">
                        <Link to="/" onClick={handleLogoClick}><Logo /></Link>
                        <button onClick={() => setMobileMenuOpen(false)} className="text-white text-3xl active:scale-95">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <ul className="space-y-8">
                        {navStructure.map((cat) => (
                            <li key={cat.label} onClick={() => cat.type !== 'dropdown' && setMobileMenuOpen(false)}>
                                {cat.type === 'dropdown' ? (
                                    <div className="mb-6">
                                        <div className="text-white text-2xl font-black uppercase tracking-tighter mb-4 flex items-center justify-between">
                                            {cat.label}
                                            <i className="fas fa-chevron-right text-[#FFF200] text-sm"></i>
                                        </div>
                                        <div className="ml-4 space-y-4 border-l-2 border-white/10 pl-4">
                                            {cat.items.map((item, index) => {
                                                if (item.type === 'sub-structure') {
                                                    return (
                                                        <div key={index} className="space-y-3">
                                                            <div className="text-[#FFF200] text-[10px] font-black uppercase tracking-widest">
                                                                {item.label}
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-2">
                                                                {item.items.map((nested, nestedIndex) => (
                                                                    <Link
                                                                        key={nestedIndex}
                                                                        to={nested.path}
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                        className="bg-white/5 text-white text-[10px] font-bold uppercase py-3 px-3 rounded-xl text-center hover:bg-[#FFF200] hover:text-black transition-all"
                                                                    >
                                                                        {nested.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                                return (
                                                    <Link
                                                        key={index}
                                                        to={item.path}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="text-white/60 text-lg font-bold uppercase tracking-wide flex items-center gap-3 hover:text-[#FFF200] transition-colors"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFF200]"></div>
                                                        {item.label}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        to={getPath(cat.id)}
                                        className="text-white text-2xl font-black uppercase tracking-tighter flex items-center justify-between group hover:text-[#EC1C24] transition-colors"
                                    >
                                        {cat.label}
                                        <i className="fas fa-arrow-right text-[#01A651] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mega Menu Dropdown */}
            {
                activeDropdown && navStructure.find(n => n.type === 'dropdown' && n.id === activeDropdown) && !mobileMenuOpen && (
                    <div
                        className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[70%] max-w-5xl bg-white shadow-[0_40px_100px_rgba(0,0,0,0.3)] border-t border-gray-100 p-8 hidden md:flex gap-12 animate-in slide-in-from-top-4 duration-500 z-40 rounded-b-3xl"
                        onMouseEnter={() => setActiveDropdown(activeDropdown)}
                    >
                        <div className="w-1/3">
                            <h4 className="text-[#EC1C24] text-[10px] font-black mb-6 border-b pb-3 uppercase tracking-[0.3em] text-left">{activeDropdown}</h4>
                            <ul className="grid grid-cols-1 gap-3">
                                {(() => {
                                    const activeItem = navStructure.find(n => n.id === activeDropdown);
                                    return activeItem?.items.map((item, i) => {
                                        if (item.type === 'sub-structure') {
                                            return (
                                                <div key={i} className="space-y-2 mt-2 first:mt-0">
                                                    <div className="text-gray-300 text-[8px] font-black uppercase tracking-widest mb-1">{item.label}</div>
                                                    {item.items.map((nested, j) => (
                                                        <li key={j} className="text-gray-400 hover:text-black hover:translate-x-2 transition-all cursor-pointer font-bold text-[10px] uppercase flex items-center gap-2 group/nav">
                                                            <div className="w-1 h-1 bg-gray-200 rounded-full group-hover/nav:bg-[#EC1C24]"></div>
                                                            <Link to={nested.path} onClick={() => setActiveDropdown(null)}>{nested.label}</Link>
                                                        </li>
                                                    ))}
                                                </div>
                                            );
                                        }
                                        return (
                                            <li key={i} className="text-gray-400 hover:text-black hover:translate-x-2 transition-all cursor-pointer font-bold text-[10px] uppercase flex items-center gap-2 group/nav">
                                                <div className="w-1 h-1 bg-gray-200 rounded-full group-hover/nav:bg-[#EC1C24]"></div>
                                                <Link to={item.path} onClick={() => setActiveDropdown(null)}>{item.label}</Link>
                                            </li>
                                        );
                                    });
                                })()}
                            </ul>
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 flex items-center justify-between border border-gray-200 relative overflow-hidden group/mega text-left">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#EC1C24]/5 rounded-full blur-3xl"></div>
                            <div className="max-w-xs relative z-10">
                                <span className="bg-[#01A651] text-white px-4 py-1.5 rounded-full text-[8px] font-black uppercase mb-4 inline-block tracking-widest shadow-lg">2026 Collection</span>
                                <h3 className="text-3xl font-black text-[#231F20] leading-none uppercase tracking-tighter mt-2">Academic <br /> Excellence</h3>
                                <Link to={getPath(activeDropdown)} onClick={() => setActiveDropdown(null)} className="inline-block mt-8 bg-[#231F20] text-white px-8 py-3 rounded-xl font-black text-[9px] uppercase tracking-[0.2em] hover:bg-[#EC1C24] transition-all shadow-xl active:scale-95">Explore Full Series</Link>
                            </div>
                            <div className="w-32 h-44 bg-white rounded-2xl shadow-2xl flex items-center justify-center p-6 rotate-6 group-hover/mega:rotate-0 transition-all duration-700 border-4 border-white">
                                <img src="https://placehold.co/150x200/EC1C24/FFFFFF?text=Books" alt="Feature" className="h-full shadow-lg rounded" loading="lazy" />
                            </div>
                        </div>
                    </div>
                )
            }
            <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </div >
    );
};

export default Navbar;