 import {memo} from "react";
 
 const Counter = memo(function Counter({cnt}) {
    console.log("Counter");
    return (
        <div>
            <h1> Counter : {cnt}</h1>
        </div>
    );
 })

 export default Counter;