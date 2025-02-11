function Menu() {
    return (
        <div className="flex border-black border-solid border-4 flex-row space-x-4 bg-blue-500 fixed left-[0px] top-[30px] px-[20px] py-[5px] w-screen">
            <div className="bg-white font-mono p-1 rounded-[10px]">
                <h2>Home</h2>
            </div>
            <div className="bg-white font-mono p-1 rounded-[10px]">
                <h2>Scale Models</h2>
            </div>
            <div className="bg-white font-mono p-1 rounded-[10px]">
                <h2>Apparell</h2>
            </div>
            <div className="bg-white font-mono p-1 rounded-[10px]">
                <h2>Tickets</h2>
            </div>
        </div>
    );
}

export default Menu;