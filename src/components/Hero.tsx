
import React from 'react';
import { Sparkles, Award, Shield, Crown, Star, Gem, Diamond } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Ultra Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(27,77,62,0.2),transparent_50%)]"></div>
        <div className="ornament-pattern-ultra opacity-30"></div>
      </div>

      {/* Floating Luxury Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl animate-float opacity-60"></div>
      <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-radial from-secondary/25 via-secondary/10 to-transparent rounded-full blur-2xl animate-float-delayed opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full blur-3xl animate-luxury-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto py-20">
            
            {/* Ultra Premium Badge */}
            <div className="flex justify-center mb-8 animate-fade-in-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-400 to-primary rounded-full blur-lg opacity-60 animate-luxury-pulse"></div>
                <div className="relative premium-border-ultra p-1 shadow-ultra-premium">
                  <div className="premium-border-inner-ultra flex items-center px-8 py-4 backdrop-blur-xl">
                    <Star className="w-6 h-6 text-primary mr-3 animate-luxury-pulse" />
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-lg">Exclusive Royal Collection</span>
                    <Crown className="w-6 h-6 text-primary ml-3 animate-luxury-pulse" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Magnificent Main Heading */}
            <div className="mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.85] tracking-tight mb-6">
                <span className="block text-gradient-ultra text-shadow-ultra">ROYAL</span>
                <span className="block text-white text-shadow-ultra relative">
                  ATTAR
                  <div className="absolute -top-4 -right-8 w-12 h-12 bg-gradient-to-br from-primary to-yellow-400 rounded-full flex items-center justify-center animate-luxury-pulse">
                    <Diamond className="w-6 h-6 text-white" />
                  </div>
                </span>
              </h1>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <Gem className="w-8 h-8 text-primary animate-luxury-pulse" />
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </div>
            </div>

            {/* Luxury Subtitle */}
            <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <p className="font-cormorant text-3xl sm:text-4xl lg:text-5xl text-primary/90 font-light italic mb-4">
                Masterpieces of Traditional Perfumery
              </p>
              <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
                Experience the pinnacle of luxury with our handcrafted collection of premium attars,
                where centuries-old artistry meets contemporary sophistication in every precious drop.
              </p>
            </div>

            {/* Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-400 to-primary opacity-90 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative btn-premium-ultra text-white px-12 py-6 rounded-full font-bold text-xl shadow-ultra-premium hover:scale-110 transition-all duration-500">
                  <span className="flex items-center">
                    <Sparkles className="w-6 h-6 mr-3" />
                    Explore Masterpieces
                    <Crown className="w-6 h-6 ml-3" />
                  </span>
                </div>
              </button>
              
              <button className="group premium-border-ultra hover:scale-105 transition-all duration-500">
                <div className="premium-border-inner-ultra px-12 py-6 rounded-full font-bold text-xl text-white hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 transition-all duration-500 backdrop-blur-xl">
                  <span className="flex items-center">
                    <Award className="w-6 h-6 mr-3" />
                    Our Heritage Story
                  </span>
                </div>
              </button>
            </div>

            {/* Luxury Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              {[
                { icon: Crown, number: '50+', label: 'Premium Fragrances', delay: '0s' },
                { icon: Shield, number: '25', label: 'Years of Heritage', delay: '0.2s' },
                { icon: Star, number: '10K+', label: 'Satisfied Connoisseurs', delay: '0.4s' }
              ].map((stat, index) => (
                <div key={index} className="group" style={{animationDelay: stat.delay}}>
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl p-8 border border-white/20 shadow-ultra-premium hover:scale-105 transition-all duration-500 hover:border-primary/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative z-10 text-center">
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-400 rounded-full flex items-center justify-center shadow-luxury-xl group-hover:scale-110 transition-all duration-500">
                          <stat.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="text-4xl sm:text-5xl font-bold text-gradient-ultra mb-3 group-hover:scale-110 transition-all duration-500">
                        {stat.number}
                      </div>
                      <div className="text-slate-300 font-medium text-lg tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="flex flex-col items-center text-slate-400">
                <div className="w-6 h-10 border-2 border-primary/50 rounded-full mb-4 relative">
                  <div className="w-1 h-3 bg-primary rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-bounce"></div>
                </div>
                <span className="text-sm font-medium tracking-wider uppercase">Discover More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
