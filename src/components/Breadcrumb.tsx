import Link from "next/link";
import { BreadcrumbProps } from "@/types";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ selectedCategory }) => {
  return (
    <div className="py-4 border-b-2 mb-8 mx-20">
      <div className="container mx-auto px-4">
        <nav
          aria-label="Breadcrumb"
          className="hidden lg:flex text-sm text-gray-500"
        >
          <ol className="flex list-none">
            <li className="breadcrumb-item">
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
            </li>
            <li className="mx-2 text-gray-400">/</li>
            <li className="breadcrumb-item">
              <span aria-current="page" className="text-gray-500">
                {selectedCategory}
              </span>
            </li>
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
        <h1 className="mt-2 text-3xl text-gray-800 font-bold">
          {selectedCategory}
        </h1>
      </div>
    </div>
  );
};

export default Breadcrumb;
