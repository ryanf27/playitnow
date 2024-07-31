import { DropdownMenuProps } from "@/types/index";

const DropDownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => (
  <div className="relative group">
    <button className="text-black px-4 py-2 ">{title}</button>
    <div className="absolute hidden group-hover:block bg-white text-black mt-2 w-48 shadow-lg">
      <div className="p-4">
        {items.map((item, index) => (
          <div key={index}>
            <h6 className="font-bold">{item.name}</h6>
            {item.subItems &&
              item.subItems.map((subItem, subIndex) => (
                <p key={subIndex}>
                  <a className="hover:underline" href={subItem.link}>
                    {subItem.name}
                  </a>
                </p>
              ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DropDownMenu;
