"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const pathParts = pathname.split("/").filter(Boolean);
    let fullPath = "";
    const breadcrumbs = [
      { label: "Home", link: "/" },
      ...pathParts.map((part) => {
        fullPath += `/${part}`;

        const labelMap: { [key: string]: string } = {
          electricguitars: "Electric Guitars",
          keyboards: "Keyboards",
          acousticguitars: "Acoustic Guitars",
          recording: "Recording",
          amps: "Amps",
          effects: "Effects",
          drums: "Drums",
          basses: "Basses",
          accessories: "Accessories",
          livesound: "Live Sound",
          used: "Used",
        };

        return {
          label: labelMap[part] || part.charAt(0).toUpperCase() + part.slice(1),
          link: fullPath,
        };
      }),
    ];
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className="py-4 border-b-2 mb-8 mx-20">
      <div className="container mx-auto px-4">
        <nav
          aria-label="Breadcrumb"
          className="hidden lg:flex text-sm text-gray-500"
        >
          <ol className="flex list-none">
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                <li className="breadcrumb-item">
                  {breadcrumb.link ? (
                    <Link
                      href={breadcrumb.link}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {breadcrumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-gray-500">
                      {breadcrumb.label}
                    </span>
                  )}
                </li>
                {index < breadcrumbs.length - 1 && (
                  <li className="mx-2 text-gray-400">/</li>
                )}
              </React.Fragment>
            ))}
          </ol>
        </nav>
        <nav aria-label="Breadcrumb" className="lg:hidden">
          <ol className="flex list-none">
            <li className="breadcrumb-item">
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Back
              </Link>
            </li>
          </ol>
        </nav>
        {breadcrumbs.length > 0 && (
          <h1 className="mt-2 text-3xl text-gray-800 font-bold">
            {breadcrumbs[breadcrumbs.length - 1].label}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
