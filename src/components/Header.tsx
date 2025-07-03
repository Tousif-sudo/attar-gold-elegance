
import React, { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-luxury border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-playfair text-2xl font-bold text-gradient">
                Royal Attar
              </h1>
              <p className="text-xs text-muted-foreground tracking-wider">
                HERITAGE PERFUMERY
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#collection" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Collection
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Heritage
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Reviews
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          {/* Cart & CTA */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-foreground hover:text-primary transition-colors cursor-pointer" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs text-white font-medium">
                0
              </span>
            </div>
            <button className="hidden md:block bg-gold-gradient text-white px-6 py-2 rounded-full font-medium hover:shadow-luxury transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1"
          >
            <span className="w-6 h-0.5 bg-foreground transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-foreground transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-foreground transition-all duration-300"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-luxury border-t border-border/20 animate-fade-in-up">
          <nav className="container mx-auto px-6 py-4 space-y-4">
            <a href="#home" className="block text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#collection" className="block text-foreground hover:text-primary transition-colors">
              Collection
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">
              Heritage
            </a>
            <a href="#testimonials" className="block text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <button className="w-full bg-gold-gradient text-white py-3 rounded-full font-medium">
              Shop Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
