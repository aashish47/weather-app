interface DrawerButtonsProps {
    buttons: { [key: string]: JSX.Element };
}

const DrawerButtons: React.FC<DrawerButtonsProps> = ({ buttons }) => {
    return Object.keys(buttons).map((button) => (
        <button
            key={button}
            className="text-white overflow-hidden my-1 flex w-full items-center hover:bg-neutral-800 active:bg-neutral-700 rounded-full"
        >
            <div className="w-12 h-12 p-3 shrink-0">{buttons[button]}</div>
            <div className={"text-neutral-300 shrink-0"}>{button}</div>
        </button>
    ));
};

export default DrawerButtons;
