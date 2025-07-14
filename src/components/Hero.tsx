
import React from 'react';
import { Sparkles, Award, Shield, Crown, Star, Gem } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(27,77,62,0.15),transparent_50%)]"></div>
        <div className="ornament-pattern opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-2xl animate-float opacity-40"></div>
      <div className="absolute bottom-32 left-20 w-56 h-56 bg-gradient-radial from-secondary/15 via-secondary/5 to-transparent rounded-full blur-xl animate-float-delayed opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-5xl mx-auto py-16">
            
            {/* Premium Badge */}
            <div className="flex justify-center mb-6 animate-fade-in-up">
              <div className="premium-border p-1 shadow-luxury">
                <div className="premium-border-inner flex items-center px-6 py-3 backdrop-blur-lg">
                  <Star className="w-5 h-5 text-primary mr-2" />
                  <span className="text-primary font-semibold tracking-widest uppercase text-sm">Premium Collection</span>
                  <Crown className="w-5 h-5 text-primary ml-2" />
                </div>
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight mb-4">
                <span className="block text-gradient mb-2">ROYAL</span>
                <span className="block text-white relative">
                  ATTAR
                  <div className="absolute -top-2 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-yellow-400 rounded-full flex items-center justify-center">
                    <Gem className="w-4 h-4 text-white" />
                  </div>
                </span>
              </h1>
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <Star className="w-6 h-6 text-primary" />
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </div>
            </div>

            {/* Subtitle */}
            <div className="mb-10 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <p className="font-cormorant text-2xl sm:text-3xl lg:text-4xl text-primary/90 font-light italic mb-3">
                Exquisite Traditional Perfumery
              </p>
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                Discover our handcrafted collection of premium attars, where ancient artistry 
                meets modern elegance in every precious bottle.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-400 to-primary opacity-80 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
                <div className="relative btn-premium text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-luxury hover:scale-105 transition-all duration-300">
                  <span className="flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Explore Collection
                  </span>
                </div>
              </button>
              
              <button className="group premium-border hover:scale-105 transition-all duration-300">
                <div className="premium-border-inner px-8 py-4 rounded-lg font-semibold text-lg text-white hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 backdrop-blur-lg">
                  <span className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Our Story
                  </span>
                </div>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              {[
                { icon: Crown, number: '50+', label: 'Premium Fragrances' },
                { icon: Shield, number: '25', label: 'Years Heritage' },
                { icon: Star, number: '10K+', label: 'Happy Customers' }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="backdrop-blur-lg bg-gradient-to-br from-white/5 via-white/3 to-transparent rounded-xl p-6 border border-white/10 shadow-luxury hover:scale-105 transition-all duration-300 hover:border-primary/30">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-400 rounded-full flex items-center justify-center shadow-luxury group-hover:scale-110 transition-all duration-300">
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-all duration-300">
                        {stat.number}
                      </div>
                      <div className="text-slate-300 font-medium tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="flex flex-col items-center text-slate-400">
                <div className="w-5 h-8 border border-primary/40 rounded-full mb-2 relative">
                  <div className="w-0.5 h-2 bg-primary rounded-full absolute left-1/2 top-1.5 transform -translate-x-1/2 animate-bounce"></div>
                </div>
                <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
