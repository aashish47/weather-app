import Search from "@/components/navbar/main/search";
import { Suspense } from "react";

const Navbar = () => {
    return (
        <div className="drop-shadow z-20 fixed ml-12 h-12 px-2 w-[calc(100%-48px)] flex items-center justify-between bg-neutral-950 ">
            <h1 className="font-medium text-lg capitalize">forecast</h1>
            <Suspense>
                <Search />
            </Suspense>
        </div>
    );
};

export default Navbar;
