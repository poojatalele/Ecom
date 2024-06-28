import { useSelector } from "react-redux";

function Cart() {
    let cart = useSelector((state) => {
        return state.cart.items;
    })
    return (
        <div>
            <ul>
            {
                Object.values(cart).map((item) => {
                    return (<li key={item.id}>{item.title}</li>)
                })
                }
            </ul>
        </div>
    )
}

export default Cart;