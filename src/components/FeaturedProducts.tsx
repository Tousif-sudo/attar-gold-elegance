
import React from 'react';
import { Star, Award, Gem, Sparkles, Crown, Shield } from 'lucide-react';

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
      description: "A legendary blend of Cambodian oud with Bulgarian rose and precious saffron threads from Kashmir",
      premium: true,
      exclusive: true
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
      description: "Rare night-blooming jasmine with Madagascar vanilla and ethereal white musk essence",
      premium: false,
      exclusive: false
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
      description: "Pure Mysore sandalwood with delicate rose petals and ancient amber undertones",
      premium: false,
      exclusive: false
    },
    {
      name: "Amber Royale",
      price: "$219",
      originalPrice: "$279",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=350&h=450&fit=crop",
      badge: "Premium",
      badgeIcon: Crown,
      description: "Ancient amber resin with oriental spices and precious agarwood from sacred forests",
      premium: true,
      exclusive: true
    }
  ];

  return (
    <section className="mobile-section-padding bg-white ornament-pattern-premium">
      <div className="container mx-auto mobile-padding">
        <div className="text-center mb-12 lg:mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6 lg:mb-8">
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gold-gradient-ultra mr-4 sm:mr-6"></div>
            <div className="flex items-center mobile-gap">
              <Shield className="mobile-icon text-primary animate-luxury-pulse" />
              <span className="text-primary font-bold tracking-wider uppercase mobile-text-lg">Featured Collection</span>
              <Crown className="mobile-icon text-primary animate-luxury-pulse" />
            </div>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gold-gradient-ultra ml-4 sm:ml-6"></div>
          </div>
          <h2 className="font-playfair mobile-hero-text font-bold mb-6 lg:mb-8 text-shadow-ultra">
            Artisan <span className="text-gradient-ultra">Masterpieces</span>
          </h2>
          <p className="mobile-text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Discover our most treasured creations, each bottle representing decades of mastery 
            and the world's most exceptional ingredients, handcrafted for the discerning connoisseur 
            who appreciates true luxury and timeless elegance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 mobile-gap-lg">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-luxury-xl hover:shadow-ultra-premium transition-all duration-700 animate-scale-in ${
                product.premium ? 'premium-border-ultra' : 'bg-white shadow-luxury-lg'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={product.premium ? 'premium-border-inner-ultra' : ''}>
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center space-x-2">
                    <div className="bg-gold-gradient-ultra text-white mobile-button-padding rounded-full mobile-text-xs font-bold flex items-center space-x-1 sm:space-x-2 shadow-luxury">
                      <product.badgeIcon className="mobile-icon-sm" />
                      <span>{product.badge}</span>
                    </div>
                    {product.exclusive && (
                      <div className="bg-secondary text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full mobile-text-xs font-bold shadow-luxury">
                        Exclusive
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Enhanced Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>
                </div>

                <div className="mobile-card-padding">
                  <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`mobile-icon-sm ${i < Math.floor(product.rating) ? 'text-primary fill-current animate-luxury-pulse' : 'text-gray-300'}`} 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                    <span className="mobile-text-xs text-muted-foreground ml-2 sm:ml-3 font-semibold">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <h3 className="font-playfair mobile-heading font-bold mb-3 sm:mb-4 text-foreground group-hover:text-gradient-ultra transition-all duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground mobile-text-sm mb-4 sm:mb-6 leading-relaxed font-light">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="flex items-center mobile-gap">
                      <span className="mobile-heading font-bold text-gradient-ultra">{product.price}</span>
                      <span className="text-muted-foreground line-through mobile-text-sm">{product.originalPrice}</span>
                    </div>
                    <div className="text-green-600 font-bold mobile-text-xs bg-green-50 px-2 sm:px-3 py-1 rounded-full">
                      Save {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}%
                    </div>
                  </div>

                  <button className="w-full btn-premium-ultra text-white py-3 sm:py-4 rounded-full font-bold mobile-button-text shadow-luxury-xl">
                    Add to Collection
                  </button>
                </div>

                {/* Enhanced Premium Decorative Elements */}
                {product.premium && (
                  <>
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gold-gradient-ultra rounded-full flex items-center justify-center shadow-luxury animate-ultra-glow">
                      <Crown className="mobile-icon text-white" />
                    </div>
                    <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-luxury-pulse"></div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <button className="premium-border-ultra group">
            <div className="premium-border-inner-ultra mobile-button-padding rounded-full font-bold mobile-button-text text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-luxury">
              View Complete Collection
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
