import React, { useState } from 'react';

const CheckoutPage = ({ cart, cartTotal }) => {
    const [formData, setFormData] = useState({
        name: '',
        schoolName: '',
        location: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Constructing Order Summary
        let orderSummary = `NEW ORDER - RAVI PUBLISHERS\n\n`;
        orderSummary += `CUSTOMER DETAILS:\n`;
        orderSummary += `Name: ${formData.name}\n`;
        orderSummary += `School/Entity: ${formData.schoolName}\n`;
        orderSummary += `Location: ${formData.location}\n`;
        orderSummary += `Phone: ${formData.phone}\n`;
        if (formData.email) orderSummary += `Email: ${formData.email}\n`;
        if (formData.message) orderSummary += `Note: ${formData.message}\n\n`;

        orderSummary += `ORDER SUMMARY:\n`;
        cart.forEach((item, index) => {
            orderSummary += `${index + 1}. ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
        });

        orderSummary += `\nTOTAL AMOUNT: ₹${cartTotal}\n\n`;
        orderSummary += `Please confirm this order for the 2026 Academic Year.`;

        // Using Web3Forms API (Free & easy to setup)
        // You can get your Access Key from https://web3forms.com/
        const apiKey = "14b6d58e-228b-4877-ab6a-7af8bd8bb990";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: apiKey,
                    from_name: "RAVI PUBLISHERS - Order System",
                    name: formData.name,
                    email: formData.email, // Web3Forms sends confirmation to THIS email
                    message: orderSummary,
                    subject: `NEW ORDER - ${formData.schoolName}`,
                    // Web3Forms Auto-Response / CC configuration
                    replyto: formData.email,
                    school: formData.schoolName,
                    phone: formData.phone,
                    location: formData.location,
                    total: cartTotal
                })
            });

            const result = await response.json();
            if (result.success) {
                setSubmitStatus('success');
                // Optional: Clear cart or redirect after success
                // localStorage.removeItem('ravibooks_cart');
                // window.location.href = "/order-success";
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setSubmitStatus('error');

            // Fallback to mailto if API fails or is not configured
            const recipientEmail = "rohanwdadadr@gmail.com";
            const subject = `NEW ORDER - RAVI PUBLISHERS - ${formData.schoolName}`;
            const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(orderSummary)}`;
            window.location.href = mailtoUrl;
        } finally {
            setIsSubmitting(false);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="pt-60 text-center h-screen bg-[#f8f9fb]">
                <i className="fas fa-file-invoice text-6xl text-gray-200 mb-8"></i>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-[#231F20]">Your Order Bag is Empty</h2>
                <p className="text-gray-400 mt-4 uppercase font-bold text-xs tracking-widest">Please add some books to proceed with the order.</p>
                <a href="/" className="inline-block mt-10 bg-[#EC1C24] text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest">Back to Library</a>
            </div>
        );
    }

    return (
        <div className="pt-32 md:pt-52 min-h-screen bg-[#f8f9fb] pb-20 md:pb-32">
            {/* Accents */}
            <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-[#EC1C24]/5 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

            {/* Full Screen Success Animation */}
            {submitStatus === 'success' && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 sm:p-0">
                    <div className="absolute inset-0 bg-white shadow-2xl animate-in fade-in duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EC1C24]/5 to-[#01A651]/5"></div>

                    {/* Animated Shapes in Background */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#EC1C24]/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#01A651]/10 rounded-full blur-3xl animate-pulse delay-700"></div>

                    <div className="relative z-10 max-w-lg w-full bg-white rounded-[50px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] p-12 text-center border border-gray-100 animate-pop">
                        <div className="w-32 h-32 bg-[#01A651] rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-[#01A651]/30">
                            <svg className="w-16 h-16 text-white" viewBox="0 0 52 52">
                                <circle className="opacity-0" cx="26" cy="26" r="25" fill="none" />
                                <path className="animate-check" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-black text-[#231F20] uppercase tracking-tighter mb-6 leading-none">
                            Order <br /> <span className="text-[#01A651]">Placed!</span>
                        </h2>

                        <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em] mb-10 leading-relaxed">
                            A confirmation receipt has been sent to <br />
                            <span className="text-[#231F20] border-b border-[#FFF200]">{formData.email}</span>
                        </p>

                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => window.location.href = "/"}
                                className="w-full bg-[#231F20] text-white py-6 rounded-3xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#EC1C24] transition-all shadow-xl active:scale-95"
                            >
                                Back to Library
                            </button>
                            <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest">
                                Transaction ID: RP-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                            </p>
                        </div>
                    </div>

                    {/* Simple Confetti-like Elements */}
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full animate-ping opacity-20"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                backgroundColor: i % 2 === 0 ? '#EC1C24' : '#01A651',
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>
            )}

            <div className="max-w-7xl mx-auto px-6 md:px-20">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Order Details Form */}
                    <div className="flex-1 w-full bg-white rounded-[40px] shadow-2xl border border-gray-100 p-8 md:p-16 text-left relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-[#EC1C24]"></div>
                        <h2 className="text-3xl md:text-5xl font-black text-[#231F20] uppercase tracking-tighter mb-12">Institutional <br /> <span className="text-[#01A651]">Order Form</span></h2>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Name *</label>
                                    <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-[#EC1C24]/10 font-bold text-sm" placeholder="Full Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">School / Institution Name *</label>
                                    <input required name="schoolName" value={formData.schoolName} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-[#EC1C24]/10 font-bold text-sm" placeholder="Authorized Entity Name" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Number (WhatsApp) *</label>
                                    <input required name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-[#EC1C24]/10 font-bold text-sm" placeholder="+91 00000 00000" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Email Address *</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-[#EC1C24]/10 font-bold text-sm" placeholder="email@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Delivery Address *</label>
                                <input required name="location" value={formData.location} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-[#EC1C24]/10 font-bold text-sm" placeholder="City, State, Zip" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Additional Instructions (Optional)</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-[#EC1C24]/10 font-bold text-sm resize-none" placeholder="Any specific requirements regarding logistics or quantity..."></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-6 rounded-3xl font-black text-xs uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-6 group shadow-2xl ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#231F20] hover:bg-[#EC1C24] shadow-[#EC1C24]/20'
                                    } text-white`}
                            >
                                {isSubmitting ? 'PROCESSING ORDER...' : 'SUBMIT TO EMAIL API'}
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <i className="fas fa-envelope text-2xl group-hover:scale-125 transition-transform text-[#FFF200]"></i>
                                )}
                            </button>



                            {submitStatus === 'error' && (
                                <div className="mt-6 p-6 bg-[#EC1C24]/10 border border-[#EC1C24]/20 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-4">
                                    <div className="w-12 h-12 bg-[#EC1C24] rounded-full flex items-center justify-center text-white shrink-0">
                                        <i className="fas fa-exclamation-triangle"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-[#EC1C24] font-black uppercase text-[10px] tracking-widest">Connection Error</h4>
                                        <p className="text-gray-500 text-xs mt-1">Trying to open your email client instead...</p>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Sticky Order Bag Summary */}
                    <div className="w-full lg:w-[400px] bg-[#231F20] rounded-[40px] p-10 text-white lg:sticky lg:top-52 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#EC1C24]/10 rounded-full blur-2xl"></div>
                        <h3 className="text-xl font-black uppercase tracking-tighter mb-8 relative z-10">Order Summary</h3>
                        <div className="space-y-6 mb-10 relative z-10 max-h-[300px] overflow-y-auto pr-4 scrollbar-hide">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between items-start gap-4 pb-4 border-b border-white/5">
                                    <div className="text-left">
                                        <h4 className="text-[10px] font-black uppercase leading-tight">{item.name}</h4>
                                        <span className="text-[9px] text-[#01A651] font-bold">Qty: {item.quantity}</span>
                                    </div>
                                    <span className="text-xs font-black">₹{item.price * item.quantity}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 pt-6 relative z-10">
                            <div className="flex justify-between items-center text-[10px] font-black uppercase text-white/40 tracking-widest">
                                <span>Items</span>
                                <span>{cart.reduce((acc, i) => acc + i.quantity, 0)} Units</span>
                            </div>
                            <div className="flex justify-between items-center text-3xl font-black tracking-tighter">
                                <span>Total</span>
                                <span className="text-[#EC1C24]">₹{cartTotal}</span>
                            </div>
                            <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/5 text-[9px] font-black uppercase tracking-widest text-[#FFF200] leading-relaxed">
                                <i className="fas fa-shield-check mr-2"></i> Official 2026 Academic Year Pricing Applied
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
