"use client";
import ContactUs from "./contactus";

export default function Page() {
  return (
    <div className="relative w-full bg-[#0F1B2D]">
      {/* HERO */}
      <section className="relative w-full border-b border-slate-700/40">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-slate-100 text-4xl md:text-5xl font-libre font-bold tracking-tight">
            Contact Us
          </h1>

          {/* theme accent (use your red) */}
          <div className="mt-3 w-20 h-[2px] bg-red-500/70" />

          <p className="mt-6 max-w-2xl text-slate-300 text-[16px] md:text-[17px] leading-relaxed">
            Whether you are enquiring about our products, services, partnerships, or general
            information, our team is available to assist you.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PHONE */}
          <div className="border border-slate-700/40 bg-[#101C2E] p-8">
            <h3 className="text-slate-100 text-xl font-semibold">Phone</h3>
            <p className="mt-1 text-slate-400 text-sm">
              Monday to Friday, 9:00 AM – 6:00 PM
            </p>

            <div className="mt-6 space-y-2 text-slate-300">
              <p className="tracking-wide">051 616 2000</p>
              <p className="tracking-wide">051 616 4000</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="border border-slate-700/40 bg-[#101C2E] p-8">
            <h3 className="text-slate-100 text-xl font-semibold">Email</h3>
            <p className="mt-1 text-slate-400 text-sm">
              Responses within one business day
            </p>

            <div className="mt-6 space-y-2 text-slate-300">
              <p className="tracking-wide">support@nubiamining.com</p>
              <p className="tracking-wide">info@nubiamining.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="relative w-full border-t border-slate-700/40">
        <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* MAP */}
          <div className="lg:col-span-5 border border-slate-700/40 bg-[#101C2E]">
            <div className="px-6 py-4 border-b border-slate-700/40">
              <h3 className="text-slate-100 font-semibold">Our Location</h3>
              <p className="text-slate-400 text-sm mt-1">Islamabad, Pakistan</p>
            </div>

            <div className="aspect-[4/3] w-full">
              <iframe
                title="Nubia Mining Location"
                className="w-full h-full"
                loading="lazy"
                src="https://www.google.com/maps?q=Islamabad,+Pakistan&output=embed"
              />
            </div>

            <div className="px-6 py-4 border-t border-slate-700/40 text-slate-300 text-sm leading-relaxed">
              House No. 17, Street No. 22, Sector F-6/2, Islamabad, Pakistan
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7 border border-slate-700/40 bg-[#101C2E] p-8">
            <h3 className="text-slate-100 text-2xl font-semibold">
              Send Us a Message
            </h3>
            <p className="mt-2 text-slate-400 text-sm">
              Complete the form below and our team will respond shortly.
            </p>

            <div className="mt-8">
              {/* Match ContactUs inputs to this theme:
                  input/textarea:
                    bg-[#0F1B2D] border-slate-700/40 text-slate-200 placeholder:text-slate-500
                  button:
                    bg-red-500/80 hover:bg-red-500 text-slate-100 font-semibold
              */}
              <ContactUs />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative w-full border-t border-slate-700/40">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="text-slate-100 font-semibold">Nubia Mining</p>
            <p className="mt-3 text-slate-400 leading-relaxed">
              Responsible exploration, development, and trade of precious and strategic metals.
            </p>
          </div>

          <div>
            <p className="text-slate-100 font-semibold">Company</p>
            <div className="mt-3 space-y-2 text-slate-400">
              <p>About Us</p>
              <p>Products</p>
              <p>Services</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <p className="text-slate-100 font-semibold">Address</p>
            <p className="mt-3 text-slate-400 leading-relaxed">
              House No. 17, Street No. 22, Sector F-6/2, Islamabad, Pakistan
            </p>
          </div>

          <div>
            <p className="text-slate-100 font-semibold">Contact</p>
            <div className="mt-3 space-y-2 text-slate-400">
              <p>051 616 2000</p>
              <p>051 616 4000</p>
              <p>support@nubiamining.com</p>
              <p>hr@nubiamining.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/40 py-4 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} Nubia Mining. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
