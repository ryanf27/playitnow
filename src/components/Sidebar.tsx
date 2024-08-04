import React, { useState } from "react";
import { SidebarProps } from "@/types";

const Sidebar: React.FC<SidebarProps> = ({
  filters,
  selectedFilters,
  onFilterChange,
}) => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const handleToggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="w-64 p-4 ">
      <h2 className="text-2xl font-bold mb-4">Refine Your Search</h2>
      {Object.keys(filters).map((category) => (
        <div key={category} className="mb-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleToggleCategory(category)}
          >
            <h5 className="text-lg font-bold">{category}</h5>
            <span>
              {openCategories.includes(category) ? (
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="minus"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                </svg>
              ) : (
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="plus"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                  <path d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"></path>
                </svg>
              )}
            </span>
          </div>
          {openCategories.includes(category) && (
            <div className="mt-2 pl-4 border-l-2 border-gray-300">
              {filters[category].map((filter) => (
                <label
                  key={filter}
                  className="flex items-center mb-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedFilters[category]?.includes(filter)}
                    onChange={() => onFilterChange(category, filter)}
                  />
                  <span className="ml-2 text-gray-700">{filter}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
