function Prod1(props) {
    return (
        <div className="mt-8"> 
            <h2 className="text-white">
                Products Available:</h2>
            <div className="flex flex-row space-x-[100px] mt-8">
                    <div className="bg-orange-500 border-4 border-white px-4 py-4">
                        <h2 className="font-mono text-md pl-1">Car Model</h2>
                        <p>{props.id1}</p>
                        <div className="font-mono bg-white border-2 ">
                        <p>{props.name1}</p>
                        <p>{props.body1}</p></div>
                        <button onClick={props.add} className="bg-yellow-500 p-1 text-sm font-mono mt-2">Add to Cart</button>
                    </div>
                    <div className="bg-orange-500 border-4 border-white px-4 py-4">
                        <h2 className="font-mono text-md pl-1">Car Model</h2>
                        <p>{props.id2}</p>
                        <div className="font-mono bg-white border-2 ">
                        <p>{props.name2}</p>
                        <p>{props.body2}</p></div>
                        <button onClick={props.add} className="bg-yellow-500 p-1 text-sm font-mono mt-2">Add to Cart</button>
                    </div>
            </div>
        </div>
    );
}

export default Prod1;