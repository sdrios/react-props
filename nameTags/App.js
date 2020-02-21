// Render the name tags using React!
const App = (props) => {
    let { nameTags } = props;
    console.log(props);
    console.log(nameTags);
    let nameStyle={
        border:"1px solid black",
        margin: "5px",
    }
    return (
        nameTags.map((nameTag) => {
            console.log(nameTag);
           return <div style={nameStyle}>{nameTag}</div>
        })

    )
}

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component
const NameTag = null;  