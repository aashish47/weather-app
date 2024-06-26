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
            <button className="card px-1 text-xl w-12 h-10 flex gap-1 justify-between items-center capitalize">
                {`°${selected}`}
                {open ? <ChevronUpIcon width={12} /> : <ChevronDownIcon width={12} />}
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
