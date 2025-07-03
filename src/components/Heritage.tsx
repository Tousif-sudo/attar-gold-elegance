
import React from 'react';

const Heritage = () => {
  return (
    <section id="about" className="py-20 bg-luxury-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 ornament-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-primary">Heritage</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              For over two decades, Royal Attar has been synonymous with excellence in 
              traditional perfumery. Our journey began in the ancient souks of Damascus, 
              where master perfumers passed down their sacred knowledge through generations.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ancient Wisdom</h3>
                  <p className="text-white/80">
                    Traditional distillation methods passed down through centuries of master craftsmen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Finest Ingredients</h3>
                  <p className="text-white/80">
                    Sourced from the most prestigious regions: Cambodian oud, Bulgarian rose, Indian sandalwood.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Artisan Craftsmanship</h3>
                  <p className="text-white/80">
                    Each bottle is hand-crafted with meticulous attention to detail and aging process.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300">
                Discover Our Story
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-secondary transition-all duration-300">
                Master Perfumers
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=800&fit=crop"
                alt="Traditional perfumery"
                className="rounded-2xl shadow-deep w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-primary rounded-2xl p-6 shadow-deep">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-white/80 text-sm">Years of Excellence</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-deep">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-muted-foreground text-sm">Unique Blends</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
