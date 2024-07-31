export interface DropdownItem {
  name: string;
  link?: string;
  subItems?: DropdownItem[];
}

export interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
}
