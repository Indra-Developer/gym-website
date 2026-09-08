import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const navLinks = [
    { name: 'Home', icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></> },
    { name: 'About', icon: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></> },
    { name: 'Membership', icon: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></> },
    { name: 'Facilities', icon: <><path d="M6 4h12v16H6z"/><path d="M10 8h4"/><path d="M10 12h4"/><path d="M10 16h4"/></> },
    { name: 'Trainers', icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></> },
    { name: 'Programs', icon: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></> },
    { name: 'Contact', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></> }
  ];

  return (
    <>
      {/* Desktop Sticky Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-0 bg-white/95 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'} hidden md:block`}>
        <div className="max-w-[1440px] mx-auto px-12 xl:px-24">
          <div className="flex items-center justify-between h-[90px]">
            {/* Logo area */}
            <div className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="MR GYM" className="h-14 w-auto object-contain" />
              <div className="flex flex-col border-l border-brand-border/50 pl-3">
                <span className="font-display font-bold text-[28px] leading-none text-brand-charcoal tracking-tight">MR GYM</span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-brand-charcoal-muted mt-1">Stronger Together</span>
              </div>
            </div>

            {/* Links */}
            <nav className="flex items-center gap-8 ml-8">
              {navLinks.slice(1).map((link) => (
                <a key={link.name} href={`#${link.name.toLowerCase()}`} className="text-sm font-medium text-brand-charcoal hover:text-brand-blue transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="ml-auto">
              <button className="bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-3.5 rounded-full font-medium text-sm transition-colors flex items-center gap-2 shadow-lg shadow-brand-blue/20">
                Join Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Floating Pill Navigation */}
      <header className="fixed top-4 left-4 right-4 z-50 md:hidden bg-white shadow-editorial rounded-2xl h-[70px] flex items-center px-4 justify-between border border-brand-border/50">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="MR GYM" className="h-10 w-auto object-contain" />
          <div className="flex flex-col border-l border-brand-border pl-3">
            <span className="font-display font-bold text-xl leading-none text-brand-charcoal tracking-tight">MR GYM</span>
            <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-brand-charcoal-muted mt-0.5">Stronger Together</span>
          </div>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-10 h-10 border border-brand-border rounded-full flex items-center justify-center bg-brand-light active:bg-brand-surface transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h16M4 6h16M4 18h16"/></svg>
        </button>
      </header>

      {/* Mobile Menu Sheet with Background Image */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col md:hidden animate-in slide-in-from-top-4">
          {/* Header Inside Menu */}
          <div className="flex items-center justify-between px-4 mt-4 mx-4 h-[70px]">
            <div className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="MR GYM" className="h-10 w-auto object-contain" />
              <div className="flex flex-col border-l border-brand-border pl-3">
                <span className="font-display font-bold text-xl leading-none text-brand-charcoal tracking-tight">MR GYM</span>
                <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-brand-charcoal-muted mt-0.5">Stronger Together</span>
              </div>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 border border-brand-border rounded-full flex items-center justify-center bg-brand-light"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          <div className="relative flex-1 flex flex-col overflow-y-auto">
            {/* Faded Background Illustration */}
            <div className="absolute top-0 right-0 bottom-0 w-2/3 pointer-events-none opacity-40">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent z-10"></div>
              <img src="/assets/menu-bg.png" alt="" className="w-full h-full object-cover object-right" />
            </div>

            {/* Nav Links */}
            <nav className="relative z-20 flex flex-col px-8 py-10 gap-6">
              <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right opacity-30 pointer-events-none">
                <span className="font-display font-bold text-sm tracking-widest uppercase flex flex-col gap-1">
                  <span>Discipline</span>
                  <span>Builds</span>
                  <span>Freedom</span>
                </span>
                <div className="w-8 h-px bg-brand-charcoal ml-auto mt-2"></div>
              </div>

              {navLinks.map((link, index) => (
                <a 
                  key={link.name} 
                  href={`#${link.name.toLowerCase()}`}
                  className={`text-lg font-medium flex items-center gap-4 w-fit ${index === 0 ? 'text-brand-blue' : 'text-brand-charcoal'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={`flex items-center justify-center w-5 h-5 ${index === 0 ? 'text-brand-blue' : 'text-brand-charcoal'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{link.icon}</svg>
                  </span>
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* Bottom Actions */}
            <div className="relative z-20 mt-auto px-8 pb-8">
              <button className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20">
                Join Now <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              
              <div className="flex items-center justify-between mt-8 mb-4">
                <div className="flex gap-4">
                  {['f', 'ig', 'yt', 'wa'].map((social) => (
                    <div key={social} className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-xs font-bold text-brand-charcoal">
                      {social}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-charcoal">Follow Us</span>
                  <span className="w-8 h-[2px] bg-brand-charcoal mt-1"></span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4 mt-8 opacity-40">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-charcoal">Stronger Together</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}