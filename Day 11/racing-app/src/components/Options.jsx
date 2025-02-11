function Options() {
    return (
        <div className="bg-orange-300 left-[0px] top-[70px] w-[200px] h-[500px] fixed">
            <div className="flex flex-col">
                <div className="bg-pink-400">
                    <h2>
                        Price Range:
                    </h2>
                    <div className="bg-teal-400">
                        <p>*slider goes here*</p>
                    </div>
                </div>
                <div className="bg-gray-500">
                    <h2>Filter based on:</h2>
                    <div className="flex flex-col">
                    <select name="Brand" id="type">
                        <option value="Brand-1"> Brand-1</option>
                        <option value="Brand-2"> Brand-1</option>
                        <option value="Brand-3"> Brand-1</option>
                    </select>
                    <select name="Type" id="type">
                        <option value="Type-1">Type-1</option>
                        <option value="Type-2">Type 2</option>
                        <option value="Type-3">Type 3</option>
                    </select>
                    <select name="Color" id="color">
                        <option value="Color-1">Color 1</option>
                        <option value="Color-2">Color 2</option>
                        <option value="Color-3">Color 3</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Options;