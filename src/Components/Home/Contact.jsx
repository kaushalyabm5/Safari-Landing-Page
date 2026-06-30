import React from "react";

export default function Contact() {
  return (
    <div className="bg-[white] text-[#0b2416] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Side: Contact Information */}
        <div className="flex flex-col justify-center">
          <span className="text-[#c18728] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b2416] mb-6 leading-tight">
            Need Help<br />Planning?
          </h2>
          <p className="text-[#0b2416]/80 text-base md:text-lg mb-10 max-w-md leading-relaxed">
            Our team and VIP concierge are available 7 days a week to help plan your perfect safari.
          </p>

          {/* Contact Directory Grid */}
          <div className="space-y-6">
            
            {/* Phone Option */}
            <div className="flex items-start gap-4">
              <div className="text-[#c18728] mt-1">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div>
                <span className="text-[#c18728] text-[11px] font-bold tracking-widest uppercase block mb-0.5">
                  Phone / WhatsApp
                </span>
                <a href="tel:+9477XXXXXXX" className="text-base font-semibold hover:underline">
                  +94 77 XXX XXXX
                </a>
              </div>
            </div>

            {/* Email Option */}
            <div className="flex items-start gap-4">
              <div className="text-[#c18728] mt-1">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <span className="text-[#c18728] text-[11px] font-bold tracking-widest uppercase block mb-0.5">
                  Email
                </span>
                <a href="mailto:bookings@udawalawesafarihub.lk" className="text-base font-semibold hover:underline">
                  bookings@udawalawesafarihub.lk
                </a>
              </div>
            </div>

            {/* Location Option */}
            <div className="flex items-start gap-4">
              <div className="text-[#c18728] mt-1">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <span className="text-[#c18728] text-[11px] font-bold tracking-widest uppercase block mb-0.5">
                  Location
                </span>
                <p className="text-base font-semibold leading-tight">
                  Udawalawe National Park
                </p>
                <p className="text-sm text-[#0b2416]/70">
                  Sabaragamuwa Province, Sri Lanka
                </p>
              </div>
            </div>

            {/* Operating Hours Option */}
            <div className="flex items-start gap-4">
              <div className="text-[#c18728] mt-1">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
              </div>
              <div>
                <span className="text-[#c18728] text-[11px] font-bold tracking-widest uppercase block mb-0.5">
                  Operating Hours
                </span>
                <p className="text-base font-semibold">
                  Daily: 5:00 AM – 7:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Directions & Real Interactive Map */}
        <div className="flex flex-col justify-center">
          <span className="text-[#c18728] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Find Us
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0b2416] mb-4">
            Getting to Udawalawe
          </h3>
          <p className="text-[#0b2416]/80 text-sm md:text-base mb-6 leading-relaxed max-w-xl">
            ~165 km from Colombo (approx. 3.5 hrs by road). VIP guests — we arrange your transfer. Standard guests — we'll advise the best route.
          </p>

          {/* Corrected Fixed Google Maps Frame */}
          <div className="w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden border-2 border-[#0b2416] shadow-2xl relative bg-[#091f13]">
            <iframe
              title="Udawalawe National Park Map"
              src="https://maps.google.com/maps?q=Udawalawe%20National%20Park,%20Sri%20Lanka&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute top-0 left-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}