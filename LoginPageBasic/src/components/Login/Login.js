import React from 'react';
import {useContext,useState,useEffect} from "react";
import AppContext from '../../store/app-context';
import "./Login.css"
function Login ()  {

    const {loginStatus,log} = useContext(AppContext);
    const [tempUser,setTempUser] = useState("");
    const [tempPass,setTempPass] = useState("");


  return (
    <div className="login-outter-div">
      <div className="login-inner-div">



        {!loginStatus ?
        <><div className="login-input-div">
            <input type ="text" placeHolder=" Username" className="login-input-text" value ={tempUser}onChange ={(a) => setTempUser(a.target.value)}></input>
          </div>
          <div className="login-input-div">
            <input type ="password" placeHolder=" Password" className="login-input-text" value ={tempPass}onChange ={(a) => setTempPass(a.target.value)}></input>
          </div>
          <div className="login-btn-div">
            {tempPass.length >=5 && tempUser.length >=5 ? 
              <button onClick = {() =>log(tempUser,tempPass)} className="login-btn">Login</button>
              : //Condition
              <button className="disable">Login</button>
            }
          </div>
        </>
        : //Condition
        <>
          <div className="login-input-div">
            <h1> Hello {(JSON.parse(localStorage.getItem("loginStatus"))).name}!</h1>
          </div>
           <div className="login-btn-div">
               <button onClick = {log} className="logout-btn">LogOut</button>
           </div>
        </> 
        } 
        </div>
    </div>
  )
}
export default Login;

//{loginStatus ?   <button onClick = {log} className="logout-btn">LogOut</button>: <button onClick = {log} className="login-btn">Login</button>} 