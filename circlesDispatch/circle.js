const Circle = props => {

    let { circle, uniqueId } = props;

    let diameter = circle.radius * 2;

    let circleStyle = {
        height: diameter,
        width: diameter,
        borderRadius: circle.radius,
        backgroundColor: circle.color
    };

     let handleClick = () => {
    //console.log("dispatching redux action")
    //console.log("in handleClick uniqueId is ", uniqueId);
    reduxStore.dispatch({
      type: "REMOVE_CIRCLE",
      id : uniqueId
    })
  };

  return <div style = {circleStyle} onClick={handleClick} />

} 