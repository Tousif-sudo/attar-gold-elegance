
import React from 'react';
import { Sparkles, Award, Shield, Crown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden ornament-pattern-ultra">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-primary/8 to-secondary/15"></div>
      <div className="absolute top-16 right-16 w-96 h-96 bg-gold-radial-ultra rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-16 left-16 w-80 h-80 bg-luxury-radial rounded-full opacity-25 blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/3 left-1/5 w-40 h-40 bg-primary/25 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float-delayed"></div>

      <div className="container mx-auto mobile-padding mobile-hero-spacing relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Enhanced Content */}
          <div className="mobile-text-center lg:text-left animate-fade-in-up">
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <div className="premium-border-ultra p-1">
                <div className="premium-border-inner-ultra flex items-center px-6 py-3">
                  <Sparkles className="w-5 h-5 text-primary mr-3 animate-luxury-pulse" />
                  <span className="text-primary font-semibold tracking-wider uppercase text-sm">Exclusive Heritage Collection</span>
                  <Award className="w-5 h-5 text-primary ml-3 animate-luxury-pulse" />
                </div>
              </div>
            </div>
            
            <h1 className="font-playfair mobile-hero-text font-bold mb-10 leading-tight">
              <span className="text-gradient-ultra">Exquisite</span>
              <br />
              <span className="text-foreground text-shadow-ultra">Royal Attar</span>
              <br />
              <span className="text-secondary font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Masterpieces</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground mb-12 leading-relaxed max-w-3xl font-light">
              Experience the pinnacle of traditional perfumery with our exclusive collection 
              of handcrafted attars, where ancient artistry meets contemporary sophistication 
              in every precious drop.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
              <button className="btn-premium-ultra text-white px-12 py-6 rounded-full font-bold text-xl xl:text-2xl shadow-luxury-xl">
                Explore Masterpieces
              </button>
              <button className="premium-border-ultra group">
                <div className="premium-border-inner-ultra px-12 py-6 rounded-full font-bold text-xl xl:text-2xl text-secondary hover:bg-secondary hover:text-white transition-all duration-500">
                  Our Royal Legacy
                </div>
              </button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="text-center backdrop-ultra-luxury rounded-2xl p-6 shadow-luxury">
                <div className="flex justify-center mb-3">
                  <Crown className="w-8 h-8 text-primary animate-luxury-pulse" />
                </div>
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gradient-ultra mb-2">50+</div>
                <div className="text-sm text-muted-foreground font-medium">Premium Scents</div>
              </div>
              <div className="text-center backdrop-ultra-luxury rounded-2xl p-6 shadow-luxury">
                <div className="flex justify-center mb-3">
                  <Shield className="w-8 h-8 text-primary animate-luxury-pulse" />
                </div>
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gradient-ultra mb-2">25</div>
                <div className="text-sm text-muted-foreground font-medium">Years Heritage</div>
              </div>
              <div className="text-center backdrop-ultra-luxury rounded-2xl p-6 shadow-luxury">
                <div className="flex justify-center mb-3">
                  <Award className="w-8 h-8 text-primary animate-luxury-pulse" />
                </div>
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gradient-ultra mb-2">10K+</div>
                <div className="text-sm text-muted-foreground font-medium">Connoisseurs</div>
              </div>
            </div>
          </div>

          {/* Enhanced Premium Product Showcase */}
          <div className="relative animate-scale-in">
            <div className="relative z-10 flex justify-center">
              <div className="premium-border-ultra p-3 shadow-ultra-premium">
                <div className="bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full p-16 shadow-luxury-xl backdrop-blur-sm">
                  <div className="w-80 h-80 sm:w-96 sm:h-96 bg-gold-radial-ultra rounded-full flex items-center justify-center shadow-ultra-premium relative animate-ultra-glow">
                    {/* Enhanced Attar Bottle */}
                    <div className="w-48 h-72 sm:w-56 sm:h-80 bg-gold-gradient-ultra rounded-3xl shadow-ultra-premium relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent"></div>
                      
                      {/* Bottle Details */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-primary/40 rounded-full backdrop-blur-sm"></div>
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-gold-gradient rounded-full"></div>
                      
                      {/* Premium Label */}
                      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                        <div className="text-white font-playfair text-lg font-bold tracking-wider mb-1">ROYAL</div>
                        <div className="text-white/95 text-sm font-light tracking-widest mb-2">ATTAR</div>
                        <div className="text-white/90 text-xs tracking-widest mb-3">EST. 1999</div>
                        <div className="w-16 h-0.5 bg-white/70 mx-auto"></div>
                        <div className="text-white/80 text-xs mt-2 tracking-wide">HERITAGE</div>
                      </div>
                      
                      {/* Enhanced Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>
                      
                      {/* Premium Accents */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-luxury-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/80 rounded-full animate-luxury-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Decorative Elements */}
            <div className="absolute top-12 left-12 w-8 h-8 bg-primary rounded-full animate-float opacity-90 shadow-luxury"></div>
            <div className="absolute bottom-12 right-12 w-10 h-10 bg-secondary rounded-full animate-float-delayed opacity-80 shadow-luxury"></div>
            <div className="absolute top-32 right-16 w-6 h-6 bg-primary rounded-full animate-float opacity-70 shadow-luxury"></div>
            <div className="absolute bottom-24 left-8 w-7 h-7 bg-secondary rounded-full animate-float-delayed opacity-60 shadow-luxury"></div>
            <div className="absolute top-48 left-24 w-4 h-4 bg-primary/80 rounded-full animate-float opacity-50"></div>
            <div className="absolute bottom-40 right-8 w-5 h-5 bg-secondary/80 rounded-full animate-float-delayed opacity-40"></div>
            
            {/* Enhanced Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-secondary/15 rounded-full blur-3xl animate-luxury-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-radial opacity-10 rounded-full blur-2xl animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
