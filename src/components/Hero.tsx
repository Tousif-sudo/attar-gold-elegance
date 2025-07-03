
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden ornament-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold-gradient rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Exquisite</span>
              <br />
              <span className="text-foreground">Attar</span>
              <br />
              <span className="text-secondary">Collection</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Discover the timeless art of traditional perfumery with our premium collection 
              of handcrafted attars, blending ancient wisdom with modern elegance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gold-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-luxury transition-all duration-300 transform hover:scale-105">
                Explore Collection
              </button>
              <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary hover:text-white transition-all duration-300">
                Our Heritage
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Premium Scents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25</div>
                <div className="text-sm text-muted-foreground">Years Heritage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="relative animate-scale-in">
            <div className="relative z-10 flex justify-center">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full p-8 shadow-deep backdrop-blur-sm">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center shadow-luxury">
                  <div className="w-32 h-48 bg-gold-gradient rounded-2xl shadow-deep relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-primary/20 rounded-full"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="text-white font-playfair text-xs font-semibold">ROYAL</div>
                      <div className="text-white/80 text-xs">ATTAR</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
            <div className="absolute bottom-10 right-10 w-6 h-6 bg-secondary rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-32 right-20 w-3 h-3 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
