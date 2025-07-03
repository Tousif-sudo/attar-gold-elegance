
import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden ornament-pattern-premium">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/5 to-secondary/10"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-gold-radial rounded-full opacity-15 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-luxury-radial rounded-full opacity-20 blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Sparkles className="w-6 h-6 text-primary mr-3" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Premium Collection</span>
            </div>
            
            <h1 className="font-playfair text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-gradient-premium">Exquisite</span>
              <br />
              <span className="text-foreground text-shadow-premium">Attar</span>
              <br />
              <span className="text-secondary font-cormorant text-5xl lg:text-6xl">Masterpieces</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-light">
              Experience the pinnacle of traditional perfumery with our exclusive collection 
              of handcrafted attars, where ancient artistry meets contemporary sophistication.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <button className="btn-premium text-white px-10 py-5 rounded-full font-semibold text-xl shadow-luxury-lg">
                Explore Masterpieces
              </button>
              <button className="premium-border group">
                <div className="premium-border-inner px-10 py-5 rounded-full font-semibold text-xl text-secondary hover:bg-secondary hover:text-white transition-all duration-300">
                  Our Legacy
                </div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient-premium mb-2">50+</div>
                <div className="text-sm text-muted-foreground font-medium">Premium Scents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient-premium mb-2">25</div>
                <div className="text-sm text-muted-foreground font-medium">Years Heritage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient-premium mb-2">10K+</div>
                <div className="text-sm text-muted-foreground font-medium">Connoisseurs</div>
              </div>
            </div>
          </div>

          {/* Premium Product Showcase */}
          <div className="relative animate-scale-in">
            <div className="relative z-10 flex justify-center">
              <div className="premium-border p-2 shadow-deep-premium">
                <div className="bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full p-12 shadow-luxury-lg backdrop-blur-sm">
                  <div className="w-80 h-80 bg-gold-radial rounded-full flex items-center justify-center shadow-deep-premium relative animate-premium-glow">
                    {/* Attar Bottle */}
                    <div className="w-40 h-60 bg-gold-gradient rounded-3xl shadow-deep-premium relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent"></div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-primary/30 rounded-full"></div>
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                        <div className="text-white font-playfair text-sm font-bold tracking-wider">ROYAL</div>
                        <div className="text-white/90 text-xs font-light tracking-widest">ATTAR</div>
                        <div className="w-12 h-0.5 bg-white/60 mx-auto mt-2"></div>
                      </div>
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute top-16 left-16 w-6 h-6 bg-primary rounded-full animate-float opacity-80"></div>
            <div className="absolute bottom-16 right-16 w-8 h-8 bg-secondary rounded-full animate-float-delayed opacity-70"></div>
            <div className="absolute top-40 right-24 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
            <div className="absolute bottom-32 left-8 w-5 h-5 bg-secondary rounded-full animate-float-delayed opacity-50"></div>
            
            {/* Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
