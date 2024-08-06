export interface DropdownItem {
  name: string;
  link?: string;
  subItems?: DropdownItem[];
}

export interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
}
export interface BlogPost {
  title: string;
  date: string;
  imageUrl: string;
  link: string;
  altText: string;
}

export interface Category {
  title: string;
  imageUrl: string;
  link: string;
}

export interface BreadcrumbProps {
  selectedCategory: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface ProductListProps {
  products: Product[];
  category: string;
}

export interface SidebarProps {
  filters: { [key: string]: string[] };
  selectedFilters: { [key: string]: string[] };
  onFilterChange: (category: string, filter: string) => void;
}

export interface BreadcrumbContextType {
  breadcrumb: string;
  setBreadcrumb: (breadcrumb: string) => void;
}
