// export const ADD_TO_CART = 'ADD_TO_CART';

// export const addToCart=(product)=>{
//     return{
//         type: ADD_TO_CART,
//         payload: product

//     }
// }


export const ADD_TO_CART = 'ADD_TO_CART';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

export const addToCart = (product) => {
    return { type: ADD_TO_CART, payload: product };
};

export const decrementQuantity = (productId) => {
    return { type: DECREMENT_QUANTITY, payload: productId };
};