import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { booksData } from '../data';
import BookCard from '../components/BookCard';

const SeriesPage = ({ onAddToCart, initialType, initialLanguage, initialRegion }) => {
    const { seriesName } = useParams();
    const location = useLocation();

    // Normalize series name from URL or determine from props
    const currentSeries = seriesName || (location.pathname.includes('enlight') ? 'enlight' : location.pathname.includes('joyway') ? 'joyway' : 'ravi');

    const [sortBy, setSortBy] = useState('default');
    const [filters, setFilters] = useState({
        class: [],
        subject: [],
        type: initialType ? [initialType] : [],
        language: initialLanguage ? [initialLanguage] : [],
        region: initialRegion ? [initialRegion] : []
    });

    // Dynamic Series Config
    const seriesConfig = {
        joyway: {
            id: 'joyway',
            name: "Joyway",
            suffix: "Series.",
            tag: "Early Learning Series",
            description: "Interactive learning materials for early childhood education. From Pre-Primary to Class 5.",
            color: "#FFF200",
            textColor: "#231F20",
            accentColor: "#EC1C24", // The dot color
            bgImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80",
            types: ['Term Book', 'Workbook', 'Coursebook', 'Semester'],
            subjects: ['English', 'Math', 'EVS', 'Rhymes', 'Story']
        },
        enlight: {
            id: 'enlight',
            name: "Enlight",
            suffix: "Series.",
            tag: "Academic Excellence 2026",
            description: "Digital-ready semester and term solutions engineered for the modern classroom. Verified by board subject experts for Classes 1 to 10.",
            color: "#01A651",
            textColor: "#FFFFFF",
            accentColor: "#FFF200",
            bgImage: "https://images.unsplash.com/photo-1491843351663-8c4362820a4b?auto=format&fit=crop&w=1920&q=80",
            types: ['Semester', 'Term', 'Workbook', 'Coursebook', 'Kits'],
            subjects: ['English', 'Math', 'EVS', 'Hindi', 'Telugu', 'GK']
        },
        ravi: {
            id: 'ravi',
            name: "Ravi",
            suffix: "Publishers.",
            tag: "Authorized Publications",
            description: "Authorized Government & Regional Language Publications. Serving AP & Telangana since 1988 with distinction.",
            color: "#EC1C24",
            textColor: "#FFFFFF",
            accentColor: "#2E3092",
            bgImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1920&q=80",
            types: ['Telugu', 'Kannada', 'Tamil', 'Hindi', 'Regional'],
            subjects: ['Language', 'Grammar', 'Prose', 'Poetry'],
            languages: ['Telugu', 'Kannada', 'Tamil', 'Hindi'],
            regions: ['AP', 'TG', 'General']
        }
    };

    const series = seriesConfig[currentSeries] || seriesConfig.enlight;

    // Reset or update filters when series or initial props change
    useEffect(() => {
        setFilters({
            class: [],
            subject: [],
            type: initialType ? [initialType] : [],
            language: initialLanguage ? [initialLanguage] : [],
            region: initialRegion ? [initialRegion] : []
        });
    }, [currentSeries, initialType, initialLanguage, initialRegion]);

    const handleFilterChange = (category, value) => {
        setFilters(prev => {
            const current = prev[category] || [];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    // Advanced filtering logic that handles both series prop and keyword matching
    const baseBooks = useMemo(() => {
        return booksData.filter(b => {
            // Case 1: Direct series match
            if (b.series?.toLowerCase() === series.id.toLowerCase()) return true;
            if (series.id === 'ravi' && b.series === 'RAVI') return true;

            // Case 2: Broad keyword match (for older data entries)
            const name = b.name.toLowerCase();
            const cat = b.category.toLowerCase();
            const seriesId = series.id.toLowerCase();

            if (seriesId === 'enlight') return name.includes('enlight') || cat.includes('enlight');
            if (seriesId === 'joyway') return name.includes('joyway') || cat.includes('joyway');
            if (seriesId === 'ravi') {
                return cat.includes('regional') ||
                    cat.includes('telugu') ||
                    cat.includes('kannada') ||
                    cat.includes('tamil') ||
                    name.includes('telugu') ||
                    name.includes('kannada') ||
                    name.includes('tamil');
            }
            return false;
        });
    }, [series.id]);

    const classes = useMemo(() => {
        return [...new Set(baseBooks.map(b => b.subCategory || 'General'))].sort();
    }, [baseBooks]);

    const filteredBooks = useMemo(() => {
        return baseBooks.filter(book => {
            // Class Filter
            const matchesClass = filters.class.length === 0 || filters.class.includes(book.subCategory);

            // Type/Category Filter
            const matchesType = filters.type.length === 0 || filters.type.some(t => {
                const term = t.toLowerCase();
                // Special handling for Enlight Coursebooks
                if (term === 'coursebook') return book.category.toLowerCase().includes('course') || book.name.toLowerCase().includes('coursebook');
                return book.category.toLowerCase().includes(term) || book.name.toLowerCase().includes(term);
            });

            // Subject Filter
            const matchesSubject = filters.subject.length === 0 || filters.subject.some(s => book.name.toLowerCase().includes(s.toLowerCase()));

            // Language/Region Filter (for Ravi)
            const matchesLanguage = (filters.language || []).length === 0 || filters.language.some(l =>
                book.name.toLowerCase().includes(l.toLowerCase()) ||
                (book.category && book.category.toLowerCase().includes(l.toLowerCase()))
            );

            return matchesClass && matchesType && matchesSubject && matchesLanguage;
        });
    }, [baseBooks, filters]);

    const sortedBooks = useMemo(() => {
        const books = [...filteredBooks];
        switch (sortBy) {
            case 'price-asc': return books.sort((a, b) => a.price - b.price);
            case 'price-desc': return books.sort((a, b) => b.price - a.price);
            case 'name-asc': return books.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc': return books.sort((a, b) => b.name.localeCompare(a.name));
            default: return books;
        }
    }, [filteredBooks, sortBy]);

    return (
        <div className="min-h-screen bg-[#f8f9fb]">
            {/* Premium Dynamic Header */}
            <div
                className="pt-28 md:pt-36 relative overflow-hidden"
                style={{ backgroundColor: series.color }}
            >
                {/* Background Decorations */}
                <div className="absolute inset-0 bg-black/10 z-0"></div>
                <img
                    src={series.bgImage}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply animate-in scale-in duration-[2s]"
                    alt="Background"
                    loading="lazy"
                />

                {/* Visual Flair */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 transform skew-x-12 translate-x-1/2"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[120px] animate-pulse"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10 py-16 md:py-24">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex-1 text-left">
                            <div
                                className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${series.id === 'joyway' ? 'bg-black/10 border-black/10' : 'bg-white/10 border-white/20'} backdrop-blur-md text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-in slide-in-from-left-10 duration-700`}
                                style={{ color: series.id === 'joyway' ? '#231F20' : series.accentColor }}
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: series.id === 'joyway' ? '#231F20' : series.accentColor }}></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: series.id === 'joyway' ? '#231F20' : series.accentColor }}></span>
                                </span>
                                {series.tag}
                            </div>

                            <h1
                                className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 animate-in slide-in-from-left-10 duration-700 delay-100 italic"
                                style={{ color: series.textColor }}
                            >
                                {series.id === 'ravi' ? series.name : (
                                    <>
                                        {series.id === 'joyway' ? series.name.slice(0, 3) : series.name.slice(0, 2)}
                                        <span style={{ color: series.accentColor }}>
                                            {series.id === 'joyway' ? series.name.slice(3) : series.name.slice(2)}
                                        </span>
                                    </>
                                )}<br />
                                <span className="text-4xl md:text-5xl not-italic tracking-normal opacity-90">{series.suffix}</span>
                            </h1>

                            <div className={`max-w-xl p-8 rounded-[32px] ${series.id === 'joyway' ? 'bg-white/30 border-black/5' : 'bg-black/20'} backdrop-blur-xl border-l-8 animate-in slide-in-from-left-10 duration-700 delay-200`} style={{ borderColor: series.id === 'joyway' ? '#EC1C24' : series.accentColor }}>
                                <p className={`text-sm md:text-lg font-black leading-relaxed uppercase tracking-tight ${series.id === 'joyway' ? 'text-black' : 'text-white/90'}`}>
                                    {series.description}
                                </p>
                            </div>
                        </div>

                        {/* Floating Preview Card */}
                        <div className="hidden lg:block w-72 h-96 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 p-8 rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img src={baseBooks[0]?.image || 'https://placehold.co/400x600?text=Preview'} alt="Preview" className="w-full h-full object-cover rounded-[24px] shadow-2xl bg-white/10" />
                            <div
                                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform"
                                style={{ backgroundColor: series.accentColor, color: series.id === 'joyway' ? '#000' : '#fff' }}
                            >
                                <i className="fas fa-certificate text-3xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters and Results Section */}
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
                {/* Sidebar Filters */}
                <div className="lg:w-72 flex-shrink-0 space-y-8">
                    {/* Series Type Filter */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="font-black uppercase text-[10px] tracking-widest text-gray-400 mb-6 border-b pb-2 flex items-center justify-between">
                            Sectors
                            <i className="fas fa-layer-group text-gray-200"></i>
                        </h3>
                        <div className="space-y-3">
                            {series.types.map(t => (
                                <label key={t} className="flex items-center gap-3 cursor-pointer group">
                                    <div
                                        className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${filters.type.includes(t) ? 'border-transparent' : 'border-gray-200 group-hover:border-gray-400'}`}
                                        style={filters.type.includes(t) ? { backgroundColor: series.color } : {}}
                                    >
                                        {filters.type.includes(t) && <i className="fas fa-check text-[8px]" style={{ color: series.textColor }}></i>}
                                    </div>
                                    <input type="checkbox" className="hidden" checked={filters.type.includes(t)} onChange={() => handleFilterChange('type', t)} />
                                    <span className={`text-[11px] font-black uppercase tracking-tight transition-colors ${filters.type.includes(t) ? 'text-black' : 'text-gray-400 group-hover:text-gray-600'}`}>{t}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Class/Grade Filter */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="font-black uppercase text-[10px] tracking-widest text-gray-400 mb-6 border-b pb-2 flex items-center justify-between">
                            Classes
                            <i className="fas fa-graduation-cap text-gray-200"></i>
                        </h3>
                        <div className="max-h-72 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                            {classes.map(c => (
                                <label key={c} className="flex items-center gap-3 cursor-pointer group">
                                    <div
                                        className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${filters.class.includes(c) ? 'border-transparent' : 'border-gray-200 group-hover:border-gray-400'}`}
                                        style={filters.class.includes(c) ? { backgroundColor: '#231F20' } : {}}
                                    >
                                        {filters.class.includes(c) && <i className="fas fa-check text-white text-[8px]"></i>}
                                    </div>
                                    <input type="checkbox" className="hidden" checked={filters.class.includes(c)} onChange={() => handleFilterChange('class', c)} />
                                    <span className={`text-[11px] font-black uppercase tracking-tight transition-colors ${filters.class.includes(c) ? 'text-black' : 'text-gray-400 group-hover:text-gray-600'}`}>{c}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Subject Filter */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="font-black uppercase text-[10px] tracking-widest text-gray-400 mb-6 border-b pb-2 flex items-center justify-between">
                            Subjects
                            <i className="fas fa-book text-gray-200"></i>
                        </h3>
                        <div className="space-y-3">
                            {series.subjects.map(s => (
                                <label key={s} className="flex items-center gap-3 cursor-pointer group">
                                    <div
                                        className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${filters.subject.includes(s) ? 'border-transparent' : 'border-gray-200 group-hover:border-gray-400'}`}
                                        style={filters.subject.includes(s) ? { backgroundColor: series.accentColor } : {}}
                                    >
                                        {filters.subject.includes(s) && <i className="fas fa-check text-white text-[8px]"></i>}
                                    </div>
                                    <input type="checkbox" className="hidden" checked={filters.subject.includes(s)} onChange={() => handleFilterChange('subject', s)} />
                                    <span className={`text-[11px] font-black uppercase tracking-tight transition-colors ${filters.subject.includes(s) ? 'text-black' : 'text-gray-400 group-hover:text-gray-600'}`}>{s}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Ravi Specific: Languages */}
                    {series.id === 'ravi' && series.languages && (
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="font-black uppercase text-[10px] tracking-widest text-gray-400 mb-6 border-b pb-2">Languages</h3>
                            <div className="space-y-3">
                                {series.languages.map(l => (
                                    <label key={l} className="flex items-center gap-3 cursor-pointer group">
                                        <div
                                            className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${filters.language.includes(l) ? 'bg-[#2E3092] border-transparent' : 'border-gray-200'}`}
                                        >
                                            {filters.language.includes(l) && <i className="fas fa-check text-white text-[8px]"></i>}
                                        </div>
                                        <input type="checkbox" className="hidden" checked={filters.language.includes(l)} onChange={() => handleFilterChange('language', l)} />
                                        <span className={`text-[11px] font-black uppercase tracking-tight ${filters.language.includes(l) ? 'text-black' : 'text-gray-400'}`}>{l}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Results Grid */}
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                        <div className="flex flex-col items-start">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 mb-1">Live Inventory</span>
                            <div className="text-xl md:text-2xl font-black text-[#231F20] tracking-tighter uppercase">
                                Showing {sortedBooks.length} <span style={{ color: series.color }}>{series.name}</span> Resources
                            </div>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 w-full md:w-auto">
                            <i className="fas fa-sort-amount-down text-gray-300"></i>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="text-[11px] font-black uppercase bg-transparent outline-none cursor-pointer tracking-widest text-gray-600"
                            >
                                <option value="default">Sort: Default</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="name-asc">Name: A-Z</option>
                            </select>
                        </div>
                    </div>

                    {sortedBooks.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
                            {sortedBooks.map((book, idx) => (
                                <div key={book.id} className="animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: `${idx * 50}ms` }}>
                                    <BookCard book={book} onAddToCart={onAddToCart} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-10 text-gray-200">
                                <i className="fas fa-folder-open text-5xl"></i>
                            </div>
                            <h3 className="text-2xl font-black uppercase text-gray-300 tracking-tighter">No Books Found</h3>
                            <p className="text-[11px] text-gray-400 mt-4 uppercase font-bold tracking-widest">Try adjusting your filters for {series.name}</p>
                            <button
                                onClick={() => setFilters({ class: [], subject: [], type: [], language: [], region: [] })}
                                className="mt-10 px-10 py-4 bg-[#231F20] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#EC1C24] transition-all shadow-xl active:scale-95"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Value Props Support Footer */}
            <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
                <div className="bg-[#231F20] rounded-[40px] md:rounded-[60px] p-10 md:p-24 flex flex-col xl:flex-row items-center justify-between gap-12 md:gap-16 overflow-hidden relative group border border-white/5 text-left">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05)_0%,_transparent_60%)]"></div>
                    <div className="relative z-10 w-full xl:w-auto">
                        <div className="w-16 h-1.5 rounded-full mb-8 md:mb-10 mx-auto xl:mx-0" style={{ backgroundColor: series.color }}></div>
                        <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[1.1] md:leading-[1] mb-6 text-white text-center xl:text-left">Institution <br /> <span style={{ color: series.color }}>Assistance</span></h3>
                        <p className="text-white/40 font-bold uppercase text-[10px] md:text-[12px] tracking-[0.4em] text-center xl:text-left">Exclusive procurement for schools & distributors.</p>
                    </div>
                    <div className="flex flex-col items-center gap-8 relative z-10 w-full xl:w-auto">
                        <a href="tel:+919849100063" className="w-full xl:w-auto bg-white text-[#231F20] px-12 md:px-16 py-6 rounded-[24px] font-black text-[12px] uppercase tracking-[0.4em] hover:bg-[#01A651] hover:text-white transition-all shadow-2xl active:scale-95 text-center">
                            Call Subject Expert
                        </a>
                        <div className="flex items-center gap-6 text-white/50 text-[12px] font-black uppercase tracking-[0.4em]">
                            <i className="fas fa-headset text-xl" style={{ color: series.color }}></i> +91 98491 00063
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeriesPage;




