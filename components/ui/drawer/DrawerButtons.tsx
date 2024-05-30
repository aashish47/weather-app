interface DrawerButtonsProps {
    buttons: { [key: string]: JSX.Element };
}

const DrawerButtons: React.FC<DrawerButtonsProps> = ({ buttons }) => {
    return Object.entries(buttons).map(([name, button]) => (
        <button
            key={name}
            className="overflow-hidden my-1 flex w-full items-center hover:bg-neutral-800 active:bg-neutral-700 rounded-full"
        >
            <div className="w-12 h-12 p-3 shrink-0">{button}</div>
            <div className={"shrink-0"}>{name}</div>
        </button>
    ));
};

export default DrawerButtons;
