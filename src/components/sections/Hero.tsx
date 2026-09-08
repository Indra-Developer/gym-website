export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* ----------------- DESKTOP HERO ----------------- */}
      <div className="hidden md:flex min-h-[750px] w-full max-w-[1440px] mx-auto relative pt-[90px]">
        
        {/* Full Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="/assets/hero-desktop.png" 
            alt="MR GYM Training Environment" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full flex">
          <div className="w-[55%] pt-20 px-12 xl:px-24 flex flex-col justify-center pb-20">
            
            <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.2em] text-brand-charcoal-muted font-bold">
              <span>Fitness</span>
              <span className="w-px h-3 bg-brand-charcoal/30"></span>
              <span>Discipline</span>
              <span className="w-px h-3 bg-brand-charcoal/30"></span>
              <span>A Stronger Tomorrow</span>
            </div>

            <h1 className="font-display font-bold leading-[0.85] tracking-tighter text-[90px] lg:text-[110px] xl:text-[130px] flex flex-col mb-6">
              <span className="text-brand-charcoal">BUILD YOUR</span>
              <span className="bg-gradient-to-r from-[#C5A059] via-[#E2C792] to-[#A07A30] bg-clip-text text-transparent drop-shadow-sm">
                STRONGEST
              </span>
              <span className="text-brand-charcoal">SELF.</span>
            </h1>

            <p className="text-brand-charcoal-muted font-medium leading-relaxed max-w-md text-sm border-l-[3px] border-brand-border pl-5 mb-10">
              More than a gym. A community that builds stronger bodies, sharper minds and a better you — through consistency, expert guidance and unmatched training facilities.
            </p>

            <div className="flex items-center gap-4 mb-14">
              <button className="bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-all shadow-lg shadow-brand-blue/20">
                Join Now <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button className="border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white px-8 py-4 rounded-xl font-medium transition-all">
                Explore MR GYM
              </button>
            </div>

            {/* Desktop Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-brand-border/60 relative z-20">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-charcoal"><path d="M6.5 6.5h11v11h-11z"/><path d="M2 12h4.5"/><path d="M17.5 12H22"/><path d="M12 2v4.5"/><path d="M12 17.5V22"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-charcoal leading-tight">Professional<br/>Equipment</h4>
                  <p className="text-[10px] text-brand-charcoal-muted mt-1 leading-tight">World-class machines<br/>& training space</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-charcoal"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-charcoal leading-tight">Expert<br/>Training</h4>
                  <p className="text-[10px] text-brand-charcoal-muted mt-1 leading-tight">Certified trainers,<br/>personalized support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-charcoal"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-charcoal leading-tight">Flexible<br/>Memberships</h4>
                  <p className="text-[10px] text-brand-charcoal-muted mt-1 leading-tight">Plans that fit your<br/>goals and lifestyle</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8 opacity-40">
              <span className="w-12 h-[1px] bg-brand-charcoal"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-charcoal">Stronger Together</span>
              <span className="w-12 h-[1px] bg-brand-charcoal"></span>
            </div>
            
          </div>

          {/* Right side floating elements (01 only) */}
          <div className="w-[45%] relative pointer-events-none">
             <div className="absolute bottom-20 left-0">
               <span className="font-display font-bold text-[280px] leading-none text-white mix-blend-overlay opacity-80">01</span>
             </div>
          </div>
        </div>
      </div>

      {/* ----------------- MOBILE HERO ----------------- */}
      <div className="flex flex-col w-full md:hidden bg-white">
        
        {/* Top Block: Just the Image (Takes exactly 55% of screen height) */}
        <div className="relative w-full h-[42vh] min-h-[450px]">
          <img 
            src="/assets/hero-mobile.png" 
            alt="MR GYM Mobile Background" 
            className="w-full h-full object-cover object-top"
          />
          {/* Smooth gradient fade to blend the harsh image edge into the white block below */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>

        {/* Bottom Block: Pure White Background (Natively sits below image) */}
        <div className="relative z-20 flex-1 px-5 pt-4 pb-12 bg-white">
          
          {/* Subtle Oversized Number 01 - Kept inside this white section */}
          <div className="absolute right-0 top-0 z-0 pointer-events-none translate-x-4 -translate-y-8 overflow-hidden">
            <span className="font-display font-bold text-[180px] leading-none text-brand-charcoal opacity-[0.03]">01</span>
          </div>

          {/* Main Text Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 text-[9px] uppercase tracking-[0.2em] text-brand-charcoal-muted font-bold">
              <span>Fitness</span>
              <span className="w-px h-2.5 bg-brand-charcoal/30"></span>
              <span>Discipline</span>
              <span className="w-px h-2.5 bg-brand-charcoal/30"></span>
              <span>A Stronger Tomorrow</span>
            </div>

            <h1 className="font-display font-bold leading-[0.9] tracking-tighter text-[52px] flex flex-col mb-4">
              <span className="text-brand-charcoal">BUILD YOUR</span>
              <span className="bg-gradient-to-r from-[#C5A059] via-[#E2C792] to-[#A07A30] bg-clip-text text-transparent drop-shadow-sm">
                STRONGEST
              </span>
              <span className="text-brand-charcoal">SELF.</span>
            </h1>

            <p className="text-brand-charcoal-muted font-medium leading-relaxed text-[13px] mb-8 pr-4">
              More than a gym. A community that builds stronger bodies, sharper minds and a better you — through consistency, expert guidance and unmatched training facilities.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <button className="w-full bg-brand-blue text-white py-4 font-medium flex items-center justify-center gap-2 rounded-xl shadow-lg shadow-brand-blue/20">
                Join Now <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button className="w-full border-2 border-brand-charcoal text-brand-charcoal py-4 font-medium rounded-xl">
                Explore Membership
              </button>
            </div>

            {/* Mobile Trust Indicators */}
            <div className="pt-6 border-t border-brand-border/60 grid grid-cols-1 gap-5">
              <div className="flex items-center gap-4">
                <div className="text-brand-charcoal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.5 6.5h11v11h-11z"/><path d="M2 12h4.5"/><path d="M17.5 12H22"/><path d="M12 2v4.5"/><path d="M12 17.5V22"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-charcoal">Professional Equipment</h4>
                  <p className="text-[10px] text-brand-charcoal-muted mt-0.5">World-class machines & training space</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-brand-charcoal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-charcoal">Expert Training</h4>
                  <p className="text-[10px] text-brand-charcoal-muted mt-0.5">Certified trainers, personalized support</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-brand-charcoal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-charcoal">Flexible Memberships</h4>
                  <p className="text-[10px] text-brand-charcoal-muted mt-0.5">Plans that fit your goals and lifestyle</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-10 opacity-40">
              <span className="w-12 h-px bg-brand-charcoal"></span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-charcoal">Stronger Together</span>
              <span className="w-12 h-px bg-brand-charcoal"></span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}