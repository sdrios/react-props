// Render the circles using React!
const App = (props) => {
    let { circles } = props;

    console.log("ENTERING RENDER FUNCTION")
    console.log("props:", props)
   
    let circleStyle = circles.map((circle)=>{
        return {
                height: (circle.radius)*2,
                width: (circle.radius)*2,
                borderRadius: circle.radius,
                backgroundColor: circle.color
            }
    })
  
    return (
       circleStyle.map((circleDiv)=>{
        return <div style={circleDiv}></div>
       }
    ))
}

const Circle = props => {

    let { circle } = props;

    let diameter = circle.radius * 2;

    let circleStyle = {
        height: (circle.radius) * 2,
        width: (circle.radius) * 2,
        borderRadius: circle.radius,
        backgroundColor: circle.color
    }

    return <div style={circleDiv}></div>

}  // CHALLENGE: Write a separate Circle component for use in the App component