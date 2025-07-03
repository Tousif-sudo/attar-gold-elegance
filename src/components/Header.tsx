
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
      <div className="container mx-auto mobile-padding py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Optimized Logo */}
          <div className="flex items-center mobile-gap">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gold-radial-ultra rounded-full flex items-center justify-center shadow-luxury-xl animate-ultra-glow">
                <Star className="mobile-icon-lg text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center">
                <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
            </div>
            <div>
              <h1 className="font-playfair text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gradient-ultra">
                Royal Attar
              </h1>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <p className="mobile-text-xs text-muted-foreground tracking-[0.2em] sm:tracking-[0.3em] uppercase font-semibold">
                  Heritage Perfumery
                </p>
                <Award className="mobile-icon-sm text-primary" />
                <p className="mobile-text-xs text-primary tracking-wider font-bold">
                  Est. 1999
                </p>
              </div>
            </div>
          </div>

          {/* Optimized Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {['Home', 'Collection', 'Heritage', 'Reviews', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-foreground hover:text-primary transition-all duration-500 font-semibold mobile-text-lg relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-gradient-ultra group-hover:w-full transition-all duration-500 rounded-full"></span>
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gold-gradient text-white px-2 py-1 rounded-full mobile-text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-luxury">
                  {item}
                </span>
              </a>
            ))}
          </nav>

          {/* Optimized Cart & CTA */}
          <div className="flex items-center mobile-gap">
            <div className="relative group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 backdrop-ultra-luxury rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-500 cursor-pointer shadow-luxury">
                <ShoppingCart className="mobile-icon text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gold-gradient-ultra rounded-full flex items-center justify-center mobile-text-xs text-white font-bold shadow-luxury animate-luxury-pulse">
                0
              </span>
            </div>
            <button className="hidden lg:block btn-premium-ultra text-white mobile-button-padding rounded-full font-bold mobile-button-text shadow-luxury-xl">
              Shop Collection
            </button>
          </div>

          {/* Optimized Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 backdrop-ultra-luxury rounded-full flex items-center justify-center shadow-luxury"
          >
            {isMenuOpen ? <X className="mobile-icon" /> : <Menu className="mobile-icon" />}
          </button>
        </div>
      </div>

      {/* Optimized Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden backdrop-luxury-dark border-t border-primary/30 animate-fade-in-up shadow-ultra-premium">
          <nav className="container mx-auto mobile-padding mobile-card-padding space-y-6">
            {['Home', 'Collection', 'Heritage', 'Reviews', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="block text-white hover:text-primary transition-colors mobile-text-lg font-semibold relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:w-3 transition-all duration-300"></div>
                  <span>{item}</span>
                </div>
              </a>
            ))}
            <button className="w-full btn-premium-ultra text-white py-4 rounded-full font-bold mobile-text-lg shadow-luxury-xl">
              Shop Collection
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
