import './Header.css';
import {useContext,useState} from "react";
import Modal from '../Modal/Modal';
import AppProvider from '../../store/AppProvider';
import Appcontext from '../../store/app-context';


function Header() {

    
    const {setModalStatus,setAddStatus} = useContext(Appcontext);
    

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