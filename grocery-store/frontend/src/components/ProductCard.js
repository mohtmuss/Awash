export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
      {/* Image Container */}
      <div className="relative bg-gray-100 h-40 overflow-hidden flex items-center justify-center">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        
        {/* Add Button (floating) */}
        <button 
          onClick={() => onAddToCart(product)}
          className="absolute top-3 right-3 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-full transition flex items-center gap-1 shadow-lg"
        >
          + Add
        </button>

        {/* Sale Badge */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4">
        {/* Price */}
        <div className="mb-2">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm mb-2">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.reviews || 0})</span>
        </div>

        {/* Size/Quantity */}
        {product.size && (
          <p className="text-xs text-gray-600 mb-2">{product.size}</p>
        )}

        {/* Stock Status */}
        <p className="text-xs font-semibold text-green-600">✓ Many in stock</p>
      </div>
    </div>
  );
}