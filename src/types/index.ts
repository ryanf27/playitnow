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
