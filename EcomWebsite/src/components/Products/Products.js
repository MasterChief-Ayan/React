import './Products.css';
// import productData from "../../data/products.json";
 // gives array of object 
const Image = require("../../assets/black_shoes.png");

//--------------SIMPLE But dont get the feel of using REACT

// function Products() {

//     return (
//         <div class="Products-first-box">
//         <div className = "Products-container">
//             {productData.map((data) =>  (
//                 <div className = "Products-items">
//                     <div className = "Products-items-parent-div"><img src={require(`../../assets/${data.image}`)} alt={data.id}/> </div>
//                     <div className = "Products-items-name"><strong>{data.name}</strong></div>
//                     <div className="Prodcuts-items-button-div"><button className="HeaderButton">Add to Cart</button></div>                    
//                 </div>
//             ))}
//         </div>
//         </div>
//     );
// }

function Product ({id, name , image,addCartItems}) {
    return  (
        <div className = "Products-items">
            <div className = "Products-items-parent-div"><img src={require(`../../assets/${image}`)} alt={id}/> </div>
            <div className = "Products-items-name"><strong>{name}</strong></div>
            <div className="Prodcuts-items-button-div"><button className="HeaderButton" onClick ={() => addCartItems(name,image,id)}>Add to Cart</button></div>                    
        </div>
    );
}

function Products({addCartItems,productData}) {

    return (
        <div class="Products-first-box">
        <div className = "Products-container">
            {productData.map((data) =>  (
                <Product id={data.id} image = {data.image} name={data.name} addCartItems={addCartItems}/>
            ))}
        </div>
        </div>
    );
}



export default Products;