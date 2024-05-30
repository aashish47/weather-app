import Radio from "@/components/ui/Radio";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface SelectRadioOptionsProp {
    selected: string;
    labels: { [key: string]: string };
    handleClick: (value: string) => void;
}

const SelectRadioOptions: React.FC<SelectRadioOptionsProp> = ({ selected, labels, handleClick }) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="relative"
            onClick={() => setOpen(!open)}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    setOpen(false);
                }
            }}
        >
            <button className=" bg-white bg-opacity-10 rounded-md text-xl w-12 h-10 px-1 flex gap-1 justify-between items-center capitalize">
                {`°${selected}`}
                {open ? <ChevronDownIcon width={12} /> : <ChevronUpIcon width={12} />}
            </button>
            {open && (
                <Radio
                    selected={selected}
                    labels={labels}
                    handleClick={handleClick}
                />
            )}
        </div>
    );
};

export default SelectRadioOptions;
