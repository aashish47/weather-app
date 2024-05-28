import Search from "@/components/Search";

const Navbar = () => {
    return (
        <div className="drop-shadow fixed ml-12 h-12 px-2 w-[calc(100%-48px)] flex items-center justify-between bg-neutral-950 ">
            <h1 className="font-medium text-lg capitalize text-white">forecast</h1>
            <Search />
        </div>
    );
};

export default Navbar;
