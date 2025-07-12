
import React from 'react';
import { Sparkles, Award, Shield, Crown, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 ornament-pattern-ultra opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-radial-ultra rounded-full opacity-15 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-luxury-radial rounded-full opacity-20 blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-6xl">
        {/* Centered Hero Content */}
        <div className="text-center space-y-8 mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center premium-border-ultra p-1 shadow-luxury">
            <div className="premium-border-inner-ultra flex items-center px-6 py-3 bg-white/95">
              <Crown className="w-5 h-5 text-primary mr-3 animate-luxury-pulse" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Royal Heritage Collection</span>
              <Sparkles className="w-5 h-5 text-primary ml-3 animate-luxury-pulse" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-playfair font-bold text-gradient-ultra text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Premium Royal Attar
            </h1>
            <h2 className="font-cormorant text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              Timeless Fragrance Excellence
            </h2>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
            Discover the art of traditional perfumery with our handcrafted attars, 
            where ancient wisdom meets modern sophistication.
          </p>
        </div>

        {/* Attar Bottle Showcase */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            {/* Main Bottle Container */}
            <div className="premium-border-ultra p-4 shadow-ultra-premium">
              <div className="bg-gradient-to-br from-white/95 to-muted/50 rounded-3xl p-8 lg:p-12 backdrop-blur-sm relative overflow-hidden">
                
                {/* Attar Bottle */}
                <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[28rem] lg:h-[32rem] flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/0dd57f27-f2b5-4da4-b542-6ceb8b3b6a2d.png" 
                    alt="Premium Royal Attar Collection"
                    className="w-full h-full object-contain drop-shadow-2xl filter brightness-110 contrast-110 saturate-110 hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Luxury Glow Effects */}
                  <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-luxury-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer rounded-full opacity-60"></div>
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute top-8 left-8 w-4 h-4 bg-primary/60 rounded-full animate-float"></div>
                <div className="absolute bottom-8 right-8 w-6 h-6 bg-secondary/60 rounded-full animate-float-delayed"></div>
                <div className="absolute top-20 right-12 w-3 h-3 bg-primary/40 rounded-full animate-float"></div>
                <div className="absolute bottom-20 left-12 w-5 h-5 bg-secondary/40 rounded-full animate-float-delayed"></div>
              </div>
            </div>

            {/* Premium Quality Badge */}
            <div className="absolute -bottom-4 -right-4 premium-border-ultra p-1">
              <div className="premium-border-inner-ultra px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm rounded-full shadow-luxury flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="btn-premium-ultra text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-lg shadow-luxury-xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
            <Sparkles className="w-5 h-5" />
            Explore Collection
          </button>
          <button className="premium-border-ultra group">
            <div className="premium-border-inner-ultra px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-lg text-secondary hover:bg-secondary hover:text-white transition-all duration-500 flex items-center gap-3">
              <Crown className="w-5 h-5" />
              Our Heritage
            </div>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center backdrop-ultra-luxury rounded-2xl p-6 lg:p-8 shadow-luxury">
            <div className="flex justify-center mb-4">
              <Crown className="w-8 h-8 lg:w-10 lg:h-10 text-primary animate-luxury-pulse" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-gradient-ultra mb-2 font-playfair">50+</div>
            <div className="text-muted-foreground font-medium text-lg">Premium Scents</div>
          </div>
          
          <div className="text-center backdrop-ultra-luxury rounded-2xl p-6 lg:p-8 shadow-luxury">
            <div className="flex justify-center mb-4">
              <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-primary animate-luxury-pulse" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-gradient-ultra mb-2 font-playfair">25</div>
            <div className="text-muted-foreground font-medium text-lg">Years Heritage</div>
          </div>
          
          <div className="text-center backdrop-ultra-luxury rounded-2xl p-6 lg:p-8 shadow-luxury">
            <div className="flex justify-center mb-4">
              <Award className="w-8 h-8 lg:w-10 lg:h-10 text-primary animate-luxury-pulse" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-gradient-ultra mb-2 font-playfair">10K+</div>
            <div className="text-muted-foreground font-medium text-lg">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
