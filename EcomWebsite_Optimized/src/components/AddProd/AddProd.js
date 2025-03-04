import Appcontext from "../../store/app-context";
import AppProvider from "../../store/AppProvider";
import Modal from "../Modal/Modal";
import './AddProd.css'
import {useState,useContext,useRef} from "react";

function AddProd () {

    const {modalAddItems,removeAddStatus,allProducts,setallProducts} = useContext (Appcontext);
    const inputRef= useRef();
    const [temp,settemp] = useState("");

    function assignNewProduct (temp) {
        const tempProd={
            "id": Object.keys(allProducts).length+1,
            "image": "default_product.png",
            "name": temp
        }
        async function poster () {
            try{
                const api = await fetch ("https://ecomweb-46eef-default-rtdb.firebaseio.com/products.json",
                    {
                        method:"POST",
                        headers: 
                        {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(tempProd)
                    }
                );
                if(!api.ok) throw new Error("Post Failed!");
                const data = await api.json();
                console.log(data);
            }
            catch(error){
                console.log("Erro occured:",error);
            }
        }
        poster();

        return {...allProducts,[Object.keys(allProducts).length]:tempProd};
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

    return;
}

export default AddProd;