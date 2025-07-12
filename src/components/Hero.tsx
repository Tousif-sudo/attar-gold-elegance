
import React from 'react';
import { Sparkles, Award, Shield, Crown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden ornament-pattern-ultra">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary/10 to-secondary/20"></div>
      <div className="absolute top-20 right-20 w-72 h-72 sm:w-96 sm:h-96 lg:w-[30rem] lg:h-[30rem] bg-gold-radial-ultra rounded-full opacity-25 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-luxury-radial rounded-full opacity-30 blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">
          
          {/* Content Section - Better Aligned */}
          <div className="text-center lg:text-left animate-fade-in-up order-2 lg:order-1 flex flex-col justify-center">
            
            {/* Premium Badge */}
            <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-8">
              <div className="premium-border-ultra p-1">
                <div className="premium-border-inner-ultra flex items-center px-4 py-2 sm:px-6 sm:py-3">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 animate-luxury-pulse" />
                  <span className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm">Exclusive Heritage Collection</span>
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary ml-2 animate-luxury-pulse" />
                </div>
              </div>
            </div>
            
            {/* Main Heading - Better Typography */}
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-[1.1] tracking-tight">
              <span className="text-gradient-ultra block mb-1">Exquisite</span>
              <span className="text-foreground text-shadow-ultra block mb-1">Royal Attar</span>
              <span className="text-secondary font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl block">Masterpieces</span>
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Experience the pinnacle of traditional perfumery with our exclusive collection 
              of handcrafted attars, where ancient artistry meets contemporary sophistication.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-8 lg:mb-12">
              <button className="btn-premium-ultra text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-luxury-xl hover:scale-105 transition-all duration-300">
                Explore Masterpieces
              </button>
              <button className="premium-border-ultra group">
                <div className="premium-border-inner-ultra px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg text-secondary hover:bg-secondary hover:text-white transition-all duration-500">
                  Our Royal Legacy
                </div>
              </button>
            </div>

            {/* Trust Indicators - Better Spacing */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-sm mx-auto lg:mx-0">
              <div className="text-center backdrop-ultra-luxury rounded-xl p-4 sm:p-6 shadow-luxury">
                <div className="flex justify-center mb-3">
                  <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-luxury-pulse" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gradient-ultra mb-1">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Premium Scents</div>
              </div>
              <div className="text-center backdrop-ultra-luxury rounded-xl p-4 sm:p-6 shadow-luxury">
                <div className="flex justify-center mb-3">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-luxury-pulse" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gradient-ultra mb-1">25</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Years Heritage</div>
              </div>
              <div className="text-center backdrop-ultra-luxury rounded-xl p-4 sm:p-6 shadow-luxury">
                <div className="flex justify-center mb-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-luxury-pulse" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gradient-ultra mb-1">10K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Connoisseurs</div>
              </div>
            </div>
          </div>

          {/* Premium Attar Image Section - Completely Redesigned */}
          <div className="relative animate-scale-in flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative z-10 max-w-lg w-full">
              
              {/* Main Image Container */}
              <div className="premium-border-ultra p-2 sm:p-3 shadow-ultra-premium">
                <div className="bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-luxury-xl backdrop-blur-sm relative overflow-hidden">
                  
                  {/* Real Attar Bottle Image */}
                  <div className="relative w-full h-80 sm:h-96 lg:h-[28rem] flex items-center justify-center">
                    
                    {/* HD Attar Bottle - Based on Pinterest Reference */}
                    <div className="relative w-48 h-72 sm:w-56 sm:h-80 lg:w-64 lg:h-96">
                      
                      {/* Main Bottle Body - Crystal Clear with Golden Liquid */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/85 rounded-3xl shadow-ultra-premium backdrop-blur-sm border border-white/50">
                        
                        {/* Golden Attar Liquid */}
                        <div className="absolute bottom-2 left-2 right-2 h-3/4 bg-gradient-to-t from-amber-600/90 via-amber-500/80 to-amber-400/70 rounded-b-3xl">
                          {/* Liquid Surface Reflection */}
                          <div className="absolute top-2 left-2 right-2 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full animate-shimmer"></div>
                          {/* Air Bubbles */}
                          <div className="absolute top-8 right-4 w-2 h-2 bg-white/60 rounded-full animate-luxury-pulse"></div>
                          <div className="absolute top-16 left-6 w-1 h-1 bg-white/50 rounded-full animate-luxury-pulse" style={{animationDelay: '1s'}}></div>
                        </div>
                        
                        {/* Ornate Crystal Stopper */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-16 sm:w-14 sm:h-20">
                          {/* Stopper Base */}
                          <div className="w-full h-8 bg-gradient-to-b from-white to-gray-100 rounded-t-lg shadow-luxury border border-white/70"></div>
                          {/* Crystal Cut Design */}
                          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gradient-to-b from-white/90 to-gray-50/80 border border-white/60" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                          {/* Top Jewel */}
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full shadow-luxury animate-luxury-pulse"></div>
                        </div>
                        
                        {/* Premium Label */}
                        <div className="absolute inset-x-3 bottom-4 text-center">
                          <div className="backdrop-blur-sm bg-gradient-to-b from-white/30 to-white/20 rounded-lg p-3 sm:p-4 shadow-luxury border border-white/40">
                            <div className="text-secondary font-playfair text-sm sm:text-base lg:text-lg font-bold tracking-wider mb-1">ROYAL</div>
                            <div className="text-secondary/90 text-xs sm:text-sm lg:text-base font-light tracking-widest mb-1">ATTAR</div>
                            <div className="w-12 sm:w-16 h-0.5 bg-secondary/70 mx-auto mb-1"></div>
                            <div className="text-secondary/80 text-xs tracking-wide">PREMIUM</div>
                          </div>
                        </div>
                        
                        {/* Glass Reflections and Highlights */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/20 rounded-3xl"></div>
                        <div className="absolute top-4 left-2 w-1/4 h-2/3 bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-2xl"></div>
                        <div className="absolute top-8 right-3 w-2 h-2 bg-white/80 rounded-full shadow-luxury"></div>
                        
                        {/* Luxury Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer rounded-3xl" style={{backgroundSize: '200% 100%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-4 h-4 sm:w-6 sm:h-6 bg-primary/60 rounded-full animate-float opacity-70"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 sm:w-8 sm:h-8 bg-secondary/60 rounded-full animate-float-delayed opacity-60"></div>
                  <div className="absolute top-16 right-8 w-3 h-3 bg-primary/50 rounded-full animate-float opacity-50"></div>
                  
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-secondary/20 rounded-2xl blur-xl animate-luxury-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
