
import React from 'react';
import { Sparkles, Award, Shield, Crown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden ornament-pattern-ultra">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary/10 to-secondary/20"></div>
      <div className="absolute top-20 right-20 w-72 h-72 sm:w-96 sm:h-96 lg:w-[30rem] lg:h-[30rem] bg-gold-radial-ultra rounded-full opacity-25 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-luxury-radial rounded-full opacity-30 blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center min-h-[80vh]">
          {/* Enhanced Content Section */}
          <div className="text-center lg:text-left animate-fade-in-up order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <div className="premium-border-ultra p-1">
                <div className="premium-border-inner-ultra flex items-center px-6 py-3 sm:px-8 sm:py-4">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 animate-luxury-pulse" />
                  <span className="text-primary font-semibold tracking-wider uppercase text-sm sm:text-base">Exclusive Heritage Collection</span>
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary ml-3 animate-luxury-pulse" />
                </div>
              </div>
            </div>
            
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 lg:mb-12 leading-[1.1] tracking-tight">
              <span className="text-gradient-ultra block mb-2">Exquisite</span>
              <span className="text-foreground text-shadow-ultra block mb-2">Royal Attar</span>
              <span className="text-secondary font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl block">Masterpieces</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-10 lg:mb-14 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Experience the pinnacle of traditional perfumery with our exclusive collection 
              of handcrafted attars, where ancient artistry meets contemporary sophistication 
              in every precious drop.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center lg:justify-start mb-12 lg:mb-16">
              <button className="btn-premium-ultra text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg sm:text-xl shadow-luxury-xl hover:scale-105 transition-all duration-300">
                Explore Masterpieces
              </button>
              <button className="premium-border-ultra group">
                <div className="premium-border-inner-ultra px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg sm:text-xl text-secondary hover:bg-secondary hover:text-white transition-all duration-500">
                  Our Royal Legacy
                </div>
              </button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center backdrop-ultra-luxury rounded-2xl p-6 sm:p-8 shadow-luxury">
                <div className="flex justify-center mb-4">
                  <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-luxury-pulse" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gradient-ultra mb-2">50+</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Premium Scents</div>
              </div>
              <div className="text-center backdrop-ultra-luxury rounded-2xl p-6 sm:p-8 shadow-luxury">
                <div className="flex justify-center mb-4">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-luxury-pulse" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gradient-ultra mb-2">25</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Years Heritage</div>
              </div>
              <div className="text-center backdrop-ultra-luxury rounded-2xl p-6 sm:p-8 shadow-luxury">
                <div className="flex justify-center mb-4">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-luxury-pulse" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gradient-ultra mb-2">10K+</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Connoisseurs</div>
              </div>
            </div>
          </div>

          {/* Premium Attar Bottle Showcase */}
          <div className="relative animate-scale-in flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative z-10">
              <div className="premium-border-ultra p-3 sm:p-4 shadow-ultra-premium">
                <div className="bg-gradient-to-br from-primary/50 to-secondary/50 rounded-3xl p-12 sm:p-16 lg:p-20 shadow-luxury-xl backdrop-blur-sm">
                  <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] bg-gold-radial-ultra rounded-full flex items-center justify-center shadow-ultra-premium relative animate-ultra-glow">
                    
                    {/* Realistic Premium Attar Bottle */}
                    <div className="relative">
                      {/* Main Bottle Body */}
                      <div className="w-40 h-64 sm:w-48 sm:h-80 lg:w-56 lg:h-96 bg-gradient-to-b from-amber-400/90 via-amber-500/95 to-amber-600/90 rounded-3xl shadow-ultra-premium relative overflow-hidden backdrop-blur-sm">
                        
                        {/* Bottle Neck */}
                        <div className="absolute -top-8 sm:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 w-12 h-16 sm:w-14 sm:h-20 lg:w-16 lg:h-24 bg-gradient-to-b from-amber-300 to-amber-400 rounded-t-xl shadow-luxury"></div>
                        
                        {/* Crystal Cap */}
                        <div className="absolute -top-16 sm:-top-20 lg:-top-24 left-1/2 transform -translate-x-1/2 w-16 h-12 sm:w-20 sm:h-14 lg:w-24 lg:h-16 bg-gradient-to-b from-white/95 to-gray-100/90 rounded-xl shadow-ultra-premium backdrop-blur-sm border border-white/50">
                          <div className="absolute inset-2 bg-gradient-to-b from-white/80 to-transparent rounded-lg"></div>
                          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-luxury-pulse"></div>
                        </div>
                        
                        {/* Liquid Effect */}
                        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-amber-700/80 via-amber-600/70 to-amber-500/60 rounded-b-3xl">
                          <div className="absolute top-4 left-2 right-2 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-shimmer"></div>
                        </div>
                        
                        {/* Premium Label */}
                        <div className="absolute inset-x-4 bottom-8 sm:bottom-12 lg:bottom-16 text-center">
                          <div className="backdrop-blur-sm bg-white/20 rounded-xl p-4 sm:p-6 shadow-luxury border border-white/30">
                            <div className="text-white font-playfair text-lg sm:text-xl lg:text-2xl font-bold tracking-wider mb-1">ROYAL</div>
                            <div className="text-white/95 text-sm sm:text-base lg:text-lg font-light tracking-widest mb-2">ATTAR</div>
                            <div className="text-white/90 text-xs sm:text-sm tracking-widest mb-3">EST. 1999</div>
                            <div className="w-16 sm:w-20 lg:w-24 h-0.5 bg-white/70 mx-auto mb-2"></div>
                            <div className="text-white/80 text-xs sm:text-sm tracking-wide">HERITAGE</div>
                          </div>
                        </div>
                        
                        {/* Glass Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-3xl"></div>
                        <div className="absolute top-4 left-2 w-1/3 h-2/3 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-2xl"></div>
                        
                        {/* Enhanced Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer rounded-3xl" style={{backgroundSize: '200% 100%'}}></div>
                        
                        {/* Premium Accents */}
                        <div className="absolute top-6 right-4 w-3 h-3 bg-white/90 rounded-full animate-luxury-pulse shadow-luxury"></div>
                        <div className="absolute bottom-6 left-4 w-2 h-2 bg-white/70 rounded-full animate-luxury-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute top-12 left-12 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-primary rounded-full animate-float opacity-80 shadow-luxury"></div>
            <div className="absolute bottom-12 right-12 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-secondary rounded-full animate-float-delayed opacity-70 shadow-luxury"></div>
            <div className="absolute top-32 right-16 w-4 h-4 sm:w-6 sm:h-6 bg-primary/80 rounded-full animate-float opacity-60"></div>
            <div className="absolute bottom-24 left-8 w-5 h-5 sm:w-7 sm:h-7 bg-secondary/80 rounded-full animate-float-delayed opacity-50"></div>
            
            {/* Premium Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-full blur-3xl animate-luxury-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
