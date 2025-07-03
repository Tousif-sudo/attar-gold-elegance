
import React from 'react';
import { Star, Award, Gem, Sparkles } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      name: "Royal Oud Majesty",
      price: "$299",
      originalPrice: "$399",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=350&h=450&fit=crop",
      badge: "Bestseller",
      badgeIcon: Award,
      description: "A legendary blend of Cambodian oud with Bulgarian rose and precious saffron threads",
      premium: true
    },
    {
      name: "Jasmine Mystique",
      price: "$179",
      originalPrice: "$229",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=350&h=450&fit=crop",
      badge: "Limited",
      badgeIcon: Gem,
      description: "Rare night-blooming jasmine with Madagascar vanilla and white musk",
      premium: false
    },
    {
      name: "Sandalwood Serenity",
      price: "$149",
      originalPrice: "$199",
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=350&h=450&fit=crop",
      badge: "New",
      badgeIcon: Sparkles,
      description: "Pure Mysore sandalwood with delicate rose petals and amber undertones",
      premium: false
    },
    {
      name: "Amber Royale",
      price: "$219",
      originalPrice: "$279",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=350&h=450&fit=crop",
      badge: "Premium",
      badgeIcon: Award,
      description: "Ancient amber resin with oriental spices and precious agarwood",
      premium: true
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-gold-gradient mr-4"></div>
            <span className="text-primary font-medium tracking-wider uppercase">Featured Collection</span>
            <div className="w-16 h-0.5 bg-gold-gradient ml-4"></div>
          </div>
          <h2 className="font-playfair text-5xl lg:text-7xl font-bold mb-6 text-shadow-premium">
            Artisan <span className="text-gradient-premium">Masterpieces</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Discover our most treasured creations, each bottle representing decades of mastery 
            and the world's most exceptional ingredients, handcrafted for the discerning connoisseur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-3xl shadow-luxury-lg hover:shadow-deep-premium transition-all duration-700 animate-scale-in ${
                product.premium ? 'premium-border' : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={product.premium ? 'premium-border-inner' : ''}>
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-72 object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="bg-gold-gradient text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-luxury">
                      <product.badgeIcon className="w-3 h-3" />
                      <span>{product.badge}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-primary fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2 font-medium">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <h3 className="font-playfair text-2xl font-bold mb-3 text-foreground group-hover:text-gradient-premium transition-all duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed font-light">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-gradient-premium">{product.price}</span>
                      <span className="text-muted-foreground line-through text-sm">{product.originalPrice}</span>
                    </div>
                  </div>

                  <button className="w-full btn-premium text-white py-4 rounded-full font-bold text-lg shadow-luxury-lg">
                    Add to Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="premium-border group">
            <div className="premium-border-inner px-10 py-4 rounded-full font-bold text-xl text-primary hover:bg-primary hover:text-white transition-all duration-500">
              View Complete Collection
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
