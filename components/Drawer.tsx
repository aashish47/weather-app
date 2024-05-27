"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Drawer = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className="w-full">
            <div
                className="fixed top-0 left-0 w-12 h-12 p-2 hover:bg-sky-900 active:bg-sky-800 hover:cursor-pointer"
                onClick={handleClick}
            >
                <Bars3Icon className="stroke-neutral-300" />
            </div>
            <div className="flex">
                <div className={`bg-white bg-opacity-20 backdrop-blur-lg flex flex-col ${open ? "w-64 transition-all" : "w-12 transition-all"} `}>
                    <div className="overflow-auto h-[calc(100vh-144px)] ">
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                        <h1>asd</h1>
                    </div>
                    <div className="h-12 p-4">option1</div>
                    <div className="h-12 p-4">option2</div>
                </div>
                <div className="grow overflow-auto h-[calc(100vh-48px)]">{children}</div>
            </div>
        </div>
    );
};

export default Drawer;
