
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, Menu, X, Crown, Award } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'backdrop-ultra-luxury shadow-luxury-xl' : 'backdrop-luxury shadow-luxury'
    }`}>
      <div className="container mx-auto mobile-padding py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 lg:w-18 lg:h-18 bg-gold-radial-ultra rounded-full flex items-center justify-center shadow-luxury-xl animate-ultra-glow">
                <Star className="w-8 h-8 lg:w-9 lg:h-9 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Crown className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <h1 className="font-playfair text-2xl lg:text-4xl font-bold text-gradient-ultra">
                Royal Attar
              </h1>
              <div className="flex items-center space-x-2">
                <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase font-semibold">
                  Heritage Perfumery
                </p>
                <Award className="w-3 h-3 text-primary" />
                <p className="text-xs text-primary tracking-wider font-bold">
                  Est. 1999
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {['Home', 'Collection', 'Heritage', 'Reviews', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-foreground hover:text-primary transition-all duration-500 font-semibold text-lg xl:text-xl relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gold-gradient-ultra group-hover:w-full transition-all duration-500 rounded-full"></span>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gold-gradient text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-luxury">
                  {item}
                </span>
              </a>
            ))}
          </nav>

          {/* Enhanced Cart & CTA */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            <div className="relative group">
              <div className="w-14 h-14 backdrop-ultra-luxury rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-500 cursor-pointer shadow-luxury">
                <ShoppingCart className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 bg-gold-gradient-ultra rounded-full flex items-center justify-center text-xs text-white font-bold shadow-luxury animate-luxury-pulse">
                0
              </span>
            </div>
            <button className="hidden lg:block btn-premium-ultra text-white px-10 py-4 rounded-full font-bold text-lg xl:text-xl shadow-luxury-xl">
              Shop Collection
            </button>
          </div>

          {/* Enhanced Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-12 h-12 backdrop-ultra-luxury rounded-full flex items-center justify-center shadow-luxury"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden backdrop-luxury-dark border-t-2 border-primary/30 animate-fade-in-up shadow-ultra-premium">
          <nav className="container mx-auto mobile-padding py-8 space-y-8">
            {['Home', 'Collection', 'Heritage', 'Reviews', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="block text-white hover:text-primary transition-colors text-xl font-semibold relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:w-4 transition-all duration-300"></div>
                  <span>{item}</span>
                </div>
              </a>
            ))}
            <button className="w-full btn-premium-ultra text-white py-5 rounded-full font-bold text-xl shadow-luxury-xl">
              Shop Collection
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
