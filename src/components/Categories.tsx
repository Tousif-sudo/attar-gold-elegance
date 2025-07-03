
import React from 'react';

const Categories = () => {
  const categories = [
    {
      name: "Oud Collection",
      description: "Rich, woody, and complex - the king of fragrances",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      count: "18 Scents"
    },
    {
      name: "Floral Essence",
      description: "Delicate petals and blooming gardens captured in oil",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      count: "24 Scents"
    },
    {
      name: "Woody Harmony",
      description: "Earthy, warm, and grounding natural wood essences",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
      count: "15 Scents"
    }
  ];

  return (
    <section id="collection" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Signature</span> Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each collection tells a story of tradition, craftsmanship, and the finest ingredients 
            sourced from around the world to create unforgettable olfactory experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-deep transition-all duration-500 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm text-primary font-medium mb-2">{category.count}</div>
                <h3 className="font-playfair text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">{category.description}</p>
                
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
                  Explore Collection
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
