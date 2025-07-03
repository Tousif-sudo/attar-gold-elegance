
import React from 'react';
import { Sparkles, Award, Shield, Crown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden ornament-pattern-ultra">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-primary/8 to-secondary/15"></div>
      <div className="absolute top-16 right-16 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gold-radial-ultra rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-16 left-16 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-luxury-radial rounded-full opacity-25 blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/3 left-1/5 w-32 h-32 sm:w-40 sm:h-40 bg-primary/25 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-secondary/20 rounded-full blur-xl animate-float-delayed"></div>

      <div className="container mx-auto mobile-padding mobile-section-padding relative z-10">
        <div className="grid lg:grid-cols-2 mobile-gap-lg items-center">
          {/* Optimized Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-8">
              <div className="premium-border-ultra p-1">
                <div className="premium-border-inner-ultra flex items-center mobile-button-padding">
                  <Sparkles className="mobile-icon text-primary mr-2 sm:mr-3 animate-luxury-pulse" />
                  <span className="text-primary font-semibold tracking-wider uppercase mobile-text-sm">Exclusive Heritage Collection</span>
                  <Award className="mobile-icon text-primary ml-2 sm:ml-3 animate-luxury-pulse" />
                </div>
              </div>
            </div>
            
            <h1 className="font-playfair mobile-hero-text font-bold mb-6 lg:mb-10 leading-tight">
              <span className="text-gradient-ultra">Exquisite</span>
              <br />
              <span className="text-foreground text-shadow-ultra">Royal Attar</span>
              <br />
              <span className="text-secondary font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Masterpieces</span>
            </h1>
            
            <p className="mobile-text-lg text-muted-foreground mb-8 lg:mb-12 leading-relaxed max-w-3xl font-light">
              Experience the pinnacle of traditional perfumery with our exclusive collection 
              of handcrafted attars, where ancient artistry meets contemporary sophistication 
              in every precious drop.
            </p>

            <div className="flex flex-col sm:flex-row mobile-gap justify-center lg:justify-start mb-10 lg:mb-16">
              <button className="btn-premium-ultra text-white mobile-button-padding rounded-full font-bold mobile-button-text shadow-luxury-xl">
                Explore Masterpieces
              </button>
              <button className="premium-border-ultra group">
                <div className="premium-border-inner-ultra mobile-button-padding rounded-full font-bold mobile-button-text text-secondary hover:bg-secondary hover:text-white transition-all duration-500">
                  Our Royal Legacy
                </div>
              </button>
            </div>

            {/* Optimized Trust Indicators */}
            <div className="grid grid-cols-3 mobile-gap max-w-lg mx-auto lg:mx-0">
              <div className="text-center backdrop-ultra-luxury rounded-xl sm:rounded-2xl mobile-card-padding shadow-luxury">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <Crown className="mobile-icon-lg text-primary animate-luxury-pulse" />
                </div>
                <div className="mobile-heading-sm font-bold text-gradient-ultra mb-1 sm:mb-2">50+</div>
                <div className="mobile-text-xs text-muted-foreground font-medium">Premium Scents</div>
              </div>
              <div className="text-center backdrop-ultra-luxury rounded-xl sm:rounded-2xl mobile-card-padding shadow-luxury">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <Shield className="mobile-icon-lg text-primary animate-luxury-pulse" />
                </div>
                <div className="mobile-heading-sm font-bold text-gradient-ultra mb-1 sm:mb-2">25</div>
                <div className="mobile-text-xs text-muted-foreground font-medium">Years Heritage</div>
              </div>
              <div className="text-center backdrop-ultra-luxury rounded-xl sm:rounded-2xl mobile-card-padding shadow-luxury">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <Award className="mobile-icon-lg text-primary animate-luxury-pulse" />
                </div>
                <div className="mobile-heading-sm font-bold text-gradient-ultra mb-1 sm:mb-2">10K+</div>
                <div className="mobile-text-xs text-muted-foreground font-medium">Connoisseurs</div>
              </div>
            </div>
          </div>

          {/* Optimized Premium Product Showcase */}
          <div className="relative animate-scale-in">
            <div className="relative z-10 flex justify-center">
              <div className="premium-border-ultra p-2 sm:p-3 shadow-ultra-premium">
                <div className="bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full p-8 sm:p-12 lg:p-16 shadow-luxury-xl backdrop-blur-sm">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gold-radial-ultra rounded-full flex items-center justify-center shadow-ultra-premium relative animate-ultra-glow">
                    {/* Optimized Attar Bottle */}
                    <div className="w-32 h-48 sm:w-40 sm:h-60 lg:w-48 lg:h-72 bg-gold-gradient-ultra rounded-2xl sm:rounded-3xl shadow-ultra-premium relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent"></div>
                      
                      {/* Bottle Details */}
                      <div className="absolute top-4 sm:top-6 lg:top-8 left-1/2 transform -translate-x-1/2 w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-32 bg-primary/40 rounded-full backdrop-blur-sm"></div>
                      <div className="absolute top-6 sm:top-8 lg:top-12 left-1/2 transform -translate-x-1/2 w-12 h-16 sm:w-14 sm:h-18 lg:w-16 lg:h-24 bg-gold-gradient rounded-full"></div>
                      
                      {/* Premium Label */}
                      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                        <div className="text-white font-playfair mobile-text-sm font-bold tracking-wider mb-1">ROYAL</div>
                        <div className="text-white/95 mobile-text-xs font-light tracking-widest mb-1 sm:mb-2">ATTAR</div>
                        <div className="text-white/90 text-[10px] sm:text-xs tracking-widest mb-2 sm:mb-3">EST. 1999</div>
                        <div className="w-12 sm:w-14 lg:w-16 h-0.5 bg-white/70 mx-auto"></div>
                        <div className="text-white/80 text-[10px] sm:text-xs mt-1 sm:mt-2 tracking-wide">HERITAGE</div>
                      </div>
                      
                      {/* Enhanced Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>
                      
                      {/* Premium Accents */}
                      <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-white rounded-full animate-luxury-pulse"></div>
                      <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/80 rounded-full animate-luxury-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Optimized Floating Decorative Elements */}
            <div className="absolute top-6 sm:top-8 lg:top-12 left-6 sm:left-8 lg:left-12 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-primary rounded-full animate-float opacity-90 shadow-luxury"></div>
            <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 right-6 sm:right-8 lg:right-12 w-5 h-5 sm:w-7 sm:h-7 lg:w-10 lg:h-10 bg-secondary rounded-full animate-float-delayed opacity-80 shadow-luxury"></div>
            <div className="absolute top-20 sm:top-24 lg:top-32 right-8 sm:right-12 lg:right-16 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-primary rounded-full animate-float opacity-70 shadow-luxury"></div>
            <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-4 sm:left-6 lg:left-8 w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 bg-secondary rounded-full animate-float-delayed opacity-60 shadow-luxury"></div>
            <div className="absolute top-32 sm:top-40 lg:top-48 left-12 sm:left-16 lg:left-24 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-primary/80 rounded-full animate-float opacity-50"></div>
            <div className="absolute bottom-28 sm:bottom-32 lg:bottom-40 right-4 sm:right-6 lg:right-8 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-secondary/80 rounded-full animate-float-delayed opacity-40"></div>
            
            {/* Enhanced Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-secondary/15 rounded-full blur-3xl animate-luxury-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gold-radial opacity-10 rounded-full blur-2xl animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
