// Render the rectangle using React!
const App = (props) => {

    console.log("ENTERING REACT COMPONENT.....")
    console.log("props:", props)
    
    let { rectangle } = props; //take rectangle property from props object + store in rectangle variable



    //return rectangle 
    let myStyle = {
        width:rectangle.width,
        height:rectangle.height,
        backgroundColor:rectangle.color
    }
    return (
        <div style={myStyle}></div>
    )
}
