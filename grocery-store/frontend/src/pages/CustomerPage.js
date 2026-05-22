import { useState } from 'react';
import Header from '../components/Header';
import CategoryTabs from '../components/CategoryTabs';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function CustomerPage() {
  const [selectedCategory, setSelectedCategory] = useState('Sales');
  const [cart, setCart] = useState([]);

  // Filter products by category
  const filteredProducts = products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header cartCount={cart.length} />
      
      {/* Category Tabs */}
      <CategoryTabs 
        categories={categories}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{selectedCategory}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}