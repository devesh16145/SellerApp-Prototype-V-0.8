import React from 'react';
import ProductCard from './ProductCard';
import { myProducts } from '../data/myProducts';

export default function MyProducts() {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <h2 className="font-bold text-lg p-3 border-b border-gray-100">My Products</h2>
      <div className="divide-y divide-gray-100 max-h-[300px] overflow-y-auto">
        {myProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
