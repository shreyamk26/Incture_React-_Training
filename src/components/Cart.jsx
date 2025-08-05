// import { useSelector } from "react-redux";

// function Cart() {
//     const cartItems = useSelector(state => state.cart);
    

//     return (
//         <div>
//             <h2>Cart Page :</h2>
//             {cartItems.length === 0 && <p>Cart is Empty</p>}
//             <ul>
//                 {cartItems.map((item, index) => (
//                     <li key={index}>
//                         {item.name} : {item.price} Rupees
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Cart;



import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity } from "../new_redux/action";

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();


    let cartTotal = 0;
    for (const item of cart) {
        cartTotal += item.price * item.quantity;
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p style={{color:"red"}}>Your cart is empty.</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} style={{ marginBottom: "10px" }}>
                        <span>
                            {item.name} - ₹{item.price} x {item.quantity}
                        </span>
                        <button
                            style={{ marginLeft: "10px" , color:"red"}}
                            onClick={() => dispatch(decrementQuantity(item.id))}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
            <hr />
            <h3 style={{color:"darkgreen"}}>Total: ₹{cartTotal}</h3>
        </div>
    );
}

export default Cart;