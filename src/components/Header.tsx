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
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import { DropdownItem } from "@/types/index";
import DropDownMenu from "@/components/DropDownMenu";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems: { title: string; items: DropdownItem[]; link?: string }[] = [
    {
      title: "Rentals",
      items: [],
      link: "/rent",
    },
    {
      title: "What's New",
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
    <header className="bg-white text-black shadow-md">
      {/* header 1 */}
      <div className="container mx-auto flex items-center justify-between px-12 py-2">
        <div className="flex items-center">
          <button
            className="md:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <Link href="/">
            <Image
              src="/logo.svg"
              width={60}
              height={60}
              alt="logo"
              className="hidden md:block"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="https://www.facebook.com"
            aria-label="Facebook"
            className="transition-colors duration-300 hover:text-[#3b5998]"
          >
            <FaFacebook size={30} />
          </Link>
          <Link
            href="https://www.twitter.com"
            aria-label="Twitter"
            className="transition-colors duration-300 hover:text-[#1da1f2]"
          >
            <FaTwitter size={30} />
          </Link>
          <Link
            href="https://www.instagram.com"
            aria-label="Instagram"
            className="transition-colors duration-300 hover:text-[#e4405f]"
          >
            <FaInstagram size={30} />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/en-US/Search"
            aria-label="Search"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaSearch size={24} />
          </Link>
          <Link
            href="/en-US/my-account"
            aria-label="Gibson Account"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaUser size={24} />
          </Link>
          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaShoppingCart size={24} />
          </Link>
        </div>
      </div>

      {/* header 2 */}
      <div className="hidden md:flex justify-center bg-gray-200 space-x-8 py-2">
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
                className="w-full text-left text-white hover:bg-yellow-500 py-2 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {menuItem.title}
              </button>
              {menuItem.items.length > 0 && (
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
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
