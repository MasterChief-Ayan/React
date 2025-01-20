import './Header.css';
import {useState} from "react";
import Modal from '../Modal/Modal';

function Header({setModalStatus,setAddStatus}) {

    

    

    return  (
        <div className="Header">   
            <h1 className="HeaderName"> My React Store</h1>
            <div className="HeaderButtonDiv"> 
                <button className="HeaderButton" onClick = {setAddStatus}>Add Products</button>
                <button className="HeaderButton" onClick = {setModalStatus}>Cart</button>
            </div>


        </div>
    );
}

export default Header;