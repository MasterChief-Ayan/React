import React,{useState,useEffect} from 'react'
import Appcontext from './app-context'
import basicProducts from "../data/products.json";

const AppProvider = ({children}) => {

  const [modalStatus,setmodalStatus] = useState(false);
  const [modalAddItems, setmodalAddItems] = useState(false);
  const [allProducts,setallProducts] = useState ([]);
  const [addItems,setaddItems] = useState([]);
  const [loading,setloading]=useState(false);

  function setModalStatus () {
    setmodalStatus(true);
  }
  function removeModalStatus () {
    setmodalStatus(false)
  }

  function setAddStatus () {
    setmodalAddItems(true);
  }
  function removeAddStatus () {
    setmodalAddItems(false)
  }

  function addCartItems( name1, image1, id1 ) {
    const index = addItems.findIndex(item => item.id === id1); 
    if(index>=0){                                                // if already present in CART
       let  temp=[...addItems];
       temp[index].qty+=1;
       setaddItems(temp);
    }
    else{
      const newItem = { name:name1, image: image1 ,id :id1, qty: 1};
      setaddItems((prevItems) => [...prevItems, newItem]);
    }
  }

  function incrementQuantity (id){
      const index = addItems.findIndex(item => item.id === id);
      let temp =[...addItems];
      temp[index].qty+=1;
      setaddItems(temp);
  }

  function decrementQuantity (id) {
      const index = addItems.findIndex(item => item.id === id);
      let temp =[...addItems];
      if(temp[index].qty=== 1){
          temp =temp.filter(item => item.id !== id);
      }
      else{
          temp[index].qty-=1;
      }
      setaddItems(temp);
  }

  useEffect(() => {
    async function fetchProducts  () {
      setloading(true);
      try{
        const api = await fetch("https://ecomweb-46eef-default-rtdb.firebaseio.com/products.json");
        if(!api.ok) throw new Error("API call failed");
        const data = await api.json();
        setloading(false);
        setallProducts(data);
      }
      catch(error){
        setloading(false);
        console.log("Error",error);
      }
        
    };
    fetchProducts();
  },[])
  

  const x = {
    modalStatus,
    modalAddItems,
    allProducts,
    addItems,
    setallProducts,
    loading,
    setModalStatus,
    removeModalStatus,
    setAddStatus,
    removeAddStatus,
    addCartItems,
    incrementQuantity,
    decrementQuantity,
     
  };

  return (
    <Appcontext.Provider value = {x}>
        {children}
    </Appcontext.Provider>
  )
}

export default AppProvider