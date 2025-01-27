import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search by keyword, brand or SKU..."
        className="w-full text-light-mid bg-lightest-gray border py-2 px-3 pr-10 text-sm focus:outline-none rounded-sm"
      />
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray"
        aria-label="Search"
      >
        <Search className="h-4 w-4 text-gray-400" />
      </button>
    </div>
  );
}
