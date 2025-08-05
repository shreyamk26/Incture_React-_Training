import { useDispatch } from "react-redux"
import { addToCart } from "../new_redux/action";

const products = [
    { id: 100, name: "Book1", price: 200 },
    { id: 200, name: "Book2", price: 300 },
    { id: 300, name: "Book3", price: 400 },
    { id: 400, name: "Book4", price: 500 },
    { id: 500, name: "Book5", price: 600 },
]

function ProductList() {
    const dispatch = useDispatch();
    return (
        <div>
            <h2 style={{color:"darkgreen"}}>Products : </h2>
            {products.map(product => (
                <div key={product.id} style={{ marginBottom: "10px" }}>
                    <span>{product.name} : : {product.price}</span>
                    <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => dispatch(addToCart(product))}>
                        Add To Cart</button>
              
                </div>
            ))}
        </div>
    )
}

export default ProductList;

