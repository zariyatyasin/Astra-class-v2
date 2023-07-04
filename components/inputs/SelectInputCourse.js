import React, { useEffect, useRef, useState } from "react";

const SelectInputFromData = ({ data, itemName, onSelect, setname }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const wrapperRef = useRef(null);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setIsOpen(true);
  };

  const handleItemClick = (item) => {
    setSelectedValue(item.name);
    setSearchQuery(item.name);
    setIsOpen(false);

    onSelect(item._id);
  };
  const filteredData = data?.filter((item) =>
    item?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <div ref={wrapperRef}>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {itemName}
        </label>
        <div className="relative mt-1">
          <input
            id="combobox"
            type="text"
            className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            role="combobox"
            value={searchQuery}
            onChange={handleInputChange}
            onClick={() => setIsOpen(true)}
            aria-controls="options"
            aria-expanded="false"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
          >
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isOpen && (
            <ul
              className="absolute z-10 mt-1   max-h-40 overflow-scroll w-full   rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              id="options"
              role="listbox"
            >
              {filteredData?.map((item, id) => (
                <li
                  className="relative   cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                  id="option-0"
                  role="option"
                  tabIndex="-1"
                  key={id}
                  onClick={() => {
                    handleItemClick(item);
                  }}
                >
                  <span className="block truncate">{item.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {selectedValue && (
          <div className="mt-2">
            <button
              type="button"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => {
                setSelectedValue(""), setSearchQuery("");
              }}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectInputFromData;
