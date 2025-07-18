
import React from 'react';
import { Crown, Flower, TreePine, Sparkles, Award, Gem } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: "Oud Royale",
      description: "The crown jewel of fragrances - rich, complex, and eternally captivating with rare Cambodian oud",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=400&fit=crop",
      count: "18 Masterpieces",
      icon: Crown,
      gradient: "from-amber-900 to-yellow-600",
      premium: true
    },
    {
      name: "Floral Symphony",
      description: "A harmonious blend of the world's most precious floral essences from legendary gardens",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=400&fit=crop",
      count: "24 Creations",
      icon: Flower,
      gradient: "from-rose-800 to-pink-600",
      premium: false
    },
    {
      name: "Woody Majesty",
      description: "Noble woods and rare resins crafted into timeless compositions that speak of heritage",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=400&fit=crop",
      count: "15 Essences",
      icon: TreePine,
      gradient: "from-emerald-900 to-teal-600",
      premium: true
    }
  ];

  return (
    <section id="collection" className="mobile-section-padding bg-muted/30 ornament-pattern-ultra">
      <div className="container mx-auto mobile-padding">
        <div className="text-center mb-12 lg:mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6 lg:mb-8">
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gold-gradient-ultra mr-4 sm:mr-6"></div>
            <div className="flex items-center mobile-gap">
              <Sparkles className="mobile-icon text-primary animate-luxury-pulse" />
              <span className="text-primary font-bold tracking-wider uppercase mobile-text-lg">Our Collections</span>
              <Award className="mobile-icon text-primary animate-luxury-pulse" />
            </div>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gold-gradient-ultra ml-4 sm:ml-6"></div>
          </div>
          <h2 className="font-playfair mobile-hero-text font-bold mb-6 lg:mb-8 text-shadow-ultra">
            Signature <span className="text-gradient-ultra">Collections</span>
          </h2>
          <p className="mobile-text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Each collection represents decades of expertise, sourcing the finest ingredients 
            from legendary regions to create extraordinary olfactory masterpieces that transcend time 
            and capture the essence of pure luxury.
          </p>
        </div>

        <div className="grid md:grid-cols-3 mobile-gap-lg">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-luxury-xl hover:shadow-ultra-premium transition-all duration-700 transform hover:scale-105 animate-scale-in ${
                category.premium ? 'premium-border-ultra' : ''
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className={category.premium ? 'premium-border-inner-ultra' : ''}>
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-25 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Premium Badge */}
                  {category.premium && (
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-gold-gradient-ultra mobile-button-padding rounded-full text-white mobile-text-sm font-bold flex items-center space-x-2 shadow-luxury">
                      <Gem className="mobile-icon-sm" />
                      <span>Premium</span>
                    </div>
                  )}
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 mobile-card-padding text-white">
                  <div className="flex items-center mobile-gap mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gold-gradient-ultra rounded-full flex items-center justify-center shadow-luxury animate-ultra-glow">
                      <category.icon className="mobile-icon text-white" />
                    </div>
                    <div className="mobile-text-sm text-primary font-bold tracking-wider uppercase backdrop-ultra-luxury mobile-button-padding rounded-full">
                      {category.count}
                    </div>
                  </div>
                  
                  <h3 className="font-playfair mobile-heading-lg font-bold mb-3 sm:mb-4 text-shadow-ultra">
                    {category.name}
                  </h3>
                  <p className="text-white/95 mobile-text leading-relaxed mb-6 sm:mb-8 font-light">
                    {category.description}
                  </p>
                  
                  <button className="glass-effect-premium text-white mobile-button-padding rounded-full mobile-button-text font-bold hover:bg-white hover:text-black transition-all duration-500 shadow-luxury-xl w-full">
                    Explore Collection
                  </button>
                </div>

                {/* Enhanced Premium Decorative Elements */}
                <div className="absolute top-6 sm:top-8 right-6 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 sm:border-3 border-white/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gold-gradient-ultra rounded-full animate-ultra-glow"></div>
                </div>
                
                {/* Enhanced Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>
                
                {/* Corner Accents */}
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 w-2 h-2 sm:w-3 sm:h-3 bg-primary/80 rounded-full animate-luxury-pulse"></div>
                <div className="absolute top-16 sm:top-20 right-16 sm:right-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary/70 rounded-full animate-luxury-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
