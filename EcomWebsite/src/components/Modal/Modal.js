import './Modal.css'
const Image = require("../../assets/black_shoes.png");

function Modal ({removeModalStatus,addItems,children}) {

    // if(!addItems.length) return null;

    return (<div className="backdrop" onClick={removeModalStatus}>
             <div className="Modal-div" onClick ={(item) => (item.stopPropagation())}>{children}</div>
        </div>);
}

export default Modal;