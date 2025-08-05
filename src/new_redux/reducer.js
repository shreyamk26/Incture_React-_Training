// import { ADD_TO_CART } from "./action";

// const initialState = {
//     cart: []
// };

// const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TO_CART:
//             return {
//                 ...state,
//                 cart: [...state.cart, action.payload]
//             };

//         default:
//             return state;
//     }
// };

// export default cartReducer;

import { ADD_TO_CART, DECREMENT_QUANTITY } from "./action";

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const exist= state.cart.find(item => item.id === action.payload.id);
            if (exist) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                };
            }
        
        case DECREMENT_QUANTITY:
            const updatedCart = [];
            for (const item of state.cart) {
                if (item.id === action.payload) {
        
                    if (item.quantity > 1) {
                        updatedCart.push({ ...item, quantity: item.quantity - 1 });
                    }
              
                } else {
                
                    updatedCart.push(item);
                }
            }
            return {
                ...state,
                cart: updatedCart
            };

        default:
            return state;
    }
};

export default cartReducer;