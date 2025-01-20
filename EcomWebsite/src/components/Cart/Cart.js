import Modal from "../Modal/Modal";
import './Cart.css';
const Image = require("../../assets/black_shoes.png");


function Cart({modalStatus,removeModalStatus,addItems,decrementQuantity,incrementQuantity}) {
    if(!modalStatus){
        return null;
    }

    
    return (
        <div>
            <Modal removeModalStatus={removeModalStatus} addItems={addItems}>
            <div className="Cart-title"><h1>Cart</h1>
            
                {addItems.length !==0 ? addItems.map((cur) => (

                <div  className="Cart-items">

                    <div className="Cart-image-plus-text">
                        <div className="Cart-items-image" >
                            <img src={require(`../../assets/${cur.image}`)} alt={cur.name}></img>
                        </div>
                        <div className="Cart-items-text">{cur.name}</div>
                    </div>

                    <div className="Cart-items-quantity">
                        Qty: {cur.qty} 
                        <div className="Cart-quanitiy-btn-div">
                            <button className="Cart-button-qunaitiy" onClick={() => incrementQuantity(cur.id)}>+</button>
                            <button className="Cart-button-qunaitiy" onClick={() => decrementQuantity(cur.id)}>-</button>
                        </div>
                    </div>

                </div>
                )): <div className="Empty-cart-div">Cart is Empty, but nor for long!</div>}

                <div className="Cart-footer">
                    <button className="HeaderButton" onClick={removeModalStatus}>Back</button> 
                    {addItems.length !== 0 && <button className="HeaderButton" onClick={removeModalStatus}>Proceed</button>}
                </div>
            </div>
            </Modal>

        </div>
        
    );
}

export default Cart;