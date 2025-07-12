
import React from 'react';
import { Sparkles, Award, Shield, Crown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 ornament-pattern-ultra opacity-40"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold-radial-ultra rounded-full opacity-15 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-luxury-radial rounded-full opacity-20 blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-6xl">
        
        {/* Main Content - Centered Layout */}
        <div className="text-center space-y-8 lg:space-y-12">
          
          {/* Premium Badge */}
          <div className="flex justify-center animate-fade-in-up">
            <div className="premium-border-ultra p-1">
              <div className="premium-border-inner-ultra flex items-center px-4 py-2 lg:px-6 lg:py-3">
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-primary mr-2 animate-luxury-pulse" />
                <span className="text-primary font-semibold tracking-wider uppercase text-xs lg:text-sm">
                  Premium Heritage Collection
                </span>
                <Award className="w-4 h-4 lg:w-5 lg:h-5 text-primary ml-2 animate-luxury-pulse" />
              </div>
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="font-playfair font-bold leading-tight tracking-tight">
              <span className="text-gradient-ultra block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2">
                Royal Attar
              </span>
              <span className="text-foreground text-shadow-ultra block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2">
                Collection
              </span>
              <span className="text-secondary font-cormorant block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Handcrafted Excellence
              </span>
            </h1>
          </div>
          
          {/* Description */}
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed font-light">
              Discover the art of traditional perfumery with our exclusive collection of premium attars. 
              Each bottle represents centuries of craftsmanship and the finest natural ingredients.
            </p>
          </div>

          {/* Attar Bottles Display */}
          <div className="flex justify-center items-center py-8 lg:py-12 animate-scale-in">
            <div className="relative">
              
              {/* Main Attar Bottle */}
              <div className="premium-border-ultra p-2 shadow-ultra-premium">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12 shadow-luxury-xl backdrop-blur-sm relative overflow-hidden">
                  
                  <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[30rem] mx-auto flex items-center justify-center">
                    
                    {/* Premium Attar Bottle Design */}
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-secondary/30 rounded-full blur-2xl animate-luxury-pulse"></div>
                      
                      {/* Bottle SVG Design */}
                      <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-2xl">
                        {/* Bottle Body */}
                        <defs>
                          <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#F7DC6F" stopOpacity="0.9"/>
                            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.7"/>
                            <stop offset="100%" stopColor="#DAA520" stopOpacity="0.9"/>
                          </linearGradient>
                          <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B4513" stopOpacity="0.8"/>
                            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.6"/>
                            <stop offset="100%" stopColor="#B8860B" stopOpacity="0.8"/>
                          </linearGradient>
                        </defs>
                        
                        {/* Main Bottle Shape */}
                        <path d="M60 80 L60 250 Q60 270 80 270 L120 270 Q140 270 140 250 L140 80 Z" 
                              fill="url(#bottleGradient)" 
                              stroke="#DAA520" 
                              strokeWidth="2"/>
                        
                        {/* Liquid Inside */}
                        <path d="M65 85 L65 245 Q65 265 85 265 L115 265 Q135 265 135 245 L135 85 Z" 
                              fill="url(#liquidGradient)"/>
                        
                        {/* Bottle Neck */}
                        <rect x="85" y="60" width="30" height="25" 
                              fill="url(#bottleGradient)" 
                              stroke="#DAA520" 
                              strokeWidth="2"/>
                        
                        {/* Ornate Stopper */}
                        <circle cx="100" cy="50" r="15" 
                                fill="#FFD700" 
                                stroke="#B8860B" 
                                strokeWidth="2"/>
                        <circle cx="100" cy="45" r="8" 
                                fill="#DAA520"/>
                        
                        {/* Decorative Elements */}
                        <circle cx="100" cy="150" r="3" fill="#FFD700" opacity="0.8"/>
                        <circle cx="100" cy="180" r="2" fill="#DAA520" opacity="0.6"/>
                        <circle cx="100" cy="210" r="2.5" fill="#FFD700" opacity="0.7"/>
                        
                        {/* Arabic Pattern */}
                        <path d="M80 120 Q100 110 120 120 Q100 130 80 120" 
                              fill="none" 
                              stroke="#DAA520" 
                              strokeWidth="1.5" 
                              opacity="0.8"/>
                        <path d="M80 160 Q100 150 120 160 Q100 170 80 160" 
                              fill="none" 
                              stroke="#DAA520" 
                              strokeWidth="1.5" 
                              opacity="0.8"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Floating Decoration Elements */}
                  <div className="absolute top-4 left-4 w-4 h-4 bg-primary/60 rounded-full animate-float opacity-70"></div>
                  <div className="absolute bottom-6 right-6 w-6 h-6 bg-secondary/60 rounded-full animate-float-delayed opacity-60"></div>
                  <div className="absolute top-20 right-8 w-3 h-3 bg-primary/50 rounded-full animate-float opacity-50"></div>
                </div>
              </div>
              
              {/* Quality Badge */}
              <div className="absolute -bottom-6 -right-6 premium-border-ultra p-1">
                <div className="premium-border-inner-ultra px-4 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-luxury">
                  <span className="flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Premium Quality
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center animate-fade-in-up">
            <button className="btn-premium-ultra text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-base lg:text-lg shadow-luxury-xl hover:scale-105 transition-all duration-300">
              Explore Collection
            </button>
            <button className="premium-border-ultra group">
              <div className="premium-border-inner-ultra px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-base lg:text-lg text-secondary hover:bg-secondary hover:text-white transition-all duration-500">
                Our Heritage Story
              </div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8 max-w-2xl mx-auto pt-8 animate-fade-in-up">
            <div className="text-center backdrop-ultra-luxury rounded-xl p-6 lg:p-8 shadow-luxury">
              <div className="flex justify-center mb-3">
                <Crown className="w-8 h-8 lg:w-10 lg:h-10 text-primary animate-luxury-pulse" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gradient-ultra mb-2">50+</div>
              <div className="text-sm lg:text-base text-muted-foreground font-medium">Premium Scents</div>
            </div>
            <div className="text-center backdrop-ultra-luxury rounded-xl p-6 lg:p-8 shadow-luxury">
              <div className="flex justify-center mb-3">
                <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-primary animate-luxury-pulse" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gradient-ultra mb-2">25</div>
              <div className="text-sm lg:text-base text-muted-foreground font-medium">Years Heritage</div>
            </div>
            <div className="text-center backdrop-ultra-luxury rounded-xl p-6 lg:p-8 shadow-luxury">
              <div className="flex justify-center mb-3">
                <Award className="w-8 h-8 lg:w-10 lg:h-10 text-primary animate-luxury-pulse" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gradient-ultra mb-2">10K+</div>
              <div className="text-sm lg:text-base text-muted-foreground font-medium">Satisfied Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
