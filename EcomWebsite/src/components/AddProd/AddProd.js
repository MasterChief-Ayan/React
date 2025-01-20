import Modal from "../Modal/Modal";
import './AddProd.css'
import {useRef} from "react";
import {useState} from "react";

function AddProd ({modalAddItems,removeAddStatus,allProducts,setallProducts}) {
    const inputRef= useRef();
    const [temp,settemp] = useState("");

    function assignNewProduct (temp) {
        const tempProd={
            "id": allProducts.length+1,
            "image": "default_product.png",
            "name": temp
        }
        return [...allProducts,tempProd];
    }

    function takeInput (event) {
        event.preventDefault();
        const temp=inputRef.current.value;
        if( temp )setallProducts(assignNewProduct(temp));
        removeAddStatus(false);
    }


    if(!modalAddItems) return;

    return <Modal removeModalStatus={removeAddStatus}>
        <div> 
            <div className ="AddProd-title"><h2>Add Product</h2></div>
            <br></br>
            <div className ="AddProd-text"><p>Enter Product Name</p></div>
            <div className="AddProd-input-div">
                <form onSubmit = {takeInput}>
                    <input type="text" className ="AddProd-input" placeholder="Enter Here" ref ={inputRef}></input>
                    <div className ="AddProd-button-div"> <button type="submit" className ="AddProd-button">Add Product</button></div>
                </form>
            </div>
            
            
        </div>
    </Modal>

    return 
}

export default AddProd;