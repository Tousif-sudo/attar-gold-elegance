
import React from 'react';
import { Sparkles, Award, Shield, Crown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden ornament-pattern-ultra bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/5 to-secondary/10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 sm:w-96 sm:h-96 lg:w-[30rem] lg:h-[30rem] bg-gold-radial-ultra rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-luxury-radial rounded-full opacity-25 blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center min-h-[80vh]">
          
          {/* Content Section - Left Side */}
          <div className="text-center lg:text-left animate-fade-in-up order-2 lg:order-1 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* Premium Badge */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="premium-border-ultra p-1">
                <div className="premium-border-inner-ultra flex items-center px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary mr-2 animate-luxury-pulse" />
                  <span className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm">Exclusive Heritage Collection</span>
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary ml-2 animate-luxury-pulse" />
                </div>
              </div>
            </div>
            
            {/* Main Heading - Improved Typography */}
            <div className="space-y-2 sm:space-y-4">
              <h1 className="font-playfair font-bold leading-[0.9] tracking-tight">
                <span className="text-gradient-ultra block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-1 sm:mb-2">Exquisite</span>
                <span className="text-foreground text-shadow-ultra block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-1 sm:mb-2">Royal Attar</span>
                <span className="text-secondary font-cormorant block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Masterpieces</span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Experience the pinnacle of traditional perfumery with our exclusive collection 
              of handcrafted attars, where ancient artistry meets contemporary sophistication.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start">
              <button className="btn-premium-ultra text-white px-5 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg shadow-luxury-xl hover:scale-105 transition-all duration-300">
                Explore Masterpieces
              </button>
              <button className="premium-border-ultra group">
                <div className="premium-border-inner-ultra px-5 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg text-secondary hover:bg-secondary hover:text-white transition-all duration-500">
                  Our Royal Legacy
                </div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-md mx-auto lg:mx-0 pt-4 sm:pt-6">
              <div className="text-center backdrop-ultra-luxury rounded-xl p-3 sm:p-4 lg:p-6 shadow-luxury">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary animate-luxury-pulse" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient-ultra mb-1">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Premium Scents</div>
              </div>
              <div className="text-center backdrop-ultra-luxury rounded-xl p-3 sm:p-4 lg:p-6 shadow-luxury">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary animate-luxury-pulse" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient-ultra mb-1">25</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Years Heritage</div>
              </div>
              <div className="text-center backdrop-ultra-luxury rounded-xl p-3 sm:p-4 lg:p-6 shadow-luxury">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary animate-luxury-pulse" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient-ultra mb-1">10K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Connoisseurs</div>
              </div>
            </div>
          </div>

          {/* Attar Bottle Image Section - Right Side */}
          <div className="relative animate-scale-in flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              
              {/* Main Image Container with Premium Frame */}
              <div className="premium-border-ultra p-2 sm:p-3 shadow-ultra-premium">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-6 sm:p-8 lg:p-12 xl:p-16 shadow-luxury-xl backdrop-blur-sm relative overflow-hidden">
                  
                  {/* Premium Attar Bottle */}
                  <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] flex items-center justify-center">
                    
                    {/* Use the uploaded attar bottle image */}
                    <div className="relative w-full h-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] xl:max-w-[380px]">
                      <img 
                        src="/lovable-uploads/0dd57f27-f2b5-4da4-b542-6ceb8b3b6a2d.png" 
                        alt="Premium Royal Attar Bottle"
                        className="w-full h-full object-contain drop-shadow-2xl filter brightness-110 contrast-110 saturate-110"
                      />
                      
                      {/* Luxury Glow Effect around the bottle */}
                      <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-2xl animate-luxury-pulse opacity-60"></div>
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded-full" style={{backgroundSize: '200% 100%'}}></div>
                    </div>
                  </div>
                  
                  {/* Decorative Floating Elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-primary/60 rounded-full animate-float opacity-70"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-secondary/60 rounded-full animate-float-delayed opacity-60"></div>
                  <div className="absolute top-16 right-8 w-2 h-2 sm:w-3 sm:h-3 bg-primary/50 rounded-full animate-float opacity-50"></div>
                  
                  {/* Background Ambient Glow */}
                  <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-secondary/15 rounded-2xl blur-xl animate-luxury-pulse"></div>
                </div>
              </div>
              
              {/* Additional Premium Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 premium-border-ultra p-1">
                <div className="premium-border-inner-ultra px-3 py-2 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs sm:text-sm font-bold shadow-luxury">
                  <span className="flex items-center gap-1 sm:gap-2">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                    Premium Quality
                  </span>
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
