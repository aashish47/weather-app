import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
    return (
        <div className="relative block ">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <MagnifyingGlassIcon className="w-5 stroke-neutral-400" />
            </span>
            <input
                className="text-neutral-900 placeholder:italic placeholder:text-neutral-400 block  w-full rounded-md py-2 pl-9 pr-3 shadow-sm outline-none focus:ring-sky-400 focus:ring-2"
                placeholder="Search city"
                type="text"
                name="search"
            />
        </div>
    );
};

export default Search;
