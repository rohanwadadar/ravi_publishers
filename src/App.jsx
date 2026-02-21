import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import BookDetailPage from './pages/BookDetailPage';
import AboutPage from './pages/AboutPage';
import PriceListPage from './pages/PriceListPage';
import CheckoutPage from './pages/CheckoutPage';
import WorkbooksPage from './pages/WorkbooksPage';
import KitsFlashPage from './pages/KitsFlashPage';
import LanguagesPage from './pages/LanguagesPage';
import SeriesPage from './pages/SeriesPage';
import ScrollToTop from './components/ScrollToTop';
import { booksData } from './data';

// Home Component
const HomePage = React.memo(({ onAddToCart }) => {
  const navigate = useNavigate();
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />

      {/* SECTORS OVERVIEW (JOYWAY & ENLIGHT) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10">
        {/* JOYWAY SECTION */}
        <div onClick={() => navigate('/series/joyway')} className="group relative h-[450px] md:h-[600px] overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-white/10">
          <div className="absolute inset-0 bg-black z-0"></div>
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-30 group-hover:opacity-20" alt="Joyway" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 relative z-10 transition-all duration-500 group-hover:translate-y-[-10px]">
            <div className="flex items-center gap-4 mb-4 md:mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
              <div className="bg-[#FFF200] w-8 md:w-12 h-1 mb-0.5"></div>
              <span className="text-[#FFF200] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-[10px]">Early Learning Series</span>
            </div>

            {/* Joyway Logo — Official High-Def Asset */}
            <div className="mb-6 md:mb-8">
              <img
                src="/joyway_official_logo.png"
                alt="Joyway Series"
                className="h-24 md:h-36 w-auto object-contain mix-blend-multiply"
              />
            </div>

            <p className="text-gray-300 text-[12px] md:text-sm font-medium leading-relaxed max-w-sm border-l-2 border-[#FFF200] pl-4 md:pl-6 mb-8 md:mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
              A complete interactive curriculum designed to spark curiosity in early learners. From Pre-Primary to Class 5.
            </p>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {[
                { label: 'Term Books', path: '/category/joyway-term' },
                { label: 'Workbooks', path: '/category/joyway-workbook' },
                { label: 'Coursebooks', path: '/category/joyway-coursebooks' }
              ].map((tag, i) => (
                <span
                  key={i}
                  onClick={(e) => { e.stopPropagation(); navigate(tag.path); }}
                  className="px-4 py-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:bg-[#FFF200] hover:text-black hover:border-[#FFF200] transition-all duration-300"
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 hover:bg-[#FFF200] hover:border-[#FFF200] group/icon">
              <i className="fas fa-arrow-right text-white text-lg md:text-xl group-hover/icon:text-black -rotate-45 group-hover/icon:rotate-0 transition-all duration-300"></i>
            </div>
          </div>
        </div>

        {/* ENLIGHT SECTION */}
        <div onClick={() => navigate('/series/enlight')} className="group relative h-[450px] md:h-[600px] overflow-hidden cursor-pointer">
          <div className="absolute inset-0 bg-black z-0"></div>
          <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=1200&q=80" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-50 group-hover:opacity-30" alt="Enlight" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 relative z-10 transition-all duration-500 group-hover:translate-y-[-10px]">
            <div className="flex items-center gap-4 mb-4 md:mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
              <div className="bg-[#01A651] w-8 md:w-12 h-1 mb-0.5"></div>
              <span className="text-[#01A651] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-[10px]">Academic Excellence</span>
            </div>

            {/* Enlight Logo — High-Def Clean Asset */}
            <div className="mb-6 md:mb-8">
              <img
                src="/enlight_official_logo.png"
                alt="Enlight Series"
                className="h-24 md:h-36 w-auto object-contain mix-blend-multiply"
              />
            </div>

            <p className="text-gray-300 text-[12px] md:text-sm font-medium leading-relaxed max-w-sm border-l-2 border-[#01A651] pl-4 md:pl-6 mb-8 md:mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
              Digital-ready semester and term solutions engineered for the modern classroom. Class 1 to Class 10.
            </p>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {[
                { label: 'Semester Series', path: '/category/enlight-semester' },
                { label: 'Term Series', path: '/category/enlight-term' },
                { label: 'Workbooks', path: '/category/enlight-workbook' },
                { label: 'Coursebooks', path: '/category/enlight-coursebooks' }
              ].map((tag, i) => (
                <span
                  key={i}
                  onClick={(e) => { e.stopPropagation(); navigate(tag.path); }}
                  className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:bg-[#01A651] hover:text-white hover:border-[#01A651] transition-all duration-300"
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 hover:bg-[#01A651] hover:border-[#01A651] group/icon">
              <i className="fas fa-arrow-right text-white text-lg md:text-xl -rotate-45 group-hover/icon:rotate-0 transition-all duration-300"></i>
            </div>
          </div>
        </div>
      </div>

      <Categories />
      <FeaturedProducts onAddToCart={onAddToCart} />

      {/* Additional Content: Value Props */}
      <section className="py-24 bg-[#f8f9fb] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-12 rounded-[40px] bg-white shadow-xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] transition-all group border border-gray-50 luxury-shadow">
            <div className="w-20 h-20 bg-[#EC1C24]/5 rounded-[24px] flex items-center justify-center mb-8 text-[#EC1C24] group-hover:bg-[#EC1C24] group-hover:text-white transition-all transform group-hover:scale-110 duration-500">
              <i className="fas fa-truck-fast text-2xl"></i>
            </div>
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Blitz Delivery</h3>
            <p className="text-gray-400 text-xs font-medium leading-relaxed uppercase tracking-tighter">Authorized logistics for AP & Telangana. Guaranteed 48-hour dispatch for all Govt. workbooks.</p>
          </div>
          <div className="flex flex-col items-center text-center p-12 rounded-[40px] bg-white shadow-xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] transition-all group border border-gray-50 luxury-shadow">
            <div className="w-20 h-20 bg-[#01A651]/5 rounded-[24px] flex items-center justify-center mb-8 text-[#01A651] group-hover:bg-[#01A651] group-hover:text-white transition-all transform group-hover:scale-110 duration-500">
              <i className="fas fa-file-invoice text-2xl"></i>
            </div>
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Order Form 2026</h3>
            <p className="text-gray-400 text-xs font-medium leading-relaxed uppercase tracking-tighter">Streamlined procurement for educational institutions. Accurate 2026 academic pricing.</p>
          </div>
          <div className="flex flex-col items-center text-center p-12 rounded-[40px] bg-white shadow-xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] transition-all group border border-gray-50 luxury-shadow">
            <div className="w-20 h-20 bg-[#2E3092]/5 rounded-[24px] flex items-center justify-center mb-8 text-[#2E3092] group-hover:bg-[#2E3092] group-hover:text-white transition-all transform group-hover:scale-110 duration-500">
              <i className="fas fa-graduation-cap text-2xl"></i>
            </div>
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Authorized Content</h3>
            <p className="text-gray-400 text-xs font-medium leading-relaxed uppercase tracking-tighter">Standardized curriculum solutions since 1988. Verified by board subject experts.</p>
          </div>
        </div>
      </section>
    </div>
  );
});

// App Router Wrapper to access navigate
const AppContent = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  // Load cart from cache on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('ravibooks_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        setCart([]);
      }
    }
  }, []);

  // Sync cart to cache
  useEffect(() => {
    localStorage.setItem('ravibooks_cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (book, quantity = 1) => {
    const qty = parseInt(quantity);
    if (isNaN(qty) || qty <= 0) return;

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === book.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === book.id ? { ...item, quantity: (item.quantity * 1) + qty } : item
        );
      }
      return [...prevCart, { ...book, quantity: qty }];
    });

    // Show notification
    setNotification(`${qty} x ${book.name} added to Order Bag!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const handleSearch = (query, category) => {
    let url = `/category/search?q=${encodeURIComponent(query)}`;
    if (category) url += `&cat=${encodeURIComponent(category)}`;
    navigate(url);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <ScrollToTop />
      <Navbar
        cartCount={cart.reduce((acc, i) => acc + (i.quantity * 1), 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onSearch={handleSearch}
      />

      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#231F20] text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 fade-in duration-300 border border-white/10">
          <i className="fas fa-check-circle text-[#01A651]"></i>
          {notification}
        </div>
      )}

      {/* Improved Cart Sidebar (Order Form Style) */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isCartOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsCartOpen(false)}
        />
        <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-[#EC1C24] text-white">
            <div className="flex flex-col text-left">
              <h2 className="text-2xl font-black uppercase tracking-tighter">Your Order Bag</h2>
              <span className="text-[9px] font-bold uppercase tracking-widest opacity-80 mt-1 flex items-center gap-2">
                <i className="fas fa-shield-check"></i> Academic Year 2026
              </span>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                <i className="fas fa-file-invoice text-6xl mb-6 text-gray-200"></i>
                <p className="font-bold uppercase tracking-widest text-sm text-gray-400">Order Bag is Empty</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex gap-6 pb-6 border-b border-gray-50 group text-left">
                  <div className="w-24 h-32 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center p-3">
                    <img src={item.image} alt={item.name} className="max-h-full object-contain shadow-md" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-xs uppercase mb-1 line-clamp-2 leading-tight text-[#231F20]">{item.name}</h4>
                    <p className="text-[10px] text-[#01A651] font-bold mb-4 uppercase tracking-widest">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-gray-50 rounded-lg px-3 py-1 border border-gray-100">
                        <span className="text-[10px] font-black uppercase text-gray-400 mr-2 tracking-widest">Qty:</span>
                        <span className="text-xs font-black text-[#231F20]">{item.quantity}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm font-black text-[#EC1C24]">₹{item.price * item.quantity}</span>
                        <button onClick={() => removeFromCart(item.id)} className="text-[8px] text-gray-300 hover:text-[#EC1C24] font-black uppercase tracking-[0.2em] mt-1 flex items-center gap-1 transition-colors">
                          <i className="fas fa-trash-alt"></i> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-8 bg-gray-50 border-t border-gray-100 space-y-6">
            <div className="flex justify-between items-center text-gray-500 text-[10px] font-black uppercase tracking-widest">
              <span>Items Count</span>
              <span>{cart.reduce((acc, i) => acc + (i.quantity * 1), 0)} Units</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-black uppercase tracking-tighter text-gray-900 leading-none text-left">Order <br /> Total</span>
              <span className="text-4xl font-black text-[#EC1C24]">₹{cartTotal}.00</span>
            </div>
            <button
              onClick={handleProceedToCheckout}
              disabled={cart.length === 0}
              className="w-full bg-[#231F20] hover:bg-[#EC1C24] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all shadow-2xl shadow-black/10 active:scale-95"
            >
              Confirm and Buy Now
            </button>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />

        {/* SERIES PAGES (Consolidated) */}
        <Route path="/series/enlight" element={<SeriesPage onAddToCart={handleAddToCart} />} />
        <Route path="/series/joyway" element={<SeriesPage onAddToCart={handleAddToCart} />} />
        <Route path="/series/ravi" element={<SeriesPage onAddToCart={handleAddToCart} />} />
        <Route path="/series/:seriesName" element={<SeriesPage onAddToCart={handleAddToCart} />} />

        {/* ENLIGHT CATEGORIES MAPPING */}
        <Route path="/category/enlight-term" element={<SeriesPage onAddToCart={handleAddToCart} initialType="Term" />} />
        <Route path="/category/enlight-semester" element={<SeriesPage onAddToCart={handleAddToCart} initialType="Semester" />} />
        <Route path="/category/enlight-workbook" element={<SeriesPage onAddToCart={handleAddToCart} initialType="Workbook" />} />
        <Route path="/category/enlight-coursebooks" element={<SeriesPage onAddToCart={handleAddToCart} initialType="Coursebook" />} />

        {/* JOYWAY CATEGORIES MAPPING */}
        <Route path="/category/joyway-term" element={<SeriesPage onAddToCart={handleAddToCart} initialType="Term" />} />
        <Route path="/category/joyway-workbook" element={<SeriesPage onAddToCart={handleAddToCart} initialType="Workbook" />} />
        <Route path="/category/joyway-coursebooks" element={<SeriesPage onAddToCart={handleAddToCart} initialType="Coursebook" />} />

        {/* RAVI CATEGORIES MAPPING (Reverted to fallback) */}
        <Route path="/series/ravi" element={<SeriesPage onAddToCart={handleAddToCart} />} />

        {/* STANDARD ROUTES */}
        <Route path="/category/:categoryId" element={<CategoryPage onAddToCart={handleAddToCart} />} />
        <Route path="/book/:bookId" element={<BookDetailPage onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/price-list" element={<PriceListPage />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} cartTotal={cartTotal} />} />
        <Route path="/workbooks" element={<WorkbooksPage onAddToCart={handleAddToCart} />} />
        <Route path="/kits-flash" element={<KitsFlashPage onAddToCart={handleAddToCart} />} />
        <Route path="/languages" element={<LanguagesPage onAddToCart={handleAddToCart} />} />
      </Routes>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }} basename={import.meta.env.BASE_URL}>
      <AppContent />
    </Router>
  );
}

export default App;
