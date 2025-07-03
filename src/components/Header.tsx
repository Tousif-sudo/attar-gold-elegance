
import React, { useState } from 'react';
import { ShoppingCart, Star, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-luxury shadow-luxury">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gold-radial rounded-full flex items-center justify-center shadow-luxury animate-premium-glow">
              <Star className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-playfair text-3xl font-bold text-gradient-premium">
                Royal Attar
              </h1>
              <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-medium">
                Heritage Perfumery Est. 1999
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-foreground hover:text-primary transition-all duration-500 font-medium text-lg relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#collection" className="text-foreground hover:text-primary transition-all duration-500 font-medium text-lg relative group">
              Collection
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-all duration-500 font-medium text-lg relative group">
              Heritage
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-all duration-500 font-medium text-lg relative group">
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-all duration-500 font-medium text-lg relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Cart & CTA */}
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <ShoppingCart className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-gold-gradient rounded-full flex items-center justify-center text-xs text-white font-bold shadow-luxury">
                0
              </span>
            </div>
            <button className="hidden md:block btn-premium text-white px-8 py-3 rounded-full font-semibold text-lg shadow-luxury-lg">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-luxury-dark border-t border-white/20 animate-fade-in-up">
          <nav className="container mx-auto px-6 py-6 space-y-6">
            <a href="#home" className="block text-white hover:text-primary transition-colors text-lg font-medium">
              Home
            </a>
            <a href="#collection" className="block text-white hover:text-primary transition-colors text-lg font-medium">
              Collection
            </a>
            <a href="#about" className="block text-white hover:text-primary transition-colors text-lg font-medium">
              Heritage
            </a>
            <a href="#testimonials" className="block text-white hover:text-primary transition-colors text-lg font-medium">
              Reviews
            </a>
            <a href="#contact" className="block text-white hover:text-primary transition-colors text-lg font-medium">
              Contact
            </a>
            <button className="w-full btn-premium text-white py-4 rounded-full font-semibold text-lg shadow-luxury">
              Shop Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
