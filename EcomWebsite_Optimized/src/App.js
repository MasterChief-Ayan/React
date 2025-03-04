import Header from "./components/Header/header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import AddProd from "./components/AddProd/AddProd";
import basicProducts from "./data/products.json";
import {useState} from "react";
import AppProvider from "./store/AppProvider";

function App() {
  // const [modalStatus,setmodalStatus] = useState(false);
  // const [modalAddItems, setmodalAddItems] = useState(false);
  // const [allProducts,setallProducts] = useState ([...basicProducts]);

  // function setModalStatus () {
  //   setmodalStatus(true);
  // }
  // function removeModalStatus () {
  //   setmodalStatus(false)
  // }

  // function setAddStatus () {
  //   setmodalAddItems(true);
  // }
  // function removeAddStatus () {
  //   setmodalAddItems(false)
  // }

  // const [addItems,setaddItems] = useState([]);

  // function addCartItems( name1, image1, id1 ) {
  //   const index = addItems.findIndex(item => item.id === id1); 
  //   if(index>=0){                                                // if already present in CART
  //      let  temp=[...addItems];
  //      temp[index].qty+=1;
  //      setaddItems(temp);
  //   }
  //   else{
  //     const newItem = { name:name1, image: image1 ,id :id1, qty: 1};
  //     setaddItems((prevItems) => [...prevItems, newItem]);
  //   }
  // }

  // function incrementQuantity (id){
  //     const index = addItems.findIndex(item => item.id === id);
  //     let temp =[...addItems];
  //     temp[index].qty+=1;
  //     setaddItems(temp);
  // }

  // function decrementQuantity (id) {
  //     const index = addItems.findIndex(item => item.id === id);
  //     let temp =[...addItems];
  //     if(temp[index].qty== 1){
  //         temp =temp.filter(item => item.id !== id);
  //     }
  //     else{
  //         temp[index].qty-=1;
  //     }
  //     setaddItems(temp);
  // }


  return (
    <AppProvider>
      
      <Header ></Header>
      
      <Products  />
      
      <Cart ></Cart>
      
      <AddProd ></AddProd>
    </AppProvider>
  );
}

export default App;
