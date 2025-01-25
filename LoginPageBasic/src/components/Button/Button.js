
function Button ({inc,dec}) {
    console.log("Button");
    return  (
        <div>
            <button onClick = {inc}>Incease</button>
            <button onClick = {dec}>Decrease</button>
        </div>
    )
}

export default Button;