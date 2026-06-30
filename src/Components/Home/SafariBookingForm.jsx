import React, { useState } from 'react';
import { FiUser, FiCalendar, FiCheckCircle, FiArrowRight, FiArrowLeft, FiShield, FiAlertTriangle, FiCheck } from 'react-icons/fi';

export default function SafariBookingForm() {
  const [step, setStep] = useState(1);
  const [safariType, setSafariType] = useState('standard'); 
  const [timeSlot, setTimeSlot] = useState('morning'); 
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false); 

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    guests: '2',
    nationality: 'foreigner',
    hotel: '',
    requests: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateStep2 = () => {
    let step2Errors = {};
    if (!formData.fullName.trim()) step2Errors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) step2Errors.phone = 'WhatsApp number is required';
    if (!formData.email.trim()) step2Errors.email = 'Email address is required';
    
    setErrors(step2Errors);
    return Object.keys(step2Errors).length === 0;
  };

  const validateStep3 = () => {
    let step3Errors = {};
    if (!formData.date) step3Errors.date = 'Please select a date';
    if (safariType === 'vip' && !formData.hotel.trim()) step3Errors.hotel = 'Hotel name is required';

    setErrors(step3Errors);
    return Object.keys(step3Errors).length === 0;
  };

  const nextStep = () => {
    if (step === 2 && !validateStep2()) return;
    
    setErrors({});
    setHasAttemptedSubmit(false);
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setErrors({});
    setHasAttemptedSubmit(false);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasAttemptedSubmit(true); 
    
    if (!validateStep3()) return;
    setIsSubmitted(true);
  };

  return (
    <section className="bg-[#0b0f0b] text-white py-16 px-4 sm:py-24 sm:px-8 lg:px-20 relative">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: TRUST & INFO */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div>
              <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase block mb-3">
                ■ INSTANT GENERATED SLOTS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Book Your <br className="hidden md:block"/>Safari Adventure
              </h2>
              <p className="text-stone-400 text-sm sm:text-base mt-4 font-light leading-relaxed">
                Secure your official Udawalawe national park jeep and verified driver in less than two minutes.
              </p>
            </div>

            <div className="space-y-3.5 pt-4">
              {[
                { title: "No Pre-payment Required", desc: "Pay safely at the park gate directly to the wildlife department." },
                { title: "Free Cancellation Anytime", desc: "Plans changed? Cancel up to 24 hours prior with zero fees." },
                { title: "Wildlife Certified Drivers", desc: "Every driver has 5+ years of tracking experience for maximum spotting." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-[#111611]/30 p-3.5 rounded-xl border border-stone-900">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-[10px] shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-200 tracking-wide uppercase">{item.title}</h4>
                    <p className="text-xs text-stone-400 font-light mt-0.5 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 flex gap-3 text-xs text-stone-400">
              <FiAlertTriangle className="text-amber-500 text-base shrink-0 mt-0.5" />
              <p className="font-light leading-normal">
                Slots fill up fast for the <span className="text-amber-400 font-medium">Morning 6:00 AM</span> duration. Booking now guarantees your park entry permit.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: DYNAMIC COMPACT FORM */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4 max-w-xs mx-auto lg:mx-0">
              <span className="text-[10px] font-bold tracking-widest text-stone-500 uppercase">
                {isSubmitted ? "COMPLETED" : `STEP ${step} OF 3`}
              </span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3].map((num) => (
                  <div 
                    key={num}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      isSubmitted || step > num ? 'w-4 bg-emerald-500' : step === num ? 'w-8 bg-amber-500' : 'w-2 bg-stone-800'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="bg-[#111611]/80 border border-stone-800 p-5 sm:p-7 rounded-2xl backdrop-blur-md shadow-2xl min-h-[350px] flex flex-col justify-center transition-all">
              {isSubmitted ? (
                /* SUCCESS VIEW */
                <div className="text-center py-6 space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl">
                    <FiCheck />
                  </div>
                  <h3 className="text-xl font-bold tracking-wide text-stone-100">Booking Requested Successfully!</h3>
                  <p className="text-stone-400 text-xs max-w-sm mx-auto font-light leading-relaxed">
                    Hi <span className="text-stone-200 font-medium">{formData.fullName}</span>, we've reserved your slot. A WhatsApp confirmation sheet has been generated.
                  </p>
                  <div className="bg-stone-950/60 border border-stone-900 p-4 rounded-xl max-w-md mx-auto text-xs text-left space-y-2 text-stone-400">
                    <div className="flex justify-between border-b border-stone-900/50 pb-1"><span>Package:</span> <span className="text-amber-400 font-medium">{timeSlot.toUpperCase()} ({safariType.toUpperCase()})</span></div>
                    <div className="flex justify-between border-b border-stone-900/50 pb-1"><span>Date:</span> <span className="text-stone-200">{formData.date}</span></div>
                    <div className="flex justify-between border-b border-stone-900/50 pb-1"><span>Guests:</span> <span className="text-stone-200">{formData.guests} Pax ({formData.nationality === 'foreigner' ? 'International' : 'Sri Lankan'})</span></div>
                    {formData.hotel && <div className="flex justify-between border-b border-stone-900/50 pb-1"><span>Pickup Hotel:</span> <span className="text-stone-200 max-w-[200px] truncate text-right">{formData.hotel}</span></div>}
                    {formData.requests && <div className="flex flex-col gap-0.5 pt-1"><span>Special Notes:</span> <span className="text-stone-400 font-light italic">{formData.requests}</span></div>}
                  </div>
                  <p className="text-[11px] text-emerald-400 font-medium pt-2">
                    ⚡ Our dispatcher will text you within 2 hours to share driver details.
                  </p>
                </div>
              ) : (
                /* FORM VIEW */
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* STEP 1: OPTIONS */}
                  {step === 1 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="grid grid-cols-2 gap-2">
                        <div
                          onClick={() => setSafariType('standard')}
                          className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                            safariType === 'standard' ? 'bg-emerald-950/20 border-emerald-500 text-white shadow-lg' : 'bg-stone-900/30 border-stone-800 text-stone-500'
                          }`}
                        >
                          <div className="font-bold text-xs sm:text-sm">Standard</div>
                          <div className="text-[10px] text-emerald-400 mt-0.5">LKR 7,500 / pax</div>
                        </div>
                        <div
                          onClick={() => setSafariType('vip')}
                          className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                            safariType === 'vip' ? 'bg-amber-950/20 border-amber-500 text-white shadow-lg' : 'bg-stone-900/30 border-stone-800 text-stone-500'
                          }`}
                        >
                          <div className="font-bold text-xs sm:text-sm">★ VIP Setup</div>
                          <div className="text-[10px] text-amber-400 mt-0.5">LKR 15,000 / pax</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {[
                          { id: 'morning', label: '🌅 Morning Expedition', time: '6:00 AM - 10:00 AM' },
                          { id: 'evening', label: '🌇 Evening Golden Hour', time: '2:30 PM - 6:30 PM' },
                          { id: 'fullday', label: '☀️ Full Day Wilderness', time: '6:00 AM - 6:00 PM' },
                        ].map((slot) => (
                          <div
                            key={slot.id}
                            onClick={() => setTimeSlot(slot.id)}
                            className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between gap-2 transition-all ${
                              timeSlot === slot.id ? 'bg-stone-900 border-amber-500/80' : 'bg-stone-900/20 border-stone-800/60 hover:border-stone-700'
                            }`}
                          >
                            <div>
                              <div className="font-bold text-xs text-stone-200">{slot.label}</div>
                              <div className="text-[11px] text-stone-400 mt-0.5">{slot.time}</div>
                            </div>
                            <div className="text-right text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                              {safariType === 'standard' ? 'LKR 7,500' : 'LKR 15,000'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 2: DETAILS */}
                  {step === 2 && (
                    <div className="space-y-3 animate-fadeIn">
                      <div>
                        <label className="block text-[11px] font-medium text-stone-400 mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Kamal Perera"
                          className={`w-full bg-stone-900/60 border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-white ${errors.fullName ? 'border-red-500/50' : 'border-stone-800'}`}
                        />
                        {errors.fullName && <p className="text-red-400 text-[10px] mt-1">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-stone-400 mb-1">WhatsApp / Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+94 77 123 4567"
                          className={`w-full bg-stone-900/60 border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-white ${errors.phone ? 'border-red-500/50' : 'border-stone-800'}`}
                        />
                        {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-stone-400 mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="kamal@gmail.com"
                          className={`w-full bg-stone-900/60 border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-white ${errors.email ? 'border-red-500/50' : 'border-stone-800'}`}
                        />
                        {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
                      </div>
                    </div>
                  )}

                  {/* STEP 3: DATES & TOTAL */}
                  {step === 3 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[11px] font-medium text-stone-400 mb-1">Select Date *</label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            /* [color-scheme:dark] දැම්මා browser default invalid styles override වෙන්න */
                            className={`w-full bg-stone-900/60 border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-white [color-scheme:dark] shadow-none outline-none ${(hasAttemptedSubmit && errors.date) ? 'border-red-500/50 bg-red-500/5' : 'border-stone-800'}`}
                          />
                          {hasAttemptedSubmit && errors.date && <p className="text-red-400 text-[10px] mt-1">{errors.date}</p>}
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-stone-400 mb-1">Guests</label>
                          <select 
                            name="guests" 
                            value={formData.guests} 
                            onChange={handleInputChange} 
                            className="w-full bg-stone-900/60 border border-stone-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-white cursor-pointer"
                          >
                            {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-stone-400 mb-1">Nationality</label>
                          <select 
                            name="nationality" 
                            value={formData.nationality} 
                            onChange={handleInputChange} 
                            className="w-full bg-stone-900/60 border border-stone-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-white cursor-pointer"
                          >
                            <option value="foreigner">International</option>
                            <option value="local">Sri Lankan</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-stone-400 mb-1">Hotel Name {safariType === 'vip' && '*'}</label>
                        <input
                          type="text"
                          name="hotel"
                          value={formData.hotel}
                          onChange={handleInputChange}
                          placeholder={safariType === 'vip' ? "Where to pick you up? (Required)" : "Where to pick you up? (Optional)"}
                          className={`w-full bg-stone-900/60 border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-white ${(hasAttemptedSubmit && errors.hotel) ? 'border-red-500/50 bg-red-500/5' : 'border-stone-800'}`}
                        />
                        {hasAttemptedSubmit && errors.hotel && <p className="text-red-400 text-[10px] mt-1">{errors.hotel}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-stone-400 mb-1">Special Requests (Optional)</label>
                        <textarea
                          name="requests"
                          value={formData.requests}
                          onChange={handleInputChange}
                          placeholder="Dietary requirements, children seats, or accessibility instructions..."
                          rows="2"
                          className="w-full bg-stone-900/60 border border-stone-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-white resize-none"
                        />
                      </div>

                      <div className="bg-stone-950/60 rounded-xl p-3 border border-stone-900 text-xs flex justify-between items-center">
                        <div>
                          <span className="text-stone-500 text-[10px] uppercase tracking-wide">Total Amount:</span>
                          <div className="text-base font-bold text-amber-400">
                            LKR {(safariType === 'standard' ? 7500 : 15000) * parseInt(formData.guests || 1)} 
                          </div>
                        </div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg font-medium">
                          <FiShield /> Gate Payment
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 pt-3 border-t border-stone-900 flex items-center justify-between">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-500 hover:text-stone-300 transition-colors cursor-pointer"
                      >
                        <FiArrowLeft /> Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="cursor-pointer inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-md"
                      >
                        Continue <FiArrowRight />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-[11px] uppercase tracking-wider px-6 py-2.5 rounded-full transition-all active:scale-95"
                      >
                        Confirm Booking →
                      </button>
                    )}
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}