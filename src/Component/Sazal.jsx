

const Sazal = (props) => {
    const h1Style = {
        color: "red",
        fontSize: "30px"
    }

    const city = 'Dhaka'

    return (
        <div style={{width: "800px", textAlign: "center", border: "5px solid #ccc", padding: "20px"}}>
            Name : Sazal Roy <br />
            Age: {props.age} <br />
            City: {city} <br />
            Ex Name: {props.ex}
            <hr />
            <h1 style={h1Style}>Hello World</h1>
        </div>
    );
};

export default Sazal;