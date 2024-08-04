"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";
import { products } from "@/data/product";

const filters = {
  Category: ["Guitars", "Basses", "Drums"],
  Brand: ["Brand 1", "Brand 2", "Brand 3"],
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

  const handleFilterChange = (category: string, filter: string) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (!newFilters[category]) {
        newFilters[category] = [];
      }
      if (newFilters[category].includes(filter)) {
        newFilters[category] = newFilters[category].filter((f) => f !== filter);
      } else {
        newFilters[category].push(filter);
      }
      return newFilters;
    });
  };

  const filteredProducts = products.filter((product) => {
    return true;
  });

  return (
    <>
      <Header />
      <Breadcrumb selectedCategory={category} />
      <div className="flex mb-10">
        <Sidebar
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
        <ProductList products={filteredProducts} />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Page;
