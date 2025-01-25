import React, {useReducer,useEffect} from 'react'
import AppContext from './app-context'

function authReducer(state,action){ //State stores the state | Action is an object

    if(action.type === "LOGINSWAP"){
      return {
        loginStatus : !state.loginStatus,
        username: action.name,
        password: action.pass
      };
    }
    else return state;
}

function AppProvider  ({children})  {


    const [authState,dispatchAuth] = useReducer(authReducer,{
      loginStatus : false,
      username: "",
      password:""
    });
    
    useEffect(()=>{
      const loginLocalSave = JSON.parse(localStorage.getItem("loginStatus"));
      if(loginLocalSave){ 
        dispatchAuth({
          type : "LOGINSWAP",
          name: loginLocalSave.name,
          pass: loginLocalSave.pass
        })
      }
    },[]);

    function togleFunction(name,pass){
      const temp ={
        type : "LOGINSWAP",
        name: name,
        pass: pass
      }
      if(!authState.loginStatus) localStorage.setItem("loginStatus",JSON.stringify(temp));
      else localStorage.removeItem("loginStatus");

      dispatchAuth(temp)
    }  

    return (
    <AppContext.Provider value = {{loginStatus : authState.loginStatus,log:togleFunction}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider