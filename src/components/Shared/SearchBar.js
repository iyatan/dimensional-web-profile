import { useState, useEffect, useMemo } from "react";

const Searchbar = ({ traits }) => {
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTraits = useMemo(
    () =>
      traits
        .filter((trait) =>
          trait.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 5),
    [searchTerm, traits]
  );

  return (
    <>
      <form className="w-[55%]">
        <div
          className="absolute  overflow-hidden rounded-md "
          style={{ backgroundColor: showSuggestions ? "#2E2927" : "" }}
        >
          <div className="relative p-3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block outline-none w-full px-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700"
              placeholder="Search traits"
              required
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
          </div>
          {showSuggestions && (
            <div className="pb-3">
              <div className="px-3 text-white  ">Traits</div>
              {filteredTraits.map((trait) => (
                <div className="cursor-pointer py-2 px-3 border-2 border-white mx-2">
                  <p className="text-sm font-medium ">{trait.name}</p>
                  <p className="text-sm text-gray-500">{trait.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Searchbar;
