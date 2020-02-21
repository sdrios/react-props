const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => {
    console.log("ENTERING SUBSCRIBER FUNCTION.......")
    console.log("calling ReactDom to render the page")
    ReactDOM.render(<App rectangle={getState()} />, document.getElementById('rectangleContainer'))
});

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
var dimensions = ['height', 'width'];
dimensions.forEach(dimension => {
    document.getElementById(dimension).addEventListener('click', e => {
        
        dispatch({
            type: 'SIZE',
            dimension
        })
        console.log("BUTTON CLICKED.. dispatching REDUX")
    })
})

var colors = ['red', 'blue']
colors.forEach(color => {
    document.getElementById(color).addEventListener('click', e => {
        dispatch({
            type: 'COLOR',
            color
        })
    })
})
