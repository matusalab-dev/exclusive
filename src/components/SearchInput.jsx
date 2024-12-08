import SearchIcon from "../assets/icons/search-icon";

const SearchInput = () => {
  return (
    <div className="flex">
      <input
        type="search"
        name="query"
        className="px-5 py-2 w-[197px] min-w-32 sm:w-72 text-base rounded-[4px] bg-colors-secondary-1  text-light_black/70 focus:!border-grey-500 border-r-0 focus:outline-none focus-within:outline-grey-500"
        placeholder="What are you looking for?"
      />
      <button className="flex items-center bg-purple py-2 -ml-8">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchInput;
