import {createContext} from "react";

const  Appcontext = createContext(
    {
        modalStatus:false,
        modalAddItems:false,
        allProducts:[],
        addItems:[],
        loading:false,
        setallProducts: () => {},
        setModalStatus: () => {},
        removeModalStatus: () => {},
        setAddStatus: () => {},
        removeAddStatus: () => {},
        addCartItems: () => {},
        incrementQuantity: () => {},
        decrementQuantity: () => {},
    }
    );

export default Appcontext;