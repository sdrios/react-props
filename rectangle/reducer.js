const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, dimension, color } = action;

    console.log("ENTERING REDUCER FUNCTION.......")
    console.log("reducer state:", state)
    console.log( "reducer action: ", action)
    // ACTION 1 - Increment dimension by 10
    if (type == "SIZE") {

        let newState =  {
            ...state,
            [dimension]: state[dimension] + 10
        }
        return newState
    }
    // ACTION 2 - Change the color
    if (type == "COLOR") {
        return { ...state, color }
    }

    return state;
}