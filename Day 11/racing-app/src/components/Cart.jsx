function Cart(props) {
    return (
        <div className="flex flex-box bg-white fixed right-[0px] top-[37px] w-[120px] h-[35px] items-center border-solid border-black border-2">
            <h2 className="font-mono text-md pl-1">Cart Total:</h2>
            <p className="font-mono text-md pl-1">{props.count}</p>
        </div>
    );
}

export default Cart;