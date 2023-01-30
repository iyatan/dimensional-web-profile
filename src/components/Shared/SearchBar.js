import { useState, useMemo } from "react";
import Checkmarks from "./Checkmarks";
import ElementCicle from "./ElementCircle";
import ScoreBar from "./ScoreBar";

const Searchbar = ({ traits, onFocus, onBlur, showSuggestions }) => {
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
      <form className="">
        <div
          className={`block overflow-hidden rounded-md z-10 ${
            !showSuggestions
              ? "relative sm:fixed "
              : "fixed bg-[#2E2927] w-full  ml-[-30%] sm:w-auto sm:ml-[0%]"
          }`}
        >
          <div className="relative sm:p-3  ">
            <div className="absolute inset-y-0  flex items-center pl-3 pointer-events-none ">
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
              className={`block outline-none py-2 text-sm text-gray-900 border border-gray-300  bg-gray-50 ${
                !showSuggestions
                  ? "w-10 h-10 mr-2 sm:w-[30vw] sm:rounded-lg px-4 sm:px-10 rounded-full "
                  : "rounded-lg w-screen mx-2   sm:w-[30vw] px-10 sm:px-10"
              }`}
              placeholder="Search traits"
              required
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
          {showSuggestions && (
            <div className="pb-3">
              <div className=" font-sans text-xl px-3 text-white  ">Traits</div>
              {filteredTraits.map((trait, index) => (
                <div
                  key={index}
                  className="cursor-pointer py-4 px-3 border-2 border-white mx-2 flex"
                >
                  <div className=" basis-[15%]">
                    {" "}
                    <ElementCicle colour={trait.colorHexCodes} />
                  </div>
                  <div className=" basis-[70%]">
                    <p className="text-sm font-medium text-gray-300 ">
                      {trait.name}
                    </p>
                    <ScoreBar percentage={trait.score} />
                  </div>
                  <div className=" basis-[15%] text-right">
                    <Checkmarks />
                    <div> {Math.round(trait.score * 100)}</div>
                  </div>
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
