import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from './api';

export default function ProductsList({ refresh }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [refresh]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this product?')) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products ({products.length})</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
            {product.image_url && <img src={product.image_url} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <p>In stock: {product.quantity}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => handleDelete(product.id)} style={{ color: 'red', cursor: 'pointer' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}