import Image from "next/image";
import Link from "next/link";

interface DropdownProps {
    search: string;
}

interface locationsType {
    id: number;
    country_code?: string;
    name: string;
    admin1?: string;
    country?: string;
    latitude: number;
    longitude: number;
}

const Dropdown: React.FC<DropdownProps> = async ({ search }) => {
    const resLocations = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=5&language=en&format=json`);
    const { results: locations } = await resLocations.json();

    return (
        locations && (
            <div className=" bg-neutral-800 absolute w-full ">
                {locations.map(({ id, country_code, name, admin1, country, latitude, longitude }: locationsType) => {
                    let subLoc = country && admin1 ? `${country}, ${admin1}` : country ?? admin1 ?? "";
                    const src = country_code ? `https://hatscripts.github.io/circle-flags/flags/${country_code?.toLowerCase()}.svg` : "/icon.png";

                    return (
                        <Link
                            href={`?latitude=${latitude}&longitude=${longitude}`}
                            key={id}
                            className="py-2 px-3 border-b border-neutral-400 hover:bg-neutral-700 active:bg-neutral-600 hover:cursor-pointer flex gap-2 items-center"
                        >
                            <Image
                                alt="country flag"
                                src={src}
                                width={42}
                                height={42}
                            />
                            <div className="flex flex-col text-neutral-200">
                                <h1 className="font-semibold">{`${name}`}</h1>
                                <h1 className="text-sm font-light">{subLoc}</h1>
                            </div>
                        </Link>
                    );
                })}
            </div>
        )
    );
};

export default Dropdown;
