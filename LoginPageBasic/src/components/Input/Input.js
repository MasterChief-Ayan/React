function Input ({setFunction,setCnt}) {
    
    return (
        <>
            <input type ="number" onChange = {setFunction}></input>
            <button onClick={setCnt} >Set</button>
        </>
    );
}

export default Input;