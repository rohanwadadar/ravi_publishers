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
import ScrollToTop from './components/ScrollToTop';
import { booksData } from './data';

// Home Component
const HomePage = ({ onAddToCart }) => (
  <div className="animate-in fade-in duration-1000">
    <Hero />
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

  const handleAddToCart = (book) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === book.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === book.id ? { ...item, quantity: (item.quantity * 1) + 1 } : item
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });

    // Show notification
    setNotification(`${book.name} added to Order Bag!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = (item.quantity * 1) + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
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
                      <div className="flex items-center bg-gray-100 rounded-lg p-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center hover:bg-white hover:shadow-sm rounded transition-all"><i className="fas fa-minus text-[8px]"></i></button>
                        <span className="w-8 text-center text-xs font-black">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center hover:bg-white hover:shadow-sm rounded transition-all"><i className="fas fa-plus text-[8px]"></i></button>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm font-black text-[#EC1C24]">₹{item.price * item.quantity}</span>
                        <button onClick={() => removeFromCart(item.id)} className="text-[8px] text-gray-300 hover:text-[#EC1C24] font-black uppercase tracking-[0.2em] mt-1">Remove</button>
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
        <Route path="/category/:categoryId" element={<CategoryPage onAddToCart={handleAddToCart} />} />
        <Route path="/book/:bookId" element={<BookDetailPage onAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/price-list" element={<PriceListPage />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} cartTotal={cartTotal} />} />
      </Routes>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
