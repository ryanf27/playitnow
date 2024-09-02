"use client";

import React, { useState, useEffect } from "react";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";
import { products } from "@/data/product";

const filters = {
  Category: [
    "Electric Guitars",
    "Basses",
    "Drums",
    "Keyboards",
    "Recording",
    "Amps",
    "Accessories",
  ],
  Brand: [
    "Gibson",
    "Epiphone",
    "ESP",
    "Music Man",
    "Fender",
    "Square",
    "Yamaha",
    "Gretsch",
    "Roland",
    "Ibanez",
    "PRS",
    "Zildjian",
    "DW Collector's",
  ],
  Condition: ["New", "Used"],
  "Price Range": ["Under $20", "$20 - $100", "Above $100"],
  "Premium gear": ["Vintage", "Platinum"],
  Orientation: ["Left Handed", "Right Handed"],
  "Body type": ["Hollow Body", "Semi-Hollow", "Solid Body"],
};

const Page = ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>({});

  useEffect(() => {
    const normalizedCategory = filters.Category.find(
      (cat) => cat.toLowerCase().replace(/ /g, "") === category.toLowerCase()
    );

    if (normalizedCategory) {
      setSelectedFilters({
        Category: [normalizedCategory],
      });
    }
  }, [category]);

  const handleFilterChange = (filterCategory: string, filter: string) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (!newFilters[filterCategory]) {
        newFilters[filterCategory] = [];
      }
      if (newFilters[filterCategory].includes(filter)) {
        newFilters[filterCategory] = newFilters[filterCategory].filter(
          (f) => f !== filter
        );
      } else {
        newFilters[filterCategory].push(filter);
      }
      return newFilters;
    });
  };

  const filterProduct = (product: any) => {
    for (let filterCategory in selectedFilters) {
      if (selectedFilters[filterCategory].length > 0) {
        switch (filterCategory) {
          case "Category":
            if (
              !selectedFilters[filterCategory].some(
                (category) =>
                  category.toLowerCase().replace(/ /g, "") ===
                  product.category.toLowerCase().replace(/ /g, "")
              )
            ) {
              return false;
            }
            break;
          case "Brand":
            if (!selectedFilters[filterCategory].includes(product.brand)) {
              return false;
            }
            break;
          case "Condition":
            if (!selectedFilters[filterCategory].includes(product.condition)) {
              return false;
            }
            break;
          case "Price Range":
            const price = product.price;
            const priceRangeFilters = selectedFilters[filterCategory];
            if (
              (priceRangeFilters.includes("Under $20") && price >= 20) ||
              (priceRangeFilters.includes("$20 - $100") &&
                (price < 20 || price > 100)) ||
              (priceRangeFilters.includes("Above $100") && price <= 100)
            ) {
              return false;
            }
            break;
          case "Premium gear":
            if (
              !selectedFilters[filterCategory].some((gear) =>
                product.premiumGear.includes(gear)
              )
            ) {
              return false;
            }
            break;
          case "Orientation":
            if (product.orientation !== selectedFilters[filterCategory][0]) {
              return false;
            }
            break;
          case "Body type":
            if (!selectedFilters[filterCategory].includes(product.bodyType)) {
              return false;
            }
            break;
          default:
            return true;
        }
      }
    }
    return true;
  };

  const filteredProducts = products.filter(filterProduct);

  return (
    <>
      <div className="flex mb-10">
        <Sidebar
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} category={category} />
        ) : (
          <div className="flex-1 text-center text-gray-500">
            <h2 className="text-2xl font-semibold">No products found</h2>
            <p className="mt-4">
              Try adjusting your filters to find what you`&apos;`re looking for.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
