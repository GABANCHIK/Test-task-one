const Header = () => {
    return (
        <div className="flex bg-[#202020] h-16 items-center justify-between px-20">

            <div className="text-white text-3xl font-bold">
                <a href="#">Recipe Finder</a>
            </div>

            <div className="flex gap-20 items-center justify-center flex-grow">
                <a
                    href="#"
                    className="text-xl text-white hover:bg-[#070707] hover:rounded-md p-3"
                >
                    ABOUT
                </a>
                <a
                    href="#"
                    className="text-xl text-white hover:bg-[#070707] hover:rounded-md p-3"
                >
                    HOME
                </a>
                <a
                    href="#"
                    className="text-xl text-white hover:bg-[#070707] hover:rounded-md p-3"
                >
                    PRODUCTS
                </a>
                <a
                    href="#"
                    className="text-xl text-white hover:bg-[#070707] hover:rounded-md p-3"
                >
                    LOCATION
                </a>
            </div>

        </div>
    );
};

export default Header;