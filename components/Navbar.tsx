import Search from "@/components/Search";

const Navbar = () => {
    return (
        <div className="fixed ml-12 h-12 px-4 w-[calc(100%-48px)] flex items-center bg-sky-950 bg-opacity-20 backdrop-blur-md">
            <h1 className="font-medium text-lg capitalize text-white">forecast</h1>
            <div className="grow" />
            <Search />
        </div>
    );
};

export default Navbar;
