"use client";

import DrawerButtons from "@/components/ui/drawer/DrawerButtons";
import {
    Bars3Icon,
    BuildingLibraryIcon,
    CalendarDaysIcon,
    ClockIcon,
    Cog8ToothIcon,
    FaceSmileIcon,
    GlobeAltIcon,
    HomeIcon,
    MapPinIcon,
    PresentationChartLineIcon,
    StarIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface DrawerProps {
    children: Readonly<React.ReactNode>;
}

const Drawer: React.FC<DrawerProps> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const buttons: { [key: string]: JSX.Element } = {
        "Home": <HomeIcon />,
        "Maps": <MapPinIcon />,
        "3D Maps": <GlobeAltIcon />,
        "Hourly Forecast": <ClockIcon />,
        "Monthly Forecast": <CalendarDaysIcon />,
        "Life": <BuildingLibraryIcon />,
        "Historical Weather": <PresentationChartLineIcon />,
        "Favourite": <StarIcon />,
        "Feedback": <FaceSmileIcon />,
    };

    const bottomButtons: { [key: string]: JSX.Element } = {
        "Sign Out": <UserCircleIcon />,
        "Settings": <Cog8ToothIcon />,
    };

    return (
        <div className="w-full ">
            <button
                className=" fixed top-0 left-0 w-12 h-12 p-3 bg-neutral-950 hover:bg-neutral-900 active:bg-neutral-800"
                onClick={handleClick}
            >
                <Bars3Icon />
            </button>
            <div className="flex h-[calc(100vh-48px)]">
                <div
                    className={`shrink-0 bg-neutral-900 flex flex-col justify-between ${
                        open ? "w-full sm:w-64 transition-all" : "w-0 sm:w-12 transition-all"
                    } `}
                >
                    <div className="scrollbar-hidden overflow-y-auto">
                        <DrawerButtons buttons={buttons} />
                    </div>
                    <div className="border-t border-neutral-600 ">
                        <DrawerButtons buttons={bottomButtons} />
                    </div>
                </div>
                <div className="grow overflow-auto ">{children}</div>
            </div>
        </div>
    );
};

export default Drawer;
