import React from "react";
import { ProductListProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductList: React.FC<ProductListProps> = ({ products, category }) => {
  return (
    <div className="bg-gray-100 container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border p-4 rounded hover:shadow-sm  transition-shadow duration-300"
        >
          <Link href={`/${category}/${product.id}`} passHref>
            <Image
              width={300}
              height={700}
              src={product.imageUrl}
              alt={product.name}
              style={{ objectFit: "contain" }}
              className="w-full h-52 object-cover rounded mb-4"
            />
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
              View Details
            </button>
          </Link>

          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="text-lg font-semibold text-blue-600">
            ${product.price.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
