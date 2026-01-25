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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Constructing WhatsApp Message
        const whatsappNumber = "7595921010";
        let message = `*NEW ORDER - RAVI PUBLISHERS*\n\n`;
        message += `*Customer Details:*\n`;
        message += `Name: ${formData.name}\n`;
        message += `School/Entity: ${formData.schoolName}\n`;
        message += `Location: ${formData.location}\n`;
        message += `Phone: ${formData.phone}\n`;
        if (formData.email) message += `Email: ${formData.email}\n`;
        if (formData.message) message += `Note: ${formData.message}\n\n`;

        message += `*Order Summary:*\n`;
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
        });

        message += `\n*Total Amount: ₹${cartTotal}*\n\n`;
        message += `_Please confirm this order for the 2026 Academic Year._`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
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
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Delivery Address *</label>
                                    <input required name="location" value={formData.location} onChange={handleChange} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-[#EC1C24]/10 font-bold text-sm" placeholder="City, State, Zip" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Additional Instructions (Optional)</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-[#EC1C24]/10 font-bold text-sm resize-none" placeholder="Any specific requirements regarding logistics or quantity..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-[#231F20] text-white py-6 rounded-3xl font-black text-xs uppercase tracking-[0.4em] transition-all hover:bg-[#EC1C24] shadow-2xl shadow-[#EC1C24]/20 flex items-center justify-center gap-6 group">
                                SUBMIT TO WHATSAPP
                                <i className="fab fa-whatsapp text-2xl group-hover:scale-125 transition-transform text-[#FFF200]"></i>
                            </button>
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
