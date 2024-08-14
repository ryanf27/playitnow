import React, { useEffect, useState } from "react";
import { ProductListProps, Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductList: React.FC<ProductListProps> = ({ products, category }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedProducts(products.slice(startIndex, endIndex));
  }, [products, currentPage, itemsPerPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="bg-gray-100 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border p-4 rounded hover:shadow-sm transition-shadow duration-300"
            >
              <Link href={`/${category}/${product.id}`} passHref>
                <Image
                  width={300}
                  height={700}
                  src={product.cardImg}
                  alt={product.name}
                  style={{ objectFit: "contain" }}
                  className="w-full h-52 object-cover rounded mb-4"
                />
              </Link>

              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="text-lg font-semibold text-blue-600">
                ${product.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="flex justify-center mt-8">
            <ul className="inline-flex rounded-md shadow-sm">
              <li
                className={`px-3 py-2 ${
                  currentPage === 1
                    ? "disabled text-gray-400 cursor-not-allowed"
                    : "text-blue-600 hover:text-blue-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                >
                  « First
                </button>
              </li>
              <li
                className={`px-3 py-2 ${
                  currentPage === 1
                    ? "disabled text-gray-400 cursor-not-allowed"
                    : "text-blue-600 hover:text-blue-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  ‹ Prev
                </button>
              </li>
              {[...Array(Math.min(pageCount, 5))].map((_, index) => (
                <li key={index} className="px-3 py-2">
                  <button
                    type="button"
                    className={`text-blue-600 hover:text-blue-700 ${
                      currentPage === index + 1 ? "font-bold" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li
                className={`px-3 py-2 ${
                  currentPage === pageCount
                    ? "disabled text-gray-400 cursor-not-allowed"
                    : "text-blue-600 hover:text-blue-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === pageCount}
                >
                  Next ›
                </button>
              </li>
              <li
                className={`px-3 py-2 ${
                  currentPage === pageCount
                    ? "disabled text-gray-400 cursor-not-allowed"
                    : "text-blue-600 hover:text-blue-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handlePageChange(pageCount)}
                  disabled={currentPage === pageCount}
                >
                  Last »
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
