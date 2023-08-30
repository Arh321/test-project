const Search = () => {
  return (
    <div className="w-3/4 bg-gray-300 rounded-lg p-[2px] flex items-center justify-between">
      <input
        className="border-none px-2 bg-transparent text-base focus:outline-none placeholder:text-xs placeholder:font-medium placeholder:text-black placeholder:absolute placeholder:top-0"
        type="text"
        placeholder="جست و جو"
      />
      <img className="pl-2" src="/icons/search.svg" />
    </div>
  );
};
export default Search;
