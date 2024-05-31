import React from "react";

interface RadioProps {
    selected: string;
    labels: { [key: string]: string };
    handleClick: (value: string) => void;
}

const Radio: React.FC<RadioProps> = ({ selected, labels, handleClick }) => {
    return (
        <div className="absolute bg-neutral-800 rounded-md right-0 mt-1 flex flex-col ">
            {Object.entries(labels).map(([label, value]) => (
                <button
                    key={value}
                    onClick={() => handleClick(value)}
                    className=" text-nowrap flex items-center gap-2 first:rounded-t-md last:rounded-b-md px-3 py-2 font-light last:border-t border-neutral-600 hover:bg-neutral-700 active:bg-neutral-600 capitalize"
                >
                    <div className={`w-3 h-3 ring border-2 rounded-full ${value === selected ? "bg-pink-400" : "bg-white"}`} />
                    {label}
                </button>
            ))}
        </div>
    );
};

export default Radio;
