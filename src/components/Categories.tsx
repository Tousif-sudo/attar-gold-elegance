
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
    <section id="collection" className="py-16 sm:py-20 lg:py-32 bg-muted/30 ornament-pattern-ultra">
      <div className="container mx-auto mobile-padding">
        <div className="text-center mb-16 lg:mb-24 animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-1 bg-gold-gradient-ultra mr-6"></div>
            <div className="flex items-center space-x-3">
              <Sparkles className="w-6 h-6 text-primary animate-luxury-pulse" />
              <span className="text-primary font-bold tracking-wider uppercase text-lg">Our Collections</span>
              <Award className="w-6 h-6 text-primary animate-luxury-pulse" />
            </div>
            <div className="w-20 h-1 bg-gold-gradient-ultra ml-6"></div>
          </div>
          <h2 className="font-playfair mobile-hero-text font-bold mb-8 text-shadow-ultra">
            Signature <span className="text-gradient-ultra">Collections</span>
          </h2>
          <p className="text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-light">
            Each collection represents decades of expertise, sourcing the finest ingredients 
            from legendary regions to create extraordinary olfactory masterpieces that transcend time 
            and capture the essence of pure luxury.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-3xl lg:rounded-4xl shadow-luxury-xl hover:shadow-ultra-premium transition-all duration-700 transform hover:scale-105 animate-scale-in ${
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
                    <div className="absolute top-6 left-6 bg-gold-gradient-ultra px-4 py-2 rounded-full text-white text-sm font-bold flex items-center space-x-2 shadow-luxury">
                      <Gem className="w-4 h-4" />
                      <span>Premium</span>
                    </div>
                  )}
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gold-gradient-ultra rounded-full flex items-center justify-center shadow-luxury animate-ultra-glow">
                      <category.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    <div className="text-sm lg:text-base text-primary font-bold tracking-wider uppercase backdrop-ultra-luxury px-4 py-2 rounded-full">
                      {category.count}
                    </div>
                  </div>
                  
                  <h3 className="font-playfair text-2xl lg:text-4xl font-bold mb-4 text-shadow-ultra">
                    {category.name}
                  </h3>
                  <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-8 font-light">
                    {category.description}
                  </p>
                  
                  <button className="glass-effect-premium text-white px-8 lg:px-10 py-4 rounded-full text-base lg:text-lg font-bold hover:bg-white hover:text-black transition-all duration-500 shadow-luxury-xl w-full">
                    Explore Collection
                  </button>
                </div>

                {/* Enhanced Premium Decorative Elements */}
                <div className="absolute top-8 right-8 w-16 h-16 border-3 border-white/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-6 h-6 bg-gold-gradient-ultra rounded-full animate-ultra-glow"></div>
                </div>
                
                {/* Enhanced Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>
                
                {/* Corner Accents */}
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-primary/80 rounded-full animate-luxury-pulse"></div>
                <div className="absolute top-20 right-20 w-2 h-2 bg-secondary/70 rounded-full animate-luxury-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
