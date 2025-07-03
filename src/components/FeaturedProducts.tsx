
import React from 'react';
import { Star } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      name: "Royal Oud Majesty",
      price: "$299",
      originalPrice: "$399",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=400&fit=crop",
      badge: "Bestseller",
      description: "A rich, complex oud blend with notes of rose and saffron"
    },
    {
      name: "Jasmine Nights",
      price: "$179",
      originalPrice: "$229",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=400&fit=crop",
      badge: "Limited Edition",
      description: "Intoxicating jasmine with hints of vanilla and musk"
    },
    {
      name: "Sandalwood Serenity",
      price: "$149",
      originalPrice: "$199",
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=400&fit=crop",
      badge: "New Arrival",
      description: "Pure sandalwood essence with subtle floral undertones"
    },
    {
      name: "Amber Mystique",
      price: "$219",
      originalPrice: "$279",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=300&h=400&fit=crop",
      badge: "Premium",
      description: "Warm amber with oriental spices and precious woods"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Masterpieces</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Handpicked selection of our most cherished fragrances, each bottle containing 
            years of expertise and the finest ingredients from around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-luxury hover:shadow-deep transition-all duration-500 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-primary fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <h3 className="font-playfair text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-muted-foreground line-through text-sm">{product.originalPrice}</span>
                  </div>
                </div>

                <button className="w-full bg-gold-gradient text-white py-3 rounded-full font-semibold hover:shadow-luxury transition-all duration-300 transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
