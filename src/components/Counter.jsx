import { useSelector, useDispatch } from "react-redux";

function Counter() {
    // useSelector: hook to read data from the Redux store
    // Here, we’re selecting `state.count` from the store
    const count = useSelector(state => state.count);

    //  useDispatch: hook to get the dispatch function
    // Dispatch is used to send actions to the Redux store
    const dispatch = useDispatch();

    return (
        <div>
            {/* Display the current count from Redux state */}
            <h3>Count : {count}</h3>

            {/*  Dispatch an INCREMENT action when button is clicked */}
            <button style={{background:"yellow"}} onClick={() => dispatch({ type: 'INCREMENT' })}>
                INCREMENT
            </button>
            {/* Note: The `type` key is mandatory in Redux actions */}

            {/*  Dispatch a DECREMENT action when button is clicked */}
            <button  style={{background:"yellow"}} onClick={() => dispatch({ type: 'DECREMENT' })}>
                DECREMENT
            </button>
        </div>
    );
}

export default Counter;
