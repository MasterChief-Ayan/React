import {useContext,useState} from "react";
import AppContext from "./store/app-context";
import Login from "./components/Login/Login";
import AppProvider from "./store/AppProvider";

function App() {
  // const msg = useContext(AppContext);
  
  return (
    
      <AppProvider > 
        <Login/>
      </AppProvider>
    
  );
}

export default App;






































/*
import {useState} from "react";
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Pattern from "./components/P/Pattern";
*/


/*

 const [cnt,setcnt] = useState(0);
  const [tempcnt,settempcnt] = useState(0);

  function increaseCnt () {
    const temp = cnt;
    setcnt(temp+1);
  }
  function decreaseCnt () {
    const temp = cnt;
    if(temp>0) setcnt(temp-1);
  }
  function setTempCnt ( response) {
    settempcnt(response.target.value);
  }
  function setCnt () {
    if(tempcnt>=0) setcnt(tempcnt);
  }

  console.log("APP");

*/

/*
  <Counter cnt={cnt} ></Counter>
  <Button inc = {increaseCnt} dec = {decreaseCnt}></Button>
  <Input setFunction={setTempCnt} setCnt={setCnt}></Input>
  <Pattern></Pattern>
      
*/