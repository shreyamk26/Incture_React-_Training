// Initial state of your counter
// This is the starting point of the Redux store for this reducer
const initialState = {
    count: 0
};

// Reducer function for managing the counter state
// - state: current state (defaults to initialState if undefined)
// - actions: object describing what happened (must have a "type")
export const CounterReducer = (state = initialState, actions) => {
    switch (actions.type) {
        // If the action type is "INCREMENT"
        // Increase count by 1
        case 'INCREMENT':
            return {
                ...state,                 // spread the existing state (in case you add more keys later)
                count: state.count + 1    // update count
            };

        //  If the action type is "DECREMENT"
        // Decrease count by 1
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };

        //  If action type doesn’t match any case
        // Just return the existing state (no changes)
        default:
            return state;
    }
};
