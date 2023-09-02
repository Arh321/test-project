"use client";
import { useState } from "react";
import SearchModule from "../module/SearchModule";

const Search = ({ productGroups }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="w-3/4 relative">
      {!isSearchOpen && (
        <div
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="w-full flex items-center justify-between bg-gray-300 rounded-lg p-[2px]"
        >
          <input
            className="border-none px-2 bg-transparent text-base focus:outline-none placeholder:text-xs placeholder:font-medium placeholder:text-black placeholder:absolute placeholder:top-0"
            type="text"
            placeholder="جست و جو"
          />
          <img className="pl-2" src="/icons/search.svg" />
        </div>
      )}
      {isSearchOpen && (
        <SearchModule
          close={() => setIsSearchOpen(false)}
          isSearchOpen={isSearchOpen}
          productGroups={productGroups}
        />
      )}
    </div>
  );
};
export default Search;
