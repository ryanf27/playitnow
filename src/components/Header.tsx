"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";

import { DropdownItem } from "@/types/index";
import DropDownMenu from "@/components/DropDownMenu";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems: { title: string; items: DropdownItem[] }[] = [
    {
      title: "Rentals",
      items: [],
    },
    {
      title: "Whats's New",
      items: [],
    },
    {
      title: "Deals",
      items: [],
    },
    {
      title: "Articles",
      items: [],
    },
    {
      title: "Repairs",
      items: [],
    },
    {
      title: "Shop By Category",
      items: [
        {
          name: "Featured",
          subItems: [
            { name: "New Arrivals", link: "/Collection/electric-new-arrivals" },
            { name: "Best Sellers", link: "/collection/electric-best-sellers" },
            {
              name: "Gibson Custom Select",
              link: "/Collection/gibson-custom-select",
            },
            { name: "Gibson Supremes", link: "/Collection/the-supremes" },
            { name: "Gibson Amplifiers", link: "/amps" },
            {
              name: "Epiphone Inspired by Gibson",
              link: "https://www.epiphone.com/en-US/Collection/epiphone-inspired-by-gibson",
            },
          ],
        },
      ],
    },
  ];

  return (
    <header className="bg-neutral-950 text-white">
      {/* header 1 */}
      <div className="container mx-auto grid grid-cols-3 items-center px-10">
        <div className="flex items-center col-span-1">
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="hidden md:flex space-x-4">
            <a href="/Garage">Buy</a>
            <a href="/gibson-app">Rent</a>
            <a href="/Find-A-Store">Looking for Musicians</a>
          </div>
        </div>
        <div className="hidden md:flex justify-center col-span-1">
          <Link href="/">
            <Image src="/icon.svg" width={120} height={120} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center justify-end col-span-1 space-x-4">
          <a href="/en-US/Search" aria-label="Search">
            <FaSearch />
          </a>
          <a href="/en-US/my-account" aria-label="Gibson Account">
            <FaUser />
          </a>
          <a href="" aria-label="Shopping Cart">
            <FaShoppingCart />
          </a>
        </div>
      </div>

      {/* header 2 */}
      <div className="hidden md:flex justify-center bg-zinc-300  space-x-8  py-2">
        {menuItems.map((menuItem, index) => (
          <DropDownMenu
            key={index}
            title={menuItem.title}
            items={menuItem.items}
          />
        ))}
      </div>
      {menuOpen && (
        <div className="md:hidden bg-black text-white p-4">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left"
                onClick={() => setMenuOpen(false)}
              >
                {menuItem.title}
              </button>
              <div className="pl-4 mt-2">
                {menuItem.items.map((item, subIndex) => (
                  <div key={subIndex} className="mb-2">
                    <h6 className="font-bold">{item.name}</h6>
                    {item.subItems &&
                      item.subItems.map((subItem, subSubIndex) => (
                        <p key={subSubIndex}>
                          <a className="hover:underline" href={subItem.link}>
                            {subItem.name}
                          </a>
                        </p>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
