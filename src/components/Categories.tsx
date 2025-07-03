
import React from 'react';
import { Crown, Flower, TreePine } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: "Oud Royale",
      description: "The crown jewel of fragrances - rich, complex, and eternally captivating",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=400&fit=crop",
      count: "18 Masterpieces",
      icon: Crown,
      gradient: "from-amber-900 to-yellow-600"
    },
    {
      name: "Floral Symphony",
      description: "A harmonious blend of the world's most precious floral essences",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=400&fit=crop",
      count: "24 Creations",
      icon: Flower,
      gradient: "from-rose-800 to-pink-600"
    },
    {
      name: "Woody Majesty",
      description: "Noble woods and rare resins crafted into timeless compositions",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=400&fit=crop",
      count: "15 Essences",
      icon: TreePine,
      gradient: "from-emerald-900 to-teal-600"
    }
  ];

  return (
    <section id="collection" className="py-24 bg-muted/20 ornament-pattern-premium">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-gold-gradient mr-4"></div>
            <span className="text-primary font-medium tracking-wider uppercase">Our Collections</span>
            <div className="w-16 h-0.5 bg-gold-gradient ml-4"></div>
          </div>
          <h2 className="font-playfair text-5xl lg:text-7xl font-bold mb-6 text-shadow-premium">
            Signature <span className="text-gradient-premium">Collections</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Each collection represents decades of expertise, sourcing the finest ingredients 
            from legendary regions to create extraordinary olfactory masterpieces that transcend time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-luxury-lg hover:shadow-deep-premium transition-all duration-700 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm text-primary font-semibold tracking-wider uppercase">
                    {category.count}
                  </div>
                </div>
                
                <h3 className="font-playfair text-3xl font-bold mb-3 text-shadow-premium">
                  {category.name}
                </h3>
                <p className="text-white/90 text-base leading-relaxed mb-6 font-light">
                  {category.description}
                </p>
                
                <button className="glass-effect text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all duration-500 shadow-luxury">
                  Explore Collection
                </button>
              </div>

              {/* Premium Decorative Elements */}
              <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-4 h-4 bg-gold-gradient rounded-full animate-premium-glow"></div>
              </div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
