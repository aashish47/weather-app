import { Geolocation } from "@/types/Geolocation";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface DropdownProps {
    locations: Geolocation[];
}

const Dropdown: React.FC<DropdownProps> = ({ locations }) => {
    const searchParams = useSearchParams();
    const unit = searchParams.get("unit") ?? "c";
    return (
        locations && (
            <div className="bg-neutral-800 absolute w-full rounded-b-md max-h-[50vh] overflow-auto ">
                {locations.map(({ id, country_code, name, admin1, country, latitude, longitude }) => {
                    const subLoc = country && admin1 ? `${country}, ${admin1}` : country ?? admin1 ?? "";
                    const src = country_code ? `https://hatscripts.github.io/circle-flags/flags/${country_code?.toLowerCase()}.svg` : "/icon.png";

                    return (
                        <Link
                            href={`?latitude=${latitude}&longitude=${longitude}&unit=${unit}&location=${name}`}
                            key={id}
                            className="py-2 px-3 border-t last:rounded-b-md border-neutral-600 hover:bg-neutral-700 active:bg-neutral-600 flex gap-2 items-center"
                            replace
                        >
                            <Image
                                alt="country flag"
                                src={src}
                                width={42}
                                height={42}
                            />
                            <div className="flex flex-col">
                                <h4 className="font-semibold">{`${name}`}</h4>
                                <h5 className="text-sm font-light">{subLoc}</h5>
                            </div>
                        </Link>
                    );
                })}
            </div>
        )
    );
};

export default Dropdown;
